<template>
    <transition name="fade" @after-enter="showContent = true" appear>
        <div class="modal" @click="showContent = false">
            <transition name="fade" @after-leave="closeModal">
                <div v-if="showContent" class="content" @click.stop>
                    <div class="close" @click="closeModal">
                        <img src="../../assets/images/common/menu-close.svg">
                    </div>
                
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Quisquam, placeat, unde! Architecto laboriosam ducimus atque 
                        cum dolore doloribus obcaecati vero. Minus porro sapiente 
                        unde fuga incidunt quidem necessitatibus mollitia libero?
                    </span>
                </div>
            </transition>
        </div>
    </transition>
</template>

<script>
    export default {
        data () {
            return {
                showContent: false
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

    .content {
        width: 500px;
        padding: 20px;
        border-radius: 3px;
        background-color: #ffffff;
        color: #444444;
        font-size: 18px;
        line-height: 1.5;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        box-sizing: border-box;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

    .fade-enter-active, .fade-leave-active {
        transition: 0.2s opacity ease-out;
    }
</style>