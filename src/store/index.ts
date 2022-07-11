import { createStore } from "vuex";

import { FormObj } from "@/model/costs";

export const store = createStore({
  state: {
    payments: [] as Array<object>,
  },
  getters: {
    getPayments: (state) => state.payments,
  },
  mutations: {
    setPayment(state, payload: FormObj) {
      console.log(payload);
      payload.itemId = state.payments.length + 1;
      state.payments.push(payload);
    },
  },
  actions: {},
  modules: {},
});

export function useStore() {
  return store;
}
