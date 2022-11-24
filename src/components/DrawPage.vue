<template>
    <div class="wrapper">
        <header>
            <h1 class="title">Who is going to buy beer tonight?
            </h1>
        </header>
        <div class="nameTiles">
            <NameTile name="Name" />
            <NameTile name="Name" />
            <NameTile name="Name" />
            <NameTile name="Name" />
        </div>
        <div id="straws">
            <img class="straw" src="../assets/straw 1.png" />
            <img class="straw" src="../assets/straw 2.png" />
            <img class="straw" src="../assets/straw 3.png" />
            <img class="straw" src="../assets/straw 4.png" />
            <img class="straw" src="../assets/straw 5.png" />
        </div>
    </div>
</template>

<script>
import NameTile from './NameTile.vue';

export default {
    components: {
        NameTile
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
#straws{
    position: fixed;
    display: flex;
    gap:50px;
    bottom: 0%;
}
</style>