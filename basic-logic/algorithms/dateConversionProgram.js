const currentDate = new Date
const currentDateFormat = `Current Date and Time: ${currentDate}`
console.log(currentDateFormat)

export const formatDateMMDDYYYY = (date) => {
    const options = {
        month: 'numeric',
        day: 'numeric',
        year: 'numeric'
    }
    const short = date.toLocaleDateString("en-US", options)

    return `Formatted Date (MM/DD/YYYY): ${short}`

}
console.log(formatDateMMDDYYYY(currentDate))

export const formatDateLong = (date) => {

    const option = {
        month: "long",
        day: "numeric",
        year: "numeric"
    }
    const long = date.toLocaleDateString("en-US", option)

    return `Formatted Date (Month Day, Year): ${long}`
}
console.log(formatDateLong(currentDate))