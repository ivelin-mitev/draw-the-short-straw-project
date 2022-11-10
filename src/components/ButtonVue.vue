<template>
    <div>
        <button class="btn-primary btn-pushable" type="button">
            <slot></slot><span class="btn-front">{{ text }}</span>
        </button>
        <Transition name="bounce">
            <span v-if="showBadge" class="badge bg-secondary">Link copied to clipboard!</span>
        </Transition>
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
    align-items: center;
    gap: 4px;
}

.badge {
    position: fixed !important;
    bottom: 12px;
}
.bounce-enter-active {
  animation: bounce-in 0.4s;
}
.bounce-leave-active {
  animation: bounce-in 0.4s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.06, 0.7);
  }
  100% {
    transform: scale(1);
  }
}
</style>