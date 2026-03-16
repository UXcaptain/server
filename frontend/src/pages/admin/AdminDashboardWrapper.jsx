import { Outlet } from 'react-router'
import AdminNavBar from '../../components/partials/AdminNavBar.jsx'
import { useState } from "react";
import { SiteFooter } from '../../components/partials/SiteFooter';

export const AdminDashboardWrapper = () => {
    
    const [loading, setLoading] = useState(false);
    
    
    return (
        <div>
            <AdminNavBar />
            <h1>This is the admin dashboard and is followed by outlets</h1>
            <div>
                <Outlet />
            </div>
            <SiteFooter />
        </div>
    )
}

export default AdminDashboardWrapper;