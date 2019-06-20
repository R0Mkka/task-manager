<template>
    <transition name="fade" @after-enter="showBody = true" appear>
        <div class="modal" @click="showBody = false">
            <transition name="fade" @after-leave="closeModal">
                <div v-if="showBody" class="body" @click.stop>
                    <div class="close">
                        <img class="clickable" src="../../assets/images/common/menu-close.svg" @click="closeModal">
                    </div>

                    <div class="body__header">
                        <span class="bold600">New task</span>
                    </div>
                    
                    <div class="body__content">
                        <input class="field" type="text">
                        <input class="field" type="text">
                        <input class="field" type="text">
                    </div>

                    <div class="body__actions">
                        <button>Add</button>
                    </div>
                </div>
            </transition>
        </div>
    </transition>
</template>

<script>
    export default {
        data () {
            return {
                showBody: false
            }
        },
        methods: {
            closeModal() {
                this.$emit('close');
            }
        }
    }
</script>

<style scoped>
    .modal {
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0,0,0,0.6);
        z-index: 1000;
    }

    .body {
        position: relative;
        width: 300px;
        padding: 20px;
        border-radius: 3px;
        background-color: #ffffff;
        color: #444444;
        font-size: 18px;
        line-height: 1.5;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        box-sizing: border-box;
    }

    .body .close {
        position: absolute;
        top: 18px;
        right: 18px;
    }

    .body__header {
        margin-bottom: 20px;
        text-align: center;
    }

    .body__content {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .body__content .field {
        margin-bottom: 25px;
        padding: 5px 10px;
        border: 2px solid #5a95f4;
        border-radius: 5px;
        font-size: 14px;
    }

    .body__actions {
        display: flex;
        justify-content: center;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

    .fade-enter-active, .fade-leave-active {
        transition: 0.2s opacity ease-out;
    }
</style>