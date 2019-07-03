<template>
    <div class="alert">
        <div class="alert__indicator"></div>

        <div class="alert__close-button clickable" @click="removeAlert">
            <img :src="getPictureUrl('alerts/close')">
        </div>

        <div class="alert__icon">
            <img :src="getPictureUrl('alerts/done')">
        </div>

        <div class="alert__message">
            <span>{{ alertData.message }}</span>
        </div>
    </div>
</template>

<script>
    import { getPictureUrl } from '../../../functions/getPictureFunctions';
 
    export default {
        mounted() {
            this.timerId = setTimeout(() => {
                this.$store.commit('alertRemoveItem', this.alertData.id);
            }, 3000);
        },
        data() {
            return {
                timerId: null
            }
        },
        props: {
            alertData: {
                type: Object,
                required: true,
                default: () => {
                    return {
                        id: Math.random(),
                        message: 'Alert message Alert message Alert message Alert message',
                        icon: 'Heh'
                    }
                }
            }
        },
        methods: {
            getPictureUrl: getPictureUrl.bind(this),
            removeAlert() {
                if (this.timerId) {
                    clearTimeout(this.timerId);
                }

                this.$store.commit('alertRemoveItem', this.alertData.id);
            }
        }
    }
</script>

<style scoped>
    .alert {
        position: relative;
        display: flex;
        width: 390px;
        background-color: #ffffff;
        padding: 30px 35px;
        margin-top: 20px;
        box-sizing: border-box;
        box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, .2);
        animation: appearance .8s;
    }

    .alert__close-button {
        position: absolute;
        top: 15px;
        right: 15px;
    }

    .alert__indicator {
        position: absolute;
        top: 0;
        left: 0;
        width: 3px;
        height: 100%;
        background-color: #14de0d;
    }

    .alert__icon, .alert__message {
        display: flex;
        align-items: center;
    }

    .alert__icon {
        margin-right: 10px;
    }

    .alert__icon img {
        width: 30px;
        height: 30px;
    }

    .alert__message {
        font-size: 16px;
        font-weight: 300;
    }

    @keyframes appearance {
        from {
            right: -420px;
            opacity: 0;
        }

        to {
            right: 0px;
            opacity: 1;
        }
    }
</style>
