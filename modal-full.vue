<style lang="css">
    .vac.modal-vac.modal-full {
        position: fixed;
        top: 0;
        z-index: 9999;
        width: 100%;
        min-height: 100%;
        overflow: hidden;
        background-color: #fff;
        transform: translate3d(0, 100%, 0);
    }
    .vac.modal-vac.modal-full.active {
        height: 100%;
        transform: translate3d(0, 0, 0);
    }
</style>

<template lang="html">
    <div> <!-- initial wrapper required by Vue2 -->
        <div class="vac modal-vac modal-full" v-bind:class="{ active: active }">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            active: Boolean
        }
    }
</script>
