<style lang="css">
    .vac.modal-vac.modal-popup {
        position: absolute;
        width: 100%;
        height: 100vh;
        transition: 0.25s;
        opacity: 0;
        background-color: rgba(0,0,0,0.5);
    }
    .vac.modal-vac.modal-popup .wrapper {
        position: relative;
        margin: auto;
        width: 90%;
        height: 90%;
        background-color: white;
        border-radius: 5px;
        transform: translateY(-50%);
        top: 50%;
    }
    .vac.modal-vac.modal-popup.active {
        opacity: 1;
        z-index: 9999;
    }
</style>

<template lang="html">
    <div> <!-- initial wrapper required by Vue2 -->
        <!-- Embedded blackayer on main element, where wrapper is the real content -->
        <div class="vac modal-vac modal-popup" v-bind:class="{ active: active }" v-on:click="active = false">
            <div class="wrapper">
                <slot></slot>
            </div>
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
