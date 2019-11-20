import http from '@/api';
import {
  API
} from '@/api/routes';

export default {
  getCurrency(id) {
    return http.get(API.CURRENCY(id));
  },
  getCurrencyWithPagination({take, skip}) {
    return http.get(API.CURRENCY_PAGINATION({
      take,
      skip,
    }));
  },
  getCurrencyHistory(id) {
    return http.get(API.CURRENCY_HISTORY(id));
  },
};
