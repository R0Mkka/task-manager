<template>
    <div class="alert" ref="alertRef">
        <div class="alert__indicator" ref="indicatorRef"></div>

        <div class="alert__close-button clickable" @click="removeAlert">
            <img :src="getPictureUrl('alerts/close')">
        </div>

        <div class="alert__icon">
            <img :src="getPictureUrl(alertData.icon)">
        </div>

        <div class="alert__message light300">
            <span>{{ alertData.message }}</span>
        </div>
    </div>
</template>

<script>
    import { getPictureUrl } from '../../../functions/getPictureFunctions';
 
    export default {
        mounted() {
            this.setUpIndicatorColor();
            
            this.timerId = setTimeout(() => {
                this.removeAlert();
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
                        indicatorColor: '#14de0d',
                        message: 'Default message',
                        icon: 'alerts/green/done'
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

                this.$refs.alertRef.classList.add('close');
                
                this.timerId = setTimeout(() => {
                    this.$store.commit('alertRemoveItem', this.alertData.id);

                    this.$destroy();
                }, 830);
            },
            setUpIndicatorColor() {
                this.$refs.indicatorRef.style.backgroundColor = this.alertData.indicatorColor;
            }
        }
    }
</script>

<style scoped>
    .alert {
        position: relative;
        display: flex;
        align-items: center;
        width: 390px;
        height: 105px;
        max-height: 105px;
        background-color: #ffffff;
        padding: 0 35px 0 25px;
        margin-top: 15px;
        box-sizing: border-box;
        box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, .2);
        animation: appearance .8s;
        transition: .5s all ease-in-out;
    }

    .alert.close {
        opacity: 0;
        animation: disappearance .8s;
    }

    .alert__close-button {
        position: absolute;
        top: 12px;
        right: 12px;
    }

    .alert__indicator {
        position: absolute;
        top: 0;
        left: 0;
        width: 3px;
        height: 100%;
    }

    .alert__icon, .alert__message {
        display: flex;
        align-items: center;
    }

    .alert__icon {
        margin-right: 20px;
    }

    .alert__icon img {
        width: 30px;
        height: 30px;
    }

    .alert__message {
        font-size: 16px;
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

    @keyframes disappearance {
        from {
            right: 0px;
            opacity: 1;
        }

        to {
            right: -420px;
            opacity: 0;
        }
    }
</style>
