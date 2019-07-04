<template>
    <div class="footer">
        <div class="footer__time">
            <img class="image" :src="getPictureUrl('common/time')">
            <span class="bold600">{{ currentTime }}</span>
        </div>

        <div class="footer__copyright">
            <span class="bold600">Task Manager | Aleksanov Roman &#169; 2019</span>
        </div>
    </div>
</template>

<script>
    import { getPictureUrl } from '../../functions/getPictureFunctions';

    const dateOptions = {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };

    export default {
        created() {
            setInterval(() => {
                this.currentTime = new Date().toLocaleString('en-GB', dateOptions);
            }, 1000);
        },
        data() {
            return {
                currentTime: new Date().toLocaleString('en-GB', dateOptions)
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
        border-top: 1px solid #5a95f4;
    }

    .footer__time {
        display: flex;
        align-items: center;
        flex-shrink: 0;
    }

    .footer__copyright {
        display: flex;
        justify-content: flex-end;
        flex-grow: 1;
        margin-right: 10px;
    }
</style>



