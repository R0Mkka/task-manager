<template>
    <div class="content">
        <Section :id="1" title="To Do" dataName="toDoList"></Section>
        <Section :id="2" title="In Progress" dataName="inProgressList"></Section>
        <Section :id="3" title="Finished" dataName="finishedList"></Section>
    </div>
</template>

<script>
    import Section from './components/SectionComponent';

    export default {
        data() {
            return {
                
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
        padding: 20px;
        background-color: rgba(240, 240, 240, .5);
        box-sizing: border-box;
    }
</style>



