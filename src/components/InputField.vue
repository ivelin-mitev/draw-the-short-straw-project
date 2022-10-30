<template>
    <div>
        <h2 v-if="title">{{ title }}</h2>
        <input :style="{width: widthValue + 'px' }" v-model="text" :placeholder="placeholderValue" />
    </div>
</template>

<script>
export default {
    name: 'InputField',
    props: {
        title: String,
        placeholderValue: {
            type: String,
            default: ''
        },
        widthValue: {
            type: Number,
            default: 200
        }
    },

    data() {
        return {
            text: ''
        }
    },
    methods: {

    },
    mounted() {
        console.log(this.widthValue)
    }
}
</script>

<style scoped>
div {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>