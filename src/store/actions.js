import CurrencyService from '@/services/CurrencyService';

export const fetchCurrency = ({ commit }, id) => {
  return CurrencyService.getCurrency(id)
    .then((res) => {
      commit('setCurrencyDetails', res.data);
    })
    .catch(err => console.log(err));
};

export const getCurrencyWithPagination = ({
  commit,
}, { 
  take,
  skip,
  }) => {
  return CurrencyService.getCurrencyWithPagination({
    take,
    skip,
  })
    .then((res) => {
      commit("setCurrencies", res.data);
    })
    .catch(err => console.log(err));
};