import Vue from 'vue';

export const setCurrencies = (state, currencies) => {
  state.currencies = currencies;
};

export const setCurrencyDetails = (state, currency) => {
  Vue.set(state.currencyDetails, currency.originalId, currency)
};

export const setCurrencyHistory = (state, currencies) => {
  Vue.set(state.currencyHistory, currencies[0].originalId, currencies);
};