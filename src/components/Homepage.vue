<template>
  <header>
    <img class="logo" src="src\assets\Draw-the-Short-Straw-Upscaled-x4-no-bg.png" />
    <h1 class="title">
      Draw the Short Straw
    </h1>

  </header>

  <InputField @vueinput="updateQuestion" :modelValue="question" title='Write down your question' placeholderValue="Who's buying beer tonight?"
    :widthValue="Number(400)" />
  <InputField v-model="roomCreatorName" title='Enter your name' placeholderValue="Name" :widthValue="Number(300)" />
  <ButtonVue @click="startGame" text="PLAY">
    <IconPlay />
  </ButtonVue>
  <ButtonVue @click="copyURL" text="Copy URL link" :showBadge="showBadge">
    <IconLinkChain width="22" height="22"/>
  </ButtonVue>
</template>

<script>
import InputField from '@/components/InputField.vue';
import ButtonVue from './ButtonVue.vue';
import IconPlay from './icons/IconPlay.vue';
import IconLinkChain from './icons/IconLinkChain.vue'
import io from 'socket.io-client';
import VueSocketIO from 'vue-socket.io'
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  components: {
    InputField,
    ButtonVue,
    IconPlay,
    IconLinkChain
  },

  data() {
    return {
      roomCreatorName: '',
      showBadge: false,
      socket: new VueSocketIO({
        debug: true,
        connection: 'http://localhost:3000'
      })
    }
  },

  computed: {
    ...mapState({
      appName(state) {
        return state.appName
      },
      question: state => state.question
    })
  },

  methods: {
    ...mapActions(['SET_QUESTION']),
    
    updateQuestion(event) {
      this.SET_QUESTION(event);
    },
    async startGame() {
      console.log(this.socket.io.id);
    },
    async copyURL() {
      try {
        await navigator.clipboard.writeText(window.location.href);
        this.toggleBadge();
      } catch ($e) {
        alert('Cannot copy');
      }
    },
    toggleBadge() {
      this.showBadge = true;
      setTimeout(() => {
        this.showBadge = false;
      }, 1000);
    }
  },
  mounted() {
    console.log(this.appName);
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