<template>
    <div :class="['card', 'clickable', { 'expanded': isExpanded }]" @click="expandCard">
        <div class="card__header">
            <div class="card__title">
                <span>{{ cardData.title }}</span>
            </div>

            <div class="card__importance">
                <div class="square" :style="squareClass"></div>
            </div>
        </div>

        <div class="card__content" v-if="isExpanded">
            <div class="card__description" >
                <span>{{ cardData.description }}</span>
            </div>

            <div class="card__actions mt10">
                <div v-for="(action, index) in cardActions"
                    class="action-wrapper ml10"
                    :key="action.key"
                    :title="action.title"
                    @click="callActionHanler(index)">
                    <img :src="getPictureUrl(action.image)"/>
                </div>

                <div class="action-wrapper ml10" title="Roll up" @click.stop="rollUpCard">
                    <img :src="getPictureUrl('common/white/expand-arrow-up-white')"/>
                </div>

                <div class="action-wrapper red-back ml10" title="Delete" @click="removeCard">
                    <img :src="getPictureUrl('common/white/trash-white')"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { getPictureUrl } from '../../../functions/getPictureFunctions';
    import randomiser from '../../../functions/randomiser';

    export default {
        props: {
            cardData: {
                type: Object,
                required: true,
                default: () => {
                    return {
                        id: randomiser.generate(),
                        title: 'Task title Task title Task title Task title Task title Task title Task title',
                        // importance: {
                        //     type: 'High',
                        //     title: 'High importance'
                        // },
                        importance: 'High',
                        // necessaryTime: '1h',
                        description: 'Some description',
                        // dateStarted: new Date().toLocaleString(),
                        // dateFinished: '-'
                    }
                }
            },
            cardActions: {
                type: Array,
                required: true,
                default: () => []
            },
            sectionTitle: {
                type: String,
                required: true,
                default: 'To Do'
            }
        },
        data() {
            return {
                isExpanded: false
            }
        },
        methods: {
            getPictureUrl: getPictureUrl.bind(this),
            expandCard() {
                if (!this.isExpanded) {
                    this.isExpanded = true;
                }
            },
            rollUpCard() {
                this.isExpanded = false;
            },
            removeCard() {
                this.$store.commit(this.removeItemActionName, this.cardData.id);
            },
            callActionHanler(actionIndex) {
                this.cardActions[actionIndex].handler.call(this);
            }
        },
        computed: {
            squareClass() {
                const properies = {
                    backgroundColor: null
                };

                switch (this.cardData.importance) {
                    case 'Low': properies.backgroundColor = '#54ea5e'; break;
                    case 'Medium': properies.backgroundColor = 'orange'; break;
                    case 'High': properies.backgroundColor = 'red'; break;
                    default: break;
                }

                return properies;
            },
            formedTitle() {
                const splitTitle = this.sectionTitle.split(' ');
                
                splitTitle[0] = splitTitle[0].toLowerCase();

                return splitTitle.join('');
            },
            removeItemActionName() {
                return `${this.formedTitle}RemoveItem`;
            }
        }
    }
</script>

<style scoped>
    .card {
        position: relative;
        display: flex;
        flex-direction: column;
        height: 54px;
        max-height: 54px;
        min-height: 54px;
        margin: 10px 0;
        padding: 15px;
        border-radius: 5px;
        background-color: #ffffff;
        box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, .2);
        box-sizing: border-box;
        overflow: hidden;
        transition: .3s all ease-in-out;
    }

    .card:hover {
        transform: scale(1.03);
    }

    .card__header {
        flex-shrink: 0;
        /* margin-bottom: 20px; */
    }

    .card__title {
        flex-shrink: 0;
        max-width: 80%;
        font-size: 18px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    .card__importance {

    }

    .card__importance .square {
        position: absolute;
        top: 10px;
        right: -30px;
        width: 100px;
        height: 20px;
        transform: rotate(45deg);
    }

    .card__content {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
    }

    .card__description {
        flex-grow: 1;
    }

    .card__actions {
        display: flex;
        justify-content: flex-end;
        flex-shrink: 0;
    }

    .expanded {
        height: 100%;
        max-height: 400px;
    }

    .expanded .card__header {
        margin-bottom: 20px;
    }

    .expanded .card__title {
        white-space: normal;
    }
</style>


