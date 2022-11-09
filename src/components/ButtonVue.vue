<template>
    <button class="btn-primary btn-pushable" type="button">
        <slot></slot><span class="btn-front">{{ text }}</span>
    </button>
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
button {
    display: flex;
    align-items: baseline;
}

svg {
    margin-right: 6px;
}
</style>