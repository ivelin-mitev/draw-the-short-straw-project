<template>
    <div>
        <h2 v-if="title">{{ title }}</h2>
        <input 
            :style="{ width: widthValue + 'px' }" 
            :value="modelValue" 
            @input="$emit('update:modelValue', $event.target.value)"
            :placeholder="placeholderValue" />
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
        },
        modelValue: {
            type: String
        }
    },
    methods: {

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