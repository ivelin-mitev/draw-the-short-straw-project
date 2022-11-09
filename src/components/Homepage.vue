<template>
  <header>
    <img class="logo" src="src\assets\Draw-the-Short-Straw-Upscaled-x4-no-bg.png" />
    <h1 class="title">
      Draw the Short Straw
    </h1>

  </header>

  <InputField title='Write down your question' placeholderValue="Who's buying beer tonight?" :widthValue="Number(400)"/>
  <InputField title='Enter your name' placeholderValue="Name" :widthValue="Number(300)"/>
  <ButtonVue text="PLAY">
    <IconPlay />
  </ButtonVue>
</template>

<script>
import InputField from '@/components/InputField.vue';
import ButtonVue from './ButtonVue.vue';
import IconPlay from './icons/IconPlay.vue';

export default {
  components: {
    InputField,
    ButtonVue,
    IconPlay
  },

  data() {
    return {
    }
  },

  methods: {

  },
  mounted() {

  }
}
</script>

<style scoped>
header {
  display: flex;
  align-items: center;

  margin: 42px 0px;
}
</style>