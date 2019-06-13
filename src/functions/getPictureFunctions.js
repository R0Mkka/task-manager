export function getPictureById(statusImage) {
    const pictureName = statusImage;

    return require(`../assets/images/statuses/${pictureName}.svg`);
}

export function getPictureUrl(pictureName) {
    return require(`../assets/images/${pictureName}.svg`);
}