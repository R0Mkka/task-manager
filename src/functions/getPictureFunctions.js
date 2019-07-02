export function getPictureByStatusName(statusName) {
    return require(`../assets/images/statuses/${statusName}.svg`);
}

export function getPictureUrl(pictureName) {
    return require(`../assets/images/${pictureName}.svg`);
}