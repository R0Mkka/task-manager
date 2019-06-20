<template>
  <div id="app">
      <Modal v-if="isModalShown" @close="hideModal"></Modal>

      <RootContainer @show-modal="showModal"></RootContainer>
  </div>
</template>

<script>
import RootContainer from './components/RootContainerComponent';
import Modal from './components/shared/ModalComponent';

export default {
    components: {
        RootContainer,
        Modal
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
    body {
        margin: 0;
        padding: 0;
        font-family: 'Open Sans', sans-serif;
    }

    * {
        font-family: inherit;
    }

    button {
        outline: none;
    }

    img::selection {
        background-color: transparent;
    }

    #app {
        position: fixed;
        display: flex;
        justify-content: center;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
    }

    .image {
        margin: 0 10px;
    }

    .clickable {
        cursor: pointer;
    }

    .light300 {
        font-weight: 300;
    }

    .bold600 {
        font-weight: 600;
    }
</style>
