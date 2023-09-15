function sortUniqueArrayElements (unsortedArray) {
    return [...new Set(unsortedArray.sort((a, b) => a - b))]
}