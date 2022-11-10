<template>
  <header>
    <img class="logo" src="src\assets\Draw-the-Short-Straw-Upscaled-x4-no-bg.png" />
    <h1 class="title">
      Draw the Short Straw
    </h1>

  </header>

  <InputField v-model="question" title='Write down your question' placeholderValue="Who's buying beer tonight?"
    :widthValue="Number(400)" />
  <InputField v-model="roomCreatorName" title='Enter your name' placeholderValue="Name" :widthValue="Number(300)" />
  <ButtonVue text="PLAY">
    <IconPlay />
  </ButtonVue>
  <ButtonVue text="Copy URL link">
    <IconLinkChain />
  </ButtonVue>
</template>

<script>
import InputField from '@/components/InputField.vue';
import ButtonVue from './ButtonVue.vue';
import IconPlay from './icons/IconPlay.vue';
import IconLinkChain from './icons/IconLinkChain.vue'

export default {
  components: {
    InputField,
    ButtonVue,
    IconPlay,
    IconLinkChain
  },

  data() {
    return {
      question: '',
      roomCreatorName: ''
    }
  },

  watch: {
    question(){
      console.log(this.question);
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