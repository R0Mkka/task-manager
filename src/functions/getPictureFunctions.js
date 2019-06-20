export function getPictureById(statusImage) {
    return require(`../assets/images/statuses/${statusImage}.svg`);
}

export function getPictureUrl(pictureName) {
    return require(`../assets/images/${pictureName}.svg`);
}