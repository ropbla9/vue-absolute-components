<style lang="css">
    .vac.dialog-vac.dialog-choose ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    .vac.dialog-vac.dialog-choose ul li {
        padding: 10px;
        background-color: #439dd2;
        margin-bottom: 10px;
        color: white;
        font-size: 16px;
    }
</style>

<template lang="html">
    <div> <!-- initial wrapper required by Vue2 -->
        <!-- Embedded blackayer on main element, where wrapper is the real content -->
        <div class="vac dialog-vac dialog-choose" v-bind:class="{ active: active }" v-bind:style="{ zIndex: zIndex }">
            <div class="wrapper">
                <h1>{{title}}</h1>
                <p>{{message}}</p>
                <ul>
                    <li v-for="(button, index) in buttons" v-on:click="choose(index)">{{button}}</li>
                </ul>
                <div class="buttons">
                    <button class="cancel" v-on:click="cancel">{{buttonCancel}}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            active: Boolean,
            zIndex: Number,
            title: String,
            message: String,
            buttons: Array,
            buttonCancel: {
                type: String,
                default: "Cancel",
            },
            callback: {
                type: Function,
                default() {
                    console.log("No callback specified. Default executed.");
                }
            },
        },
        methods: {
            choose(btnIndex) {
                this.active = false;
                this.zIndex = -1;
                if(this.callback) this.callback(btnIndex);
            },
            cancel() {
                this.zIndex = -1;
                this.active = false;
            }
        },
        created() {
            var self = this;
            window.addEventListener("click", function(e) {
                if(new RegExp("dialog-vac").test(e.target.className)) {
                    self.cancel();
                }
            });
        }
    }
</script>
