import { createStore } from "vuex";

import { FormObj } from "@/model/costs";

export const store = createStore({
  state: {
    payments: [] as Array<object>,
    paymentOnPage: [] as Array<object>,
  },
  getters: {
    getPayments: (state): object[] => state.payments,
    getPaymentsLength: (state): number => state.payments.length,
    getPaymentsPage: (state): object[] => state.paymentOnPage,
  },
  mutations: {
    setPayment(state, payload: FormObj) {
      payload.itemId = state.payments.length + 1;
      state.payments.push(payload);
    },
    deleteItemFromList(state, payloadId: number) {
      state.payments.splice(payloadId, 1);
    },
    clearPayments(state) {
      state.payments = [];
    },
  },
  actions: {
    addPayment: ({ commit }, obj) => {
      commit("setPayment", { ...obj });
    },
  },
  modules: {},
});

export function useStore() {
  return store;
}
