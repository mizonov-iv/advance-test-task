export const sortByAddress = (array) => {
    array.sort((a, b) => a.address.localeCompare(b.address));
}

export const sortByDate = (array) => {
    array.sort((a, b) => a.date.localeCompare(b.date));
}