<template>
    <div>
        <h2 v-if="title">{{ title }}</h2>
        <input 
            :style="[{ width: widthValue + 'px'}]" 
            :value="modelValue" 
            @input="$emit('vueinput', $event.target.value)"
            :placeholder="placeholderValue" />
            
        <span v-if="showError" class="error-span">{{errorMessage}}</span>
    </div>
</template>

<script>
export default {
    name: 'InputField',
    errorStyle: '2px darkred solid',
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
        },
        showError: {
            type: Boolean,
            default: false
        },
        errorMessage: {
            type: String,
            default: ''
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

.error-span{
    position: absolute;
    top: -22px;
    color:white;
    background-color: indianred;
    padding: 0px 12px;
    border-radius: 4px;
}
</style>