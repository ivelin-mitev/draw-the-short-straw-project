<template>
  <header>
    <img class="logo" src="src\assets\Draw-the-Short-Straw-Upscaled-x4-no-bg.png" />
    <h1 class="title">
      Draw the Short Straw
    </h1>
  </header>

  <InputField @vueinput="setQuestion" :modelValue="question" title='Write down your question'
    placeholderValue="Who's buying beer tonight?" :showError="errors[0]" errorMessage="Question required."
    :widthValue="Number(400)" />
  <InputField @vueinput="(value) => playerName = value" :showError="errors[1]"
    errorMessage="Name required." :modelValue="playerName" title='Enter your name' placeholderValue="Name"
    :widthValue="Number(300)" />

  <ButtonVue @click="startGame" text="PLAY">
    <IconPlay />
  </ButtonVue>
  <ButtonVue @click="copyURL" text="Copy URL link" :showBadge="showBadge">
    <IconLinkChain width="22" height="22" />
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
import { advancePositionWithMutation } from '@vue/compiler-core';
import { state } from '../store/state';

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
      }),
      playerName: '',
      errors: [false, false]
    }
  },

  computed: {
    ...mapState({
      appName(state) {
        return state.appName
      },
      question: state => state.question,
      players: state => state.players
    }),

    formValidated() {
      if (!this.validateInput(this.question)){
        this.errors[0] = true;
        return false
      }
      this.errors[0] = false;
      if (!this.validateInput(this.playerName)){
        this.errors[1] = true;
        return false
      }

      this.errors = [false, false];
      return true
    }
  },

  methods: {
    ...mapActions(['SET_QUESTION', 'SET_PLAYER']),

    setQuestion(value) {
      this.SET_QUESTION(value);
    },

    setPlayer(value) {
      this.SET_PLAYER({
        name: value,
        currentPlayer: true,
        role: 'admin',
        playerId: 1
      })
    },

    validateInput(value) {
      if (value) {
        return true
      } else {
        return false;
      }
    },

    async startGame() {
      if (this.formValidated) {
        console.log(this.socket.io.id);

        this.setPlayer(this.playerName);
        console.log('name: ', this.players[0].name);
      }
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