<template>
    <header>
        <h1 class="title">
            Waiting Page
        </h1>
        <button @click="sendTheMsg">Click</button>
    </header>
</template>

<script>
import { Socket } from 'socket.io-client';
import VueSocketIO from 'vue-socket.io'

export default {
    sockets: {
        connect: function () {
            console.log('socket connected')
        },
        customEmit: function (data) {
            console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
        }
    },
    methods: {
        sendTheMsg() {
            this.$socket.client.emit('SEND_MESSAGE', 'ZDR')
        }
    }
}
</script>