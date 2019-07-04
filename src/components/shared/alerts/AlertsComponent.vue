<template>
    <div class="alerts">
        <Alert v-for="alert in alertList"
            :alertData="alert"
            :key="alert.id">
        </Alert>
    </div>
</template>

<script>
    import Alert from './SingleAlertComponent';

    export default {
        components: {
            Alert
        },
        computed: {
            alertList() {
                return this.$store.getters.alertList;
            }
        }
    }
</script>

<style scoped>
    .alerts {
        position: fixed;
        bottom: 75px;
        right: 20px;
        display: flex;
        flex-direction: column-reverse;
    }
</style>
