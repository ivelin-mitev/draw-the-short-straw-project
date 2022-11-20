<template>
    <header>
        <h1 class="title">Players:
        </h1>
    </header>
    <div class="nameTiles">
        <NameTile name="Ivo" />
        <NameTile name="Pivo" />
        <NameTile name="Divo" />
        <NameTile name="Krivo" />
    </div>
    <ButtonVue text="START">
        <IconPlay />
    </ButtonVue>
    <ButtonVue @click.native="copyURL" text="Copy URL link" :showBadge="showBadge">
        <IconLinkChain width="22" height="22" />
    </ButtonVue>
</template>

<script>
import ButtonVue from './ButtonVue.vue';
import IconPlay from './icons/IconPlay.vue';
import IconLinkChain from './icons/IconLinkChain.vue'
import { mapState } from 'vuex'
import NameTile from './NameTile.vue';

export default {
    components: {
        NameTile,
        ButtonVue,
        IconPlay,
        IconLinkChain
    },
    sockets: {
        newPlayerId: function (data) {
            console.log(this.players);
    },
  },
    data() {
        return {
            showBadge: false,
        }
    },
    computed: {
        ...mapState({
            url: state => state.url,
            players: state => state.players
        })
    },
    methods: {
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
        }
    },
    mounted() {
        console.log(this.url + 'ei go na')
    }
}
</script>

<style scoped>
header {
    align-self: center;
    margin: 84px 0px 42px;
}

.nameTiles {
    align-items: center;
}
</style>