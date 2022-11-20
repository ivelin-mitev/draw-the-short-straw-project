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
  <InputField @vueinput="(value) => playerName = value" :showError="errors[1]" errorMessage="Name required."
    :modelValue="playerName" title='Enter your name' placeholderValue="Name" :widthValue="Number(300)" />

  <ButtonVue @click="createWaitingRoom" text="PLAY">
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
import { mapState, mapActions } from 'vuex'
import { state } from '../store/state';
import { nextTick } from 'vue';

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
      playerName: '',
      errors: [false, false],
      roomId: '',
      playerId: undefined,
      playerHasInvitation: false
    }
  },

  sockets: {
    set_player_id: function (data) {
      this.playerId = data;
    },
    roomId: function (data) {
      if (this.$route.query.roomId) {
        return
      }
      this.roomId = data;
      this.$router.push({ path: this.$route.path, query: { roomId: data } });
    },
    playerHasInvitation: function (data) {
      console.log('invitation ', this.playerHasInvitation)
      this.playerHasInvitation = data;
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
      if (!this.validateInput(this.question)) {
        this.errors[0] = true;
        return false
      }
      this.errors[0] = false;
      if (!this.validateInput(this.playerName)) {
        this.errors[1] = true;
        return false
      }

      this.errors = [false, false];
      return true
    }
  },

  methods: {
    ...mapActions(['SET_QUESTION', 'SET_PLAYER', 'SET_URL']),

    setQuestion(value) {
      this.SET_QUESTION(value);
    },

    setPlayer(value) {
      this.SET_PLAYER({
        name: value,
        currentPlayer: true,
        role: 'admin',
        playerId: this.playerId,
        drownStraw: false
      })
    },

    validateInput(value) {
      if (value) {
        return true
      } else {
        return false;
      }
    },

    async createWaitingRoom() {
      if (this.formValidated) {
        this.setPlayer(this.playerName);
        this.$socket.client.emit('initialize_waiting_room', {
          ...this.players[0],
          roomId: this.roomId
        });
        this.SET_URL(window.location.href);
        this.$router.push(`/waiting/?roomId=${this.roomId}`);
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
    if (this.$route.query.roomId) {
      this.$socket.client.emit('invitedPlayerLoading', this.$route.query.roomId);
    } else {
      this.$socket.client.emit('initialPlayer', this.$route.query.roomId);
    }
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