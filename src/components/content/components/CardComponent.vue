<template>
    <div class="card clickable">
        <div class="card__header">
            <div class="card__title">
                <span>{{ cardInfo.title }}</span>
            </div>

            <div class="card__priority">
                <div class="square" :style="squareClass" :title="cardInfo.priority.title"></div>
            </div>
        </div>

        <div class="card__description">

        </div>
    </div>
</template>

<script>
    export default {
        props: {
            cardInfo: {
                type: Object,
                required: false,
                default: () => {
                    return {
                        title: 'Task title',
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
        max-height: 220px;
        min-height: 220px;
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

    .card__title {

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
</style>


