import { stripeInstance } from '../../config/stripe.mjs';

export const createCustomerInStripe = async (email, userId) => {
  const customerCreationQuery = await stripeInstance.customers.create({
    email: email,
    metadata: {
      userId: userId,
    },
  });

  return customerCreationQuery;
};

//* DOCS --> https://docs.stripe.com/api/customers/create
