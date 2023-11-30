import { defineStore } from 'pinia';

export const useGoodStore = defineStore('good', {
    state: () => ({
        allGoods: [],
    }),

    actions: {
        async getAllGoods() {

        },
        async postGood(partitionKey, rowKey, name, parentCategory) {
            
        },
        async patchGood(partitionKey, rowKey, name) {

        },
        async deleteGood(partitionKey, rowKey) {

        },
    }
});
