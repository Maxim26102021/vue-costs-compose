import { useStore } from "@/store";
import { FormObj } from "@/model/costs";
/* eslint-disable */
export function addToStore(obj: FormObj): void {
    obj.itemId = useStore().getters.getPayments.length + 1;
    useStore().commit("setPayment", { ...obj });
}
