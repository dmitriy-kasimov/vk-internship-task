export const truncateLabel = (label: string, maxLength: number) => {
    if (label.length <= maxLength) return label

    return `${label.substring(0, maxLength)}...`
}
