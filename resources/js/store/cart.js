import { fireNotification, NotificationTypes } from "@/plugins/Notifications";

export default {
    namespaced: true,
    state: {
        items: new Map(), // Map<number,{imgSrc:string,title:string,price:number,quantity:number}>
        totalPrice: 0,
    },
    mutations: {
        CLEAR(state) {
            state.items.clear();
        },
        ADD_ONE_ITEM(state, payload) {
            const { id, ...item } = payload;
            if (state.items.has(id)) state.items.get(id).quantity++;
            else {
                state.items.set(id, { ...item, quantity: 1 });
                fireNotification(NotificationTypes.ITEM_ADDED);
            }
            state.totalPrice += item.price;
        },
        REMOVE_ONE_ITEM(state, payload) {
            const item = state.items.get(payload);
            if (!item) return;
            const newQuantity = item.quantity - 1;
            if (newQuantity < 1) state.items.delete(payload);
            else item.quantity = newQuantity;
            state.totalPrice -= item.price;
        },
        // payload: {newQuantity:number,id:number}
        UPDATE_QUANTITY(state, { id, newQuantity }) {
            const item = state.items.get(id);
            if (!item || typeof newQuantity === "undefined" || newQuantity < 0)
                return;
            const priceChange = (newQuantity - item.quantity) * item.price;
            if (newQuantity === 0) state.items.delete(id);
            else item.quantity = newQuantity;
            state.totalPrice += priceChange;
        },
    },
    getters: {
        itemCount: (state) => (id) => state.items.get(id)?.quantity || 0,
    },
};
