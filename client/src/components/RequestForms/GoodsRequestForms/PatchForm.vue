<script setup>
import {ref} from 'vue';

import { useGoodStore } from '../../../stores/good.js';

const goodStore = useGoodStore();


const partitionKey = ref('');
const rowKey = ref('');
const name = ref('');
const parentCategory = ref(null);



const sendRequest = () => {
    goodStore.patchGood(partitionKey.value, rowKey.value, name.value, parentCategory.value);
}

</script>

<template>
    <form>
        <label>Partition key</label>
        <input v-model="partitionKey"/>
        <label>Row key</label>
        <input v-model="rowKey"/>
        <div>
        <label>New name</label>
        <input v-model="name"/>
        <label>New parent category</label>
        <select v-model="parentCategory">
            <option value="root">None</option>
            <option v-for="i in goodStore.allGoods.length" :key="i"
                    :value="goodStore.allGoods[i-1].name">
                {{ goodStore.allGoods[i-1].name }}
            </option>
        </select>
        </div>
    </form>
    <button class="send-btn" @click="sendRequest">Edit good</button>
    <div class="result">
        <div class="success"><p>Updated</p></div>
        <div class="fail">Failed to update</div>
    </div>
</template>

<style scoped>
input {
    margin-right: 20px;
    border-radius: 5px;
    border: 1px solid gray;
    padding: 3px;
}
label {
    margin-right: 5px;
}
select {
    padding: 3px;
    border-radius: 5px;
}
.send-btn {
    background: #d9effe;
    border: 1px solid #5075ff;
    border-radius: 5px;
    padding: 10px 20px;
    margin-top: 20px;
    cursor: pointer;
}
.result {
    margin-top: 20px;
    padding: 20px;
}
.success {
    width: 300px;
    height: 50px;
    background-color: #5bff2f;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.fail {
    width: 300px;
    height: 50px;
    background-color: #f74444;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
}
p {
    font-weight: 600;
}

div {
    margin-top: 20px;
}
</style>
