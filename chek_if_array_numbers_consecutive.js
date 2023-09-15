function checkIfArrayNumbersConsecutive(unsortedArray) {
    const sortedArray = unsortedArray.sort((a, b) => a - b)
    let arrayNumbersConsecutive = true
    for (let i=0; i < sortedArray.length; i++) {
        if (i === sortedArray.length - 1) continue
        if (sortedArray[i] - sortedArray[i+1] === -1) continue
        return false
    }
    return arrayNumbersConsecutive
}