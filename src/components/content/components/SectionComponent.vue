<template>
    <div class="section">
        <div class="section__header">
            <span class="bold600">{{ title }}</span>
            <img class="image" :src="getPictureById(this.statusImage)" />
            
            <div class="section__clear-list">
                <img class="clickable" :src="getPictureUrl('common/trash')" :title="hoverTitle" />
            </div>
        </div>

        <div class="section__content">
            <Card v-for="card in cards" :key="card">
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

            }
        },
        methods: {
            getPictureById: getPictureById.bind(this),
            getPictureUrl: getPictureUrl.bind(this)
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
                    case 1: return 'Clear the "To Do" section';
                    case 2: return 'Clear the "In Progress" section';
                    case 3: return 'Clear the "Finished" section';
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
        margin: 0 10px;
        padding: 15px;
        background-color: white;
        border-radius: 10px;
        /* box-shadow: 1px 1px 1px 1px black; */
        box-shadow: 3px 3px 8px 0px rgba(0, 0, 0, .2);
        box-sizing: border-box;
    }

    .section__header {
        display: flex;
        align-items: center;
        padding-left: 10px;
        padding-bottom: 15px;
        border-bottom: 1px solid black;
    }

    .section__clear-list {
        display: flex;
        justify-content: flex-end;
        flex-grow: 1;
    }

    .section__clear-list img {
        margin-right: 10px;
    }

    .section__content {
        margin: 10px;
    }
</style>