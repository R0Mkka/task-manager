import randomiser from '../functions/randomiser';

export const alertList = {
    taskAdded: (taskName) => {
        return {
            id: randomiser.generate(),
            indicatorColor: '#14de0d',
            icon: 'alerts/done',
            message: `Task ${`'${taskName}'`} was successfully created`
        }
    },
    taskRemoved: (taskName) => {
        return {
            id: randomiser.generate(),
            indicatorColor: '#14de0d',
            icon: 'alerts/trash',
            message: `Task ${`'${taskName}'`} was removed`
        }
    },
    sectionCleared: (sectionName) => {
        return {
            id: randomiser.generate(),
            indicatorColor: '#14de0d',
            icon: 'alerts/trash',
            message: `Section ${`'${sectionName}'`} was cleared`
        }
    },
    sectionEmpty: (sectionName) => {
        return {
            id: randomiser.generate(),
            indicatorColor: 'orange',
            icon: 'alerts/warning',
            message: `Section ${`'${sectionName}'`} is empty`
        }
    }
};