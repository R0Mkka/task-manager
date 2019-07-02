export const toDoSectionInfo = {
    id: 1,
    title: 'To Do',
    getterName: 'toDoList',
    clearActionName: 'toDoClear',
    statusImage: 'to-do',
    cardActions: [
        {
            key: '1',
            title: 'Move to "In progress"',
            image: 'statuses/white/in-progress-white',
            handler: function() {
                if (this) {
                    this.$store.commit('toDoRemoveItem', this.cardData.id);
                    this.$store.commit('addInProgress', this.cardData);
                }
            }
        },
        {
            key: '2',
            title: 'Move to "Finished"',
            image: 'statuses/white/finished-white',
            handler: function() {
                if (this) {
                    this.$store.commit('toDoRemoveItem', this.cardData.id);
                    this.$store.commit('addFinished', this.cardData);
                }
            }
        }
    ]
};

export const inProgressSectionInfo = {
    id: 2,
    title: 'In Progress',
    getterName: 'inProgressList',
    clearActionName: 'inProgressClear',
    statusImage: 'in-progress',
    cardActions: [
        {
            key: '1',
            title: 'Move to "To Do"',
            image: 'statuses/white/to-do-white',
            handler: function() {
                if (this) {
                    this.$store.commit('inProgressRemoveItem', this.cardData.id);
                    this.$store.commit('addToDo', this.cardData);
                }
            }
        },
        {
            key: '2',
            title: 'Move to "Finished"',
            image: 'statuses/white/finished-white',
            handler: function() {
                if (this) {
                    this.$store.commit('inProgressRemoveItem', this.cardData.id);
                    this.$store.commit('addFinished', this.cardData);
                }
            }
        }
    ]
};

export const finishedSectionInfo = {
    id: 3,
    title: 'Finished',
    getterName: 'finishedList',
    clearActionName: 'finishedClear',
    statusImage: 'finished',
    cardActions: [
        {
            key: '1',
            title: 'Move to "To Do"',
            image: 'statuses/white/to-do-white',
            handler: function() {
                if (this) {
                    this.$store.commit('finishedRemoveItem', this.cardData.id);
                    this.$store.commit('addToDo', this.cardData);
                }
            }
        },
        {
            key: '2',
            title: 'Move to "In Progress"',
            image: 'statuses/white/in-progress-white',
            handler: function() {
                if (this) {
                    this.$store.commit('finishedRemoveItem', this.cardData.id);
                    this.$store.commit('addInProgress', this.cardData);
                }
            }
        }
    ]
};