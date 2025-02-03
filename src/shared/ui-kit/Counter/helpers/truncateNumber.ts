export const truncateNumber = (num: number, maxValue: number): string => {
    if (num <= maxValue) return `${num}`
    return `${maxValue}+`
}
