<template>
    <div class="card clickable" @click="toggleCard($event)">
        <div class="card__header">
            <div class="card__title">
                <span>{{ cardInfo.title }}</span>
            </div>

            <div class="card__priority">
                <div class="square" :style="squareClass" :title="cardInfo.priority.title"></div>
            </div>
        </div>

        <div class="card__content" v-if="isExpanded">
            <div class="card__description" >
                <span>{{ cardInfo.description }}</span>
            </div>

            <div class="card__actions mt10">
                <div class="action-wrapper">
                    <img :src="getPictureUrl('common/trash-white')"
                        @click="removeCard"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { getPictureUrl } from '../../../functions/getPictureFunctions';

    export default {
        props: {
            cardInfo: {
                type: Object,
                required: false,
                default: () => {
                    return {
                        title: 'Task title Task title Task title Task title Task title Task title Task title',
                        priority: {
                            type: 'High',
                            title: 'High priority'
                        },
                        necessaryTime: '1h',
                        description: 'Some description',
                        dateStarted: new Date().toLocaleString(),
                        dateFinished: '-'
                    }
                }
            }
        },
        data() {
            return {
                isExpanded: false
            }
        },
        methods: {
            getPictureUrl: getPictureUrl.bind(this),
            toggleCard(event) {
                const { currentTarget } = event;

                if (this.isExpanded) {
                    currentTarget.classList.remove('expanded');
                    this.isExpanded = false;

                    return;
                }

                currentTarget.classList.add('expanded');
                this.isExpanded = true;
            },
            removeCard() {
                console.log(this.cardInfo);
            }
        },
        computed: {
            squareClass() {
                const properies = {
                    backgroundColor: null
                };

                switch (this.cardInfo.priority.type) {
                    case 'Low': properies.backgroundColor = '#54ea5e'; break;
                    case 'Medium': properies.backgroundColor = 'orange'; break;
                    case 'High': properies.backgroundColor = 'red'; break;
                    default: break;
                }

                return properies;
            }
        }
    }
</script>

<style scoped>
    .card {
        position: relative;
        display: flex;
        flex-direction: column;
        height: 52px;
        max-height: 52px;
        min-height: 52px;
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
        margin-bottom: 20px;
    }

    .card__title {
        flex-shrink: 0;
        max-width: 80%;
        font-size: 18px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    .card__priority {

    }

    .card__priority .square {
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

    .expanded .card__title {
        white-space: normal;
    }
</style>


