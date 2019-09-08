<template>
    <div class="content">
        <Section :sectionInfo="toDoSectionInfo"></Section>
        <Section :sectionInfo="inProgressSectionInfo"></Section>
        <Section :sectionInfo="finishedSectionInfo"></Section>
    </div>
</template>

<script>
    import Section from './components/SectionComponent';
    import { toDoSectionInfo, inProgressSectionInfo, finishedSectionInfo } from '../../configs/content-component-config';

    export default {
        data() {
            return {
                toDoSectionInfo,
                inProgressSectionInfo,
                finishedSectionInfo
            }
        },
        components: {
            Section
        }
    }
</script>

<style scoped>
    .content {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        flex-grow: 1;
        max-height: calc(100% - 120px);
        padding: 20px;
        background-color: rgba(240, 240, 240, .5);
        box-sizing: border-box;
    }
</style>



