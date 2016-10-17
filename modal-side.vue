<style lang="css">
    .vac.modal-vac.modal-side.right {
        transform: translate3d(200%, 0, 0);
    }
    .vac.modal-vac.modal-side.right.active {
        transform: translate3d(25%, 0, 0);
    }
    .vac.modal-vac.modal-side.left {
        transform: translate3d(-100%, 0, 0);
    }
    .vac.modal-vac.modal-side.left.active {
        transform: translate3d(0, 0, 0);
    }
    .vac.modal-vac.modal-side {
        position: fixed;
        top: 0;
        z-index: 9999;
        width: 80%;
        min-height: 100%;
        overflow: hidden;
        background-color: #fff;
        opacity: 1;
    }
</style>

<template lang="html">
    <div> <!-- initial wrapper required by Vue2 -->
        <div class="vac black-layer" v-bind:class="{active: active}" v-on:click="active = false"></div>
        <div class="vac modal-vac modal-side" v-bind:class="{active: active, left: side === 'left', right: side === 'right'}">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            active: Boolean,
            side: String,
        }
    }
</script>
