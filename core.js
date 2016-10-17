// Import global css styles
import "./core.css";

// Import dialog components
import alert from "./dialog-alert.vue";
import confirm from "./dialog-confirm.vue";
import prompt from "./dialog-prompt.vue";
import choose from "./dialog-choose.vue";

export default {

    install(Vue) {

        // Insert dialogs EL on HTML
        (function() {
              const BODY = document.getElementsByTagName("body")[0],
                    TAG = document.createElement("div"),
                    TEMPLATE = `
                        <div id='__vacDialogs__'>
                            <alert ref="alert"></alert>
                            <confirm ref="confirm"></confirm>
                            <prompt ref="prompt"></prompt>
                            <choose ref="choose"></choose>
                        </div>
                    `;
              TAG.innerHTML = TEMPLATE;
              BODY.appendChild(TAG);
         })();

        // Init dialogs root with all dialogs components
        var dialogs = new Vue({
            el: "#__vacDialogs__",
            components: {
                alert,
                confirm,
                prompt,
                choose
            }
        });

        // Insert global methods tor manipulating dialogs components
        Vue.mixin({
            methods: {
                alert: function(options) {
                    dialogs.$refs.alert.zIndex = highest_zIndex() + 1;
                    dialogs.$refs.alert.title = options.title;
                    dialogs.$refs.alert.message = options.message;
                    dialogs.$refs.alert.buttonOk = options.buttonOk;
                    dialogs.$refs.alert.callback = options.callback;
                    dialogs.$refs.alert.active = true;
                    /* $vm.alert({
                        title: "titulo",
                        message: "mensagem...",
                        buttonOk: "Ok",
                        callback: function() {
                            console.log();
                        }
                    }) */
                },
                confirm(options) {
                    dialogs.$refs.confirm.zIndex = highest_zIndex() + 1;
                    dialogs.$refs.confirm.title = options.title;
                    dialogs.$refs.confirm.message = options.message;
                    dialogs.$refs.confirm.buttonOk = options.buttonOk;
                    dialogs.$refs.confirm.buttonCancel = options.buttonCancel;
                    dialogs.$refs.confirm.callback = options.callback;
                    dialogs.$refs.confirm.active = true;
                    /* $vm.confirm({
                        title: "titulo",
                        message: "mensagem...",
                        buttonOk: "Ok",
                        buttonCancel: "Cancelar",
                        callback: function() {
                            console.log();
                        }
                    }) */
                },
                prompt(options) {
                    dialogs.$refs.prompt.zIndex = highest_zIndex() + 1;
                    dialogs.$refs.prompt.text = "";
                    dialogs.$refs.prompt.title = options.title;
                    dialogs.$refs.prompt.message = options.message;
                    dialogs.$refs.prompt.buttonOk = options.buttonOk;
                    dialogs.$refs.prompt.buttonCancel = options.buttonCancel;
                    dialogs.$refs.prompt.placeHolder = options.placeHolder;
                    dialogs.$refs.prompt.callback = options.callback;
                    dialogs.$refs.prompt.active = true;
                    /* $vm.choose({
                        title: "titulo",
                        message: "mensagem...",
                        buttonOk: "Ok",
                        buttonCancel: "cancelar",
                        placeHolder: "anything...",
                        callback: function(text) {
                            console.log(text);
                        }
                    }) */
                },
                choose(options) {
                    dialogs.$refs.choose.zIndex = highest_zIndex() + 1;
                    dialogs.$refs.choose.title = options.title;
                    dialogs.$refs.choose.message = options.message;
                    dialogs.$refs.choose.buttons = options.buttons;
                    dialogs.$refs.choose.buttonCancel = options.buttonCancel;
                    dialogs.$refs.choose.callback = options.callback;
                    dialogs.$refs.choose.active = true;
                    /* $vm.choose({
                        title: "titulo",
                        message: "mensagem...",
                        buttons: ["button0", "button1"],
                        buttonCancel: "cancelar",
                        callback: function(btnIndex) {
                            console.log(btnIndex);
                        }
                    }) */
                }
            }
        });
    }
};


function highest_zIndex() {

    var elems = document.getElementsByTagName("*"),
        highest = 0;

    for (var i = 0; i < elems.length; i++) {
        var zindex=document.defaultView.getComputedStyle(elems[i],null).getPropertyValue("z-index");
        if((zindex > highest) && (zindex != "auto")) {
            highest = zindex;
        }
    }

    return Number(highest);
}
