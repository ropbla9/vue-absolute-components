<style lang="css">

</style>

<template lang="html">
    <div> <!-- initial wrapper required by Vue2 -->
        <!-- Embedded blackayer on main element, where wrapper is the real content -->
        <div class="vac dialog-vac dialog-prompt" v-bind:class="{ active: active }" v-bind:style="{ zIndex: zIndex }">
            <div class="wrapper">
                <h1>{{title}}</h1>
                <p>{{message}}</p>
                <input type="text" v-bind:placeholder="placeHolder" v-model="text">
                <div class="buttons">
                    <button class="cancel" v-on:click="cancel">{{buttonCancel}}</button>
                    <button class="ok" v-on:click="ok">{{buttonOk}}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                text: ""
            }
        },
        props: {
            active: Boolean,
            zIndex: Number,
            title: String,
            message: String,
            buttonOk: {
                type: String,
                default: "Ok",
            },
            buttonCancel: {
                type: String,
                default: "Cancel",
            },
            placeHolder: String,
            callback: {
                type: Function,
                default() {
                    console.log("No callback specified. Default executed.");
                }
            },
        },
        methods: {
            ok() {
                this.active = false;
                this.zIndex = -1;
                if(this.callback) this.callback(this.text);
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
