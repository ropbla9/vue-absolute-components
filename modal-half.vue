<style lang="css">
    .vac.modal-vac.modal-half {
        position: fixed;
        top: 0;
        z-index: 9999;
        width: 100%;
        min-height: 50%;
        overflow: hidden;
        background-color: #fff;
        transform: translate3d(0, 200%, 0);
    }
    .vac.modal-vac.modal-half.active {
        height: 50%;
        transform: translate3d(0, 100%, 0);
    }
</style>

<template lang="html">
    <div> <!-- initial wrapper required by Vue2 -->
        <div class="vac black-layer" v-bind:class="{active: value}" v-on:click="close()"></div>
        <div class="vac modal-vac modal-half" v-bind:class="{ active: value }">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            value: Boolean
        },
        methods: {
            close() {
                this.$emit("input", false);
            }
        }
    }
</script>
