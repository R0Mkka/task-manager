export const toDoSectionInfo = {
    id: 1,
    title: 'To Do',
    getterName: 'toDoList',
    clearActionName: 'toDoClear',
    statusImage: 'to-do',
    actions: [
        {
            key: '1',
            title: 'Move to in progress',
            image: 'common/white/in-progress-white',
            handler: function() {
                if (this) {
                    this.$store.commit('toDoRemoveItem', this.cardData.id);
                    this.$store.commit('addInProgress', this.cardData);
                }
            }
        },
        {
            key: '2',
            title: 'Move to finished',
            image: 'common/white/finished-white',
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
    statusImage: 'in-progress'
};

export const finishedSectionInfo = {
    id: 3,
    title: 'Finished',
    getterName: 'finishedList',
    clearActionName: 'finishedClear',
    statusImage: 'finished'
};