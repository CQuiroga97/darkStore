type DateString = `${number}-${number}-${number}`;
export const getYesterday = (): DateString => {
    const date = new Date();
    date.setDate(date.getDate() - 1);
    return date.toISOString().split('T')[0] as DateString;
};

export const getToday = (): DateString => {
    const date = new Date();
    return date.toISOString().split('T')[0] as DateString;
};
