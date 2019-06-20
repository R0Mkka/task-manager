<template>
    <div class="section">
        <div class="section__header">
            <span class="bold600">{{ title }}</span>
            <img class="image" :src="getPictureById(this.statusImage)" />
            
            <div class="section__action-list">
                <div class="clickable action-wrapper mr10">
                    <img :src="getPictureUrl('common/trash-white')"
                        :title="hoverTitle"
                        @click="clearSection"
                    />
                </div>
            </div>
        </div>

        <div class="section__content">
            <div class="section__empty" v-if="cardsRef.length === 0">
                <span class="light300">The list is empty.</span>
            </div>

            <Card v-for="card in cardsRef" :key="card">
                {{ card }}
            </Card>
        </div>
    </div>
</template>

<script>
    import Card from './CardComponent';
    import { getPictureById, getPictureUrl } from '../../../functions/getPictureFunctions';

    export default {
        components: {
            Card
        },
        props: {
            id: {
                type: Number,
                required: false
            },
            title: {
                type: String,
                required: true,
                default: 'Default Title'
            },
            cards: {
                type: Array,
                required: false,
                default: () => [1, 2, 3]
            }
        },
        data() {
            return {
                cardsRef: this.cards
            }
        },
        methods: {
            getPictureById: getPictureById.bind(this),
            getPictureUrl: getPictureUrl.bind(this),
            clearSection() {
                this.cardsRef = [];
            }
        },
        computed: {
            statusImage() {
                switch(this.id) {
                    case 1: return 'to-do';
                    case 2: return 'in-progress';
                    case 3: return 'finished';
                    default: return '';
                }
            },
            hoverTitle() {
                switch(this.id) {
                    case 1: return 'Clear "To Do" section';
                    case 2: return 'Clear "In Progress" section';
                    case 3: return 'Clear "Finished" section';
                    default: return '';
                }
            }
        }
    }
</script>

<style scoped>
    .section {
        flex-shrink: 0;
        width: 30%;
        min-width: 300px;
        max-height: 100%;
        margin: 0 10px;
        padding: 15px;
        background-color: white;
        border-radius: 10px;
        box-shadow: 3px 3px 8px 0px rgba(0, 0, 0, .2);
        box-sizing: border-box;
        overflow-x: hidden;
        overflow-y: auto;
    }

    .section::-webkit-scrollbar {
        width: 10px;
        scroll-behavior: smooth;
    }

    .section::-webkit-scrollbar-thumb {
        background-color: #5a95f4;
        border-radius: 0px 10px 10px 0px;
    }

    .section::-webkit-scrollbar-thumb:hover {
        background-color: #5a95f4; 
    }

    .section__header {
        display: flex;
        align-items: center;
        padding-left: 10px;
        padding-bottom: 15px;
        border-bottom: 1px solid #5a95f4;
    }

    .section__action-list {
        display: flex;
        justify-content: flex-end;
        flex-grow: 1;
    }

    .section__content {
        margin: 10px;
    }

    .section__empty {
        display: flex;
        justify-content: center;
    }
</style>