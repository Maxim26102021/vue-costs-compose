import { createStore } from "vuex";

import { FormObj } from "@/model/costs";

export const store = createStore({
  state: {
    payments: [] as Array<object>,
  },
  getters: {
    getPayments: (state): object[] => state.payments,
    getPaymentsLength: (state): number => state.payments.length,
  },
  mutations: {
    setPayment(state, payload: FormObj) {
      payload.itemId = state.payments.length + 1;
      state.payments.push(payload);
    },
    deleteItemFromList(state, payloadId: number) {
      state.payments.splice(payloadId, 1);
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
