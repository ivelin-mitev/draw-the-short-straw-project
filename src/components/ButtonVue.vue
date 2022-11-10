<template>
    <div>
        <button class="btn-primary btn-pushable" type="button">
            <slot></slot><span class="btn-front">{{ text }}</span>
        </button>
        <span v-if="showBadge" class="badge bg-secondary">Link copied to clipboard!</span>
    </div>
</template>

<script>
export default {
    name: 'ButtonVue',
    props: {
        text: {
            type: String,
            required: true
        },
        showBadge: {
            type: Boolean
        }
    },
    methods: {

    },
}
</script>

<style scoped>
button {
    display: flex;
    align-items: baseline;
}

div {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.badge {
    bottom: 32px;
    flex-shrink: 1;
}
</style>