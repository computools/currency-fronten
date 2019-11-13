import Vue from 'vue';

export const setCurrencies = (state, currencies) => {
  state.currencies = currencies;
};

export const setCurrencyDetails = (state, currency) => {
  Vue.set(state.currencyDetails, currency.id, currency)
};
