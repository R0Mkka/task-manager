<template>
    <transition name="fade" @after-enter="showBody = true" appear>
        <div class="modal" @click="showBody = false">
            <transition name="fade" @after-leave="closeModal">
                <div v-if="showBody" class="body" @click.stop>
                    <div class="close">
                        <img class="clickable" src="../../assets/images/common/menu-close.svg" @click="closeModal">
                    </div>

                    <div class="body__flag">
                        <div class="incision"></div>
                    </div>

                    <div class="body__header">
                        <span class="bold600">New task</span>
                    </div>
                    
                    <div class="body__content">
                        <div class="input-wrapper">
                            <label for="task-title" class="input-label">Title</label>
                            <input class="input-field" id="task-title" ref="taskTitle" type="text">
                        </div>

                        <div class="input-wrapper">
                            <label for="task-importance" class="input-label">Importance</label>
                            
                            <select class="input-field" id="task-importance" ref="taskImportance" type="text">
                                <option value="High">High</option>
                                <option value="Medium">Medium</option>
                                <option value="Low">Low</option>                                
                            </select>
                        </div>

                        <div class="input-wrapper">
                            <label for="task-description" class="input-label">Description</label>
                            <textarea class="input-field" id="task-description" ref="taskDescription" rows="3" type="text"></textarea>
                        </div>
                    </div>

                    <div class="body__actions">
                        <button @click="createTask">Create</button>
                    </div>
                </div>
            </transition>
        </div>
    </transition>
</template>

<script>
    export default {
        mounted() {
            setTimeout(() => this.$refs.taskTitle.focus(), 250);
        },
        data () {
            return {
                showBody: false
            }
        },
        methods: {
            closeModal() {
                this.$emit('close');
            },
            createTask() {
                const titleField = this.$refs.taskTitle;
                const importanceField = this.$refs.taskImportance;
                const descriptionField = this.$refs.taskDescription;
                
                const formData = {
                    id: (Math.random() * (Math.random() * 12)).toFixed(20),
                    title: titleField.value,
                    importance: importanceField.value,
                    description: descriptionField.value
                };

                for (const key in formData) {
                    if (formData[key].length === 0) {
                        return;
                    }
                }

                this.$store.commit('addToDo', formData);

                this.$emit('close');
            }
        }
    }
</script>

<style scoped>
    .modal {
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0,0,0,0.6);
        z-index: 1000;
    }

    .body {
        position: relative;
        width: 500px;
        padding: 20px;
        border-radius: 3px;
        background-color: #ffffff;
        color: #444444;
        font-size: 18px;
        line-height: 1.5;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        box-sizing: border-box;
    }

    .body .close {
        position: absolute;
        top: 18px;
        right: 18px;
    }

    .body__flag {
        position: absolute;
        top: 0;
        z-index: 0;
        left: 80px;
        width: 50px;
        height: 60px;
        background-color: #5a95f4;
    }

    .body__flag .incision {
        position: absolute;
        bottom: -25px;
        width: 50px;
        height: 50px;
        background-color: #ffffff;
        transform: rotate(45deg);
    }

    .body__header {
        margin-bottom: 20px;
        text-align: center;
    }

    .body__content {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 30px;
    }

    .body__content .input-wrapper {
        display: flex;
        width: 100%;
        margin-bottom: 25px;
    }

    .input-wrapper .input-label {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        width: 40%;
        border-radius: 5px 0 0 5px;
        background-color: #5a95f4;
        color: #ffffff;
    }

    .input-wrapper .input-field {
        flex-grow: 1;
        padding: 5px 10px;
        border: 2px solid #5a95f4;
        border-radius: 0 5px 5px 0;
        font-size: 14px;
    }

    .body__actions {
        display: flex;
        justify-content: center;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

    .fade-enter-active, .fade-leave-active {
        transition: 0.2s opacity ease-out;
    }
</style>