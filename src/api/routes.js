export const API = {
  CURRENCY: id => `/api/currency/${id}`,
  CURRENCY_PAGINATION: ({
    take = 10, 
    skip = 10,
  }) => `/api/currencies?take=${take}&skip=${skip}`
};
