<template>
        <button type="button"><slot></slot>{{text}}</button>
</template>

<script>
export default {
    name: 'ButtonVue',
    props: {
        text: {
            type: String,
            required: true
        }
    },
    methods: {

    },
}
</script>

<style>

</style>