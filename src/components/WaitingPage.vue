<template>
    <AboutModal />
    <div v-if="playerNameEmitted" class="wrapper">
        <header>
            <h1 class="title">Players:
            </h1>
        </header>
        <div class="nameTiles">
            <NameTile v-for="player in players" :name="player.name" />
        </div>
        <ButtonVue @click="startDrawing" text="START">
            <IconPlay />
        </ButtonVue>
        <ButtonVue @click.native="copyURL" text="Copy URL link" :showBadge="showBadge">
            <IconLinkChain width="22" height="22" />
        </ButtonVue>
    </div>
    <div v-else>
        <header>
            <h1 class="title">Enter your name:</h1>
        </header>

        <InputField @vueinput="(value) => playerName = value" errorMessage="Name required." :modelValue="playerName" placeholderValue="Name"
            :widthValue="Number(300)" />
        <ButtonVue @click="emitPlayerName" text="JOIN">
            <IconPlay />
        </ButtonVue>
    </div>
</template>

<script>
import ButtonVue from './ButtonVue.vue';
import IconPlay from './icons/IconPlay.vue';
import IconLinkChain from './icons/IconLinkChain.vue'
import { mapState, mapActions } from 'vuex'
import NameTile from './NameTile.vue';
import AboutModal from './AboutModal.vue';
import InputField from './InputField.vue';

export default {
    components: {
        NameTile,
        ButtonVue,
        IconPlay,
        IconLinkChain,
        AboutModal,
        InputField
    },
    sockets: {
        newPlayerId: function (data) {
            console.log(this.players);
        },
        gameInfo: function (data) {
            this.players = data.players;
            console.log(data);
        }
    },
    data() {
        return {
            showBadge: false,
            playerName: '',
            players: []
        }
    },
    computed: {
        ...mapState({
            url: state => state.url,
            players: state => state.players,
            playerNameEmitted: state => state.playerNameEmitted
        }),
        roomId(){
            if(!this.players[0]) {
                return null
            }
            return this.players[0].id
        }
    },
    methods: {
        ...mapActions(['SET_PLAYERNAMEEMITTED', 'SET_GAMEDATA']),
        sendTheMsg() {
            this.$socket.client.emit('SEND_MESSAGE', 'ZDR');
        },
        async copyURL() {
            try {
                await navigator.clipboard.writeText(this.url);
                this.toggleBadge();
            } catch (err) {
                console.log('Cannot copy', err);
            }
        },
        toggleBadge() {
            this.showBadge = true;
            setTimeout(() => {
                this.showBadge = false;
            }, 1000);
        },
        emitPlayerName() {
            if(this.playerName) {
                this.$socket.client.emit('playerJoinsWaitingRoom', this.playerName);
                this.SET_PLAYERNAMEEMITTED(true);
            } else {
                alert('Please enter name')
            }
        },
        startDrawing() {
            if(this.roomId){
                this.$router.push(`/draw/${this.roomId}`);
                return
            }
            alert('Not enought players')
        }
    }
}
</script>

<style scoped>
.wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

header {
    align-self: center;
    margin: 84px 0px 42px;
}

.nameTiles {
    align-items: center;
}
</style>