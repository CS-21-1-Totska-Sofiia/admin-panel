import { defineStore } from 'pinia';

export const useCategoryStore = defineStore('category', {
    state: () => ({
        allCategories: [],
        isEntityCreated: 'pending',
        isEntityUpdated: 'pending',
        isEntityDeleted: 'pending',
    }),

    actions: {
        async getAllCategories() {
            const data = await fetch('http://localhost:3000/categories/allEntities');
            const dataJson = await data.json();
            this.allCategories = dataJson.data;
        },
        async postCategory(partitionKey, rowKey, name, parentCategory) {
            this.isEntityCreated = 'pending';
            const result = await fetch(`http://localhost:3000/categories/entity?partitionKey=${partitionKey}&rowKey=${rowKey}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({name, parentCategory: parentCategory ? parentCategory : 'root'}),
            });
            if (result.status == 200)
                this.isEntityCreated = 'fulfilled';
            else this.isEntityCreated = 'rejected';
            console.log(await result.json());
        },
        async patchCategory(partitionKey, rowKey, name, parentCategory) {
            const result = await fetch(`http://localhost:3000/categories/entity?partitionKey=${partitionKey}&rowKey=${rowKey}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({name, parentCategory: parentCategory ? parentCategory : 'root'}),
            });

            if (result.status == 200) {
                this.isEntityUpdated = 'fulfilled';
            }
            else {
                this.isEntityUpdated = 'rejected';
            }

            const resultJson = await result.json();
        },
        async deleteCategory(partitionKey, rowKey) {
            this.isEntityDeleted = 'pending';
            const result = await fetch(`http://localhost:3000/categories/entity?partitionKey=${partitionKey}&rowKey=${rowKey}`, {
                method: 'DELETE',
            });
            if (result.status == 200)
                this.isEntityDeleted = 'fulfilled';
            else
                this.isEntityDeleted = 'rejected';
        },
    }
});
