import Toasts from "./components/Toasts.vue";
import {EventBus} from "./event-bus";

const ToastsPlugin = {
    install(Vue) {

        // attach these methods with Vue instance
        Vue.prototype.$toast = {

            /**
             * Send the event on a channel (toast-message) with a given payload.
             *
             * @param {string} message
             * @param {string} type
             */
            send(message, type) {
                EventBus.$emit("toast-message", {
                    message: message,
                    type: type
                });
            },

            /**
             * Send a success message event.
             *
             * @param {string} message
             */
            success(message) {
                this.send(message, "success");
            },


            /**
             * Send a warning message event.
             *
             * @param {string} message
             */
            warning(message) {
                this.send(message, "warning");
            },

            /**
             * Send an info message event.
             *
             * @param {string} message
             */
            info(message) {
                this.send(message, "info");
            },

            /**
             * Send an error message event.
             *
             * @param {string} message
             */
            error(message) {
                this.send(message, "danger");
            },

        };

        // register the component
        Vue.component("Toasts", Toasts);

    }
};

// auto install by default
// equal to Vue.use(window.vueToastr)
if (typeof window !== "undefined" && window.Vue) {
    window.Vue.use(ToastsPlugin);
}

export default ToastsPlugin;
