<template>
    <div class="header">
        <div class="header__person-info">
            <div class="header__name">
                <img class="image" :src="getPictureUrl('common/person')">
                <span class="bold600">Aleksanov Roman</span>
            </div>

            <div class="header__mood">
                <img :src="getPictureUrl('moods/best')">
                <!-- <img class="clickable" :src="getPictureUrl(arrowImage)" @click="openMoodsList"> -->
            </div>
        </div>

        <div class="header__add-task-button">
            <button class="primary-action clickable" @click="addTaskModal">
                <span class="bold600">Add task</span>
                <img :src="getPictureUrl('common/white/add-white')">
            </button>
        </div>

        <!-- <div class="header__menu">
            <img class="image clickable" :src="getPictureUrl(menuImage)" @click="openMenu">
        </div> -->
    </div>
</template>

<script>
    export default {
        data() {
            return {
                timerId: null,
                arrowImage: 'common/arrow-down',
                menuImage: 'common/burger'
            }
        }, 
        methods: {
            getPictureUrl(pictureName) {
                return require(`../../assets/images/${pictureName}.svg`);
            },
            openMoodsList() {
                this.arrowImage = (this.arrowImage === 'common/arrow-down')
                    ? 'common/arrow-up'
                    : 'common/arrow-down';
            },
            openMenu() {
                this.menuImage = (this.menuImage === 'common/burger')
                    ? 'common/close'
                    : 'common/burger';
            },
            addTaskModal() {
                this.$emit('show-modal');
            }
        }
    }
</script>

<style scoped>
    .header {
        display: flex;
        align-content: center;
        flex-shrink: 0;
        height: 60px;
        border-bottom: 1px solid #5a95f4;
    }

    .header__person-info,
    .header__name,
    .header__mood,
    .header__add-task-button,
    .header__time,
    .header__menu {
        display: flex;
        align-items: center;
    }

    .header__name {
        flex-shrink: 0;
    }

    .header__mood {
        margin-left: 10px;
    }

    .header__add-task-button {
        justify-content: flex-end;
        flex-grow: 1;
    }

    .header__time {
        flex-shrink: 0;
        justify-content: flex-end;
    }

    .header__menu {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        width: 60px;
    }
</style>



