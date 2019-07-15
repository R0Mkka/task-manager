<template>
  <div id="app">
      <Modal v-if="isModalShown" @close="hideModal"></Modal>

      <RootContainer @show-modal="showModal"></RootContainer>

      <Alerts></Alerts>
  </div>
</template>

<script>
import RootContainer from './components/RootContainerComponent';
import Modal from './components/shared/ModalComponent';
import Alerts from './components/shared/alerts/AlertsComponent';

export default {
    // APP WAS STARTED
    mounted() {
        this.$store.commit('loadFromLocaleStorage');

        // document.addEventListener('dragstart', (event) => {
        //     event.preventDefault();
        // });
    },
    components: {
        RootContainer,
        Modal,
        Alerts
    },
    data() {
        return {
            isModalShown: false
        }
    },
    methods: {
        hideModal() {
            this.isModalShown = false;
        },
        showModal() {
            this.isModalShown = true;
        }
    }
}
</script>

<style>
    /* --- GLOBAL --- */
    body {
        margin: 0;
        padding: 0;
        font-family: 'Open Sans', sans-serif;
    }

    * {
        font-family: inherit;
    }

    img::selection, button::selection {
        background-color: transparent;
    }

    button, input, textarea, select, option {
        outline: none;
    }

    textarea {
        margin: 0;
        resize: none;
    }

    img::selection {
        background-color: transparent;
    }

    /* --- APP --- */
    #app {
        position: fixed;
        display: flex;
        justify-content: center;
        width: 100vw;
        height: 100vh;
        background-color: rgba(255, 255, 255, .6);
        overflow: hidden;
    }

    .image {
        margin: 0 10px;
    }

    /* --- MODIFICATORS --- */
    .clickable {
        cursor: pointer;
    }

    .light300 {
        font-weight: 300;
    }

    .bold600 {
        font-weight: 600;
    }

    .mr10 { margin-right: 10px; }
    .ml10 { margin-left: 10px; }
    .mt10 { margin-top: 10px; }
    .mt20 { margin-top: 20px; }
    .mb10 { margin-bottom: 10px; }

    /* --- FLEX --- */

    .fg1 {
        flex-grow: 1;
    }

    .fsh0 {
        flex-shrink: 0;
    }

    /* --- CUSTOM ELEMENTS --- */
    /* 111 */
    .action-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 30px;
        border-radius: 3px;
        background-color: #5a95f4;
        transition: .3s all ease-in-out;
    }

    .action-wrapper:hover {
        transform: scale(1.05);
    }

    .action-wrapper.red-back:hover {
        background-color: rgb(230, 0, 0);
        transform: scale(1.05);
    }

    /* 222 */
    .primary-action {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 120px;
        height: 40px;
        padding: 0 20px;
        border: none;
        border-radius: 5px;
        background-color: #5a95f4;
        color: #ffffff;
        transition: .3s all ease-in-out;
    }

    .primary-action:hover {
        background-color: #1c74ff;
    }

    .primary-action:active {
        top: 1px;
    }

    .primary-action span {
        font-size: 14px;
        font-weight: 700;
        text-transform: uppercase;
    }

    .primary-action img {
        margin-left: 5px;
    }
</style>
