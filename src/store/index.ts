import { createStore } from "vuex";

import { FormObj } from "@/model/costs";

export const store = createStore({
  state: {
    payments: [] as Array<object>,
  },
  getters: {
    getPayments: (state): object[] => state.payments,
  },
  mutations: {
    setPayment(state, payload: FormObj) {
      state.payments.push(payload);
    },
  },
  actions: {},
  modules: {},
});

export function useStore() {
  return store;
}
