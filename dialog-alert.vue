<style lang="css">
</style>

<template lang="html">
    <div> <!-- initial wrapper required by Vue2 -->
        <!-- Embedded blackayer on main element, where wrapper is the real content -->
        <div class="vac dialog-vac dialog-alert" v-bind:class="{ active: active }" v-bind:style="{ zIndex: zIndex }">
            <div class="wrapper">
                <h1>{{title}}</h1>
                <p>{{message}}</p>
                <div class="buttons">
                    <button class="ok" v-on:click="ok">{{buttonOk}}</button>
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
            buttonOk: {
                type: String,
                default: "Ok",
            },
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
                if(this.callback) this.callback();
            }
        },
        created() {
            var self = this;
            window.addEventListener("click", function(e) {
                if(new RegExp("dialog-vac").test(e.target.className)) {
                    self.ok();
                }
            });
        }
    }
</script>
