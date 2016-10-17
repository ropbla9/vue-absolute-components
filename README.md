<p><strong>Simple usage</strong></p>

<pre><code>import halfModal from "vue-aboslute-compoents/modal-half.vue";
import vacAlert from "vue-aboslute-compoents/dialog-alert.vue";

new Vue({
    template: `
        &lt;div&gt;
            &lt;modal-half active="boolean"&gt;
                put anything you want on default slot,
                there are no predefined styles
            &lt;/modal-half&gt;
            &lt;vac-alert title="title text"
                       message="message text..."
                       button-ok="ok button label",
                       callback="v-bind here a function"&gt;&lt;/vac-alert&gt;
        &lt;/div&gt;
    `,
    components: { halfModal, vacAlert }
})
</code></pre>

<p><strong>Use with API</strong> (dialog components only)</p>

<pre><code>import vac from "vue-absolute-components";

Vue.use(vac) // Insert core styles and dialogs API

new Vue({
    mounted() { // now you can acess dialogs API

        this.alert({
            title: "titulo",
            message: "mensagem...",
            buttonOk: "Ok",
            callback: function() {
                console.log();
            }
        })

        this.confirm({
            title: "titulo",
            message: "mensagem...",
            buttonOk: "Ok",
            buttonCancel: "Cancelar",
            callback: function() {
                console.log();
            }
        })

        this.prompt({
            title: "titulo",
            message: "mensagem...",
            buttonOk: "Ok",
            buttonCancel: "cancelar",
            placeHolder: "anything...",
            callback: function(text) {
                console.log(text);
            }
        })

        this.choose({
            title: "titulo",
            message: "mensagem...",
            buttons: ["button0", "button1"],
            buttonCancel: "cancelar",
            callback: function(btnIndex) {
                console.log(btnIndex);
            }
        })
    }
})
</code></pre>
