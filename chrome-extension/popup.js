// API Configuration
const API_BASE_URL = 'http://localhost:3000/api/v1';

// State management
let state = {
  isAuthenticated: false,
  user: null,
  currentView: 'login',
  analysisData: null,
  analysisEntryId: null,
  presignedUrl: null
};

// DOM Elements
const elements = {
  loginView: document.getElementById('login-view'),
  participateView: document.getElementById('participate-view'),
  loadingView: document.getElementById('loading-view'),
  loginForm: document.getElementById('login-form'),
  participateForm: document.getElementById('participate-form'),
  userEmail: document.getElementById('user-email'),
  userStatus: document.getElementById('user-status'),
  logoutBtn: document.getElementById('logout-btn'),
  loginBtn: document.getElementById('login-btn'),
  participateBtn: document.getElementById('participate-btn'),
  loginError: document.getElementById('login-error'),
  participateError: document.getElementById('participate-error'),
  email: document.getElementById('email'),
  password: document.getElementById('password'),
  analysisId: document.getElementById('analysis-id'),
  registerLink: document.getElementById('register-link')
};

// API Client
class ApiClient {
  static async request(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    const config = {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      ...options
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();
      return { data, status: response.status };
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  static async login(email, password) {
    return this.request('/auth/login/local', {
      method: 'POST',
      body: JSON.stringify({ email, password })
    });
  }

  static async participate(analysisId) {
    return this.request('/analysis/participate', {
      method: 'POST',
      body: JSON.stringify({ analysisId })
    });
  }

  static async logout() {
    return this.request('/auth/logout', {
      method: 'POST'
    });
  }
}

// Storage Manager
class StorageManager {
  static async get(key) {
    return new Promise((resolve) => {
      chrome.storage.local.get([key], (result) => {
        resolve(result[key]);
      });
    });
  }

  static async set(key, value) {
    return new Promise((resolve) => {
      chrome.storage.local.set({ [key]: value }, resolve);
    });
  }

  static async remove(key) {
    return new Promise((resolve) => {
      chrome.storage.local.remove([key], resolve);
    });
  }

  static async clear() {
    return new Promise((resolve) => {
      chrome.storage.local.clear(resolve);
    });
  }
}

// View Manager
class ViewManager {
  static showView(viewName) {
    elements.loginView.style.display = 'none';
    elements.participateView.style.display = 'none';
    elements.loadingView.style.display = 'none';

    switch (viewName) {
      case 'login':
        elements.loginView.style.display = 'block';
        break;
      case 'participate':
        elements.participateView.style.display = 'block';
        break;
      case 'loading':
        elements.loadingView.style.display = 'flex';
        break;
    }
  }

  static showLoading() {
    this.showView('loading');
  }

  static showError(element, message) {
    element.textContent = message;
    element.style.display = 'block';
  }

  static hideError(element) {
    element.style.display = 'none';
  }

  static setButtonLoading(btn, isLoading) {
    const btnText = btn.querySelector('.btn-text');
    const btnLoading = btn.querySelector('.btn-loading');

    if (isLoading) {
      btnText.style.display = 'none';
      btnLoading.style.display = 'inline';
      btn.disabled = true;
    } else {
      btnText.style.display = 'inline';
      btnLoading.style.display = 'none';
      btn.disabled = false;
    }
  }
}

// Auth Manager
class AuthManager {
  static async init() {
    const user = await StorageManager.get('user');
    if (user) {
      state.isAuthenticated = true;
      state.user = user;
      this.updateUI();
      ViewManager.showView('participate');
    } else {
      state.isAuthenticated = false;
      ViewManager.showView('login');
    }
  }

  static async login(email, password) {
    ViewManager.setButtonLoading(elements.loginBtn, true);
    ViewManager.hideError(elements.loginError);

    try {
      const { data, status } = await ApiClient.login(email, password);

      if (status === 200) {
        // Store user in chrome.storage
        await StorageManager.set('user', data);

        state.isAuthenticated = true;
        state.user = data;

        this.updateUI();
        ViewManager.showView('participate');
      } else {
        ViewManager.showError(elements.loginError, data.message || 'Login failed');
      }
    } catch (error) {
      ViewManager.showError(elements.loginError, 'Error de conexión. Por favor intenta de nuevo.');
    } finally {
      ViewManager.setButtonLoading(elements.loginBtn, false);
    }
  }

  static async logout() {
    try {
      await ApiClient.logout();
    } catch (error) {
      console.error('Logout error:', error);
    }

    await StorageManager.clear();

    state.isAuthenticated = false;
    state.user = null;

    this.updateUI();
    ViewManager.showView('login');
  }

  static updateUI() {
    if (state.isAuthenticated && state.user) {
      elements.userEmail.textContent = state.user.email || 'Usuario';
      elements.userStatus.style.display = 'flex';
    } else {
      elements.userStatus.style.display = 'none';
    }
  }
}

// Participate Manager
class ParticipateManager {
  static async participate(analysisId) {
    ViewManager.setButtonLoading(elements.participateBtn, true);
    ViewManager.hideError(elements.participateError);

    try {
      const { data, status } = await ApiClient.participate(analysisId);

      if (status === 200) {
        // Store analysis data and open recording page
        state.analysisData = data.analysisData;
        state.analysisEntryId = data.analysisEntryId;
        state.presignedUrl = data.analysisEntryPresignedUploadUrl;

        await StorageManager.set('analysisData', data.analysisData);
        await StorageManager.set('analysisEntryId', data.analysisEntryId);
        await StorageManager.set('presignedUrl', data.analysisEntryPresignedUploadUrl);

        // Open recording page in new window
        chrome.tabs.create({
          url: chrome.runtime.getURL('recording.html'),
          active: true
        });

        // Close popup
        window.close();
      } else {
        ViewManager.showError(elements.participateError, data.message || 'Error al participar en análisis');
      }
    } catch (error) {
      console.error('Participate error:', error);
      ViewManager.showError(elements.participateError, 'Error de conexión. Por favor intenta de nuevo.');
    } finally {
      ViewManager.setButtonLoading(elements.participateBtn, false);
    }
  }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', async () => {
  // Initialize authentication
  await AuthManager.init();

  // Login form submit
  elements.loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = elements.email.value.trim();
    const password = elements.password.value;

    if (email && password) {
      await AuthManager.login(email, password);
    }
  });

  // Participate form submit
  elements.participateForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const analysisId = elements.analysisId.value.trim();

    if (analysisId) {
      await ParticipateManager.participate(analysisId);
    }
  });

  // Logout button
  elements.logoutBtn.addEventListener('click', async () => {
    await AuthManager.logout();
  });

  // Register link (open new tab)
  elements.registerLink.addEventListener('click', (e) => {
    e.preventDefault();
    chrome.tabs.create({
      url: `${API_BASE_URL.replace('/api/v1', '')}/auth/register/participant`,
      active: true
    });
  });
});
