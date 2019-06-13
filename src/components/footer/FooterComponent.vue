<template>
    <div class="footer">
        <div class="footer__time">
            <img class="image" :src="getPictureUrl('common/time')">
            <span class="bold600">{{ currentTime }}</span>
        </div>
    </div>
</template>

<script>
    import { getPictureUrl } from '../../functions/getPictureFunctions';

    export default {
        created() {
            setInterval(() => {
                this.currentTime = new Date().toLocaleString()
            }, 1000);
        },
        data() {
            return {
                currentTime: new Date().toLocaleString()
            }
        },
        methods: {
            getPictureUrl: getPictureUrl.bind(this)
        }
    }
</script>

<style scoped>
    .footer {
        display: flex;
        align-items: center;
        flex-shrink: 0;
        height: 60px;
        border-top: 1px solid black;
    }

    .footer__time {
        display: flex;
        align-items: center;
    }
</style>



