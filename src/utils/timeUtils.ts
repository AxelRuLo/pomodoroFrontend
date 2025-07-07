export const transformSecondsToMinutesSeconds = (timeToTransform: number) => {
    const seconds: number = timeToTransform % 60;
    const minutes = Math.floor(timeToTransform / 60);
    return { seconds, minutes };
};

export const transformMinutesToSeconds = (seconds: number, minutes: number) => {
    return minutes * 60 + seconds;
};
