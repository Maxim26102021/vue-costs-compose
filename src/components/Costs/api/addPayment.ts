import { useStore } from "@/store";
import { FormObj } from "@/model/costs";
import { ref, Ref } from "vue";
/* eslint-disable */
export function addToStore(obj: FormObj): void {
    const newObj: Ref<FormObj> = ref(obj)
    newObj.value.itemId = useStore().getters.getPayments.length + 1;
    useStore().commit("setPayment", newObj);
}
