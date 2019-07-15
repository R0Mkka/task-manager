<template>
    <div class="section">
        <div class="section__header">
            <span class="bold600">{{ title }}</span>
            <img class="image" :src="getPictureByStatusName(this.statusImage)" />
            
            <div class="section__action-list">
                <div class="clickable action-wrapper red-back mr10" @click="clearSection">
                    <img :src="getPictureUrl('common/white/trash-white')" :title="hoverTitle" />
                </div>
            </div>
        </div>

        <div class="section__content" v-if="cardList">
            <div class="section__empty" v-if="cardList.length === 0">
                <span class="light300">The list is empty.</span>
            </div>

            <Draggable v-model="cardList" group="cards" class="section__cards-wrapper">
                <Card v-for="card in cardList" 
                    :key="card.title" 
                    :cardData="card"
                    :cardActions="sectionInfo.cardActions"
                    :sectionTitle="title">
                </Card>
            </Draggable>
        </div>
    </div>
</template>

<script>
    import Draggable from 'vuedraggable'

    import Card from './CardComponent';

    import { getPictureByStatusName, getPictureUrl } from '../../../functions/getPictureFunctions';
    import { alertList } from '../../../configs/alerts-config';

    export default {
        components: {
            Draggable,
            Card
        },
        props: {
            sectionInfo: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                
            }
        },
        methods: {
            getPictureByStatusName: getPictureByStatusName.bind(this),
            getPictureUrl: getPictureUrl.bind(this),
            clearSection() {
                if (this.cardList.length !== 0) {
                    this.$store.commit(this.sectionInfo.clearActionName);

                    this.$store.commit('addAlert', alertList.sectionCleared(this.title));
                } else {
                    this.$store.commit('addAlert', alertList.sectionEmpty(this.title));
                }
            }
        },
        computed: {
            title() {
                return this.sectionInfo.title;
            },
            statusImage() {
                return this.sectionInfo.statusImage;
            },
            hoverTitle() {
                return `Clear "${this.sectionInfo.title}" section`;
            },
            cardList: {
                get() {
                    return this.$store.state[this.sectionInfo.stateDataName];
                },
                set(updatedCardList) {
                    this.$store.commit(this.sectionInfo.setMutationName, updatedCardList);
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