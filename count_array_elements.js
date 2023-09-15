function countArrayElements(array) {
	const result = []
    const sortedArray = [...new Set(array)]
    for (let i=0; i < sortedArray.length; i++) {
        const occurrences = {[[sortedArray[i]]]: 0}
  	    for (let k=0; k < array.length; k++) {
    	    if (array[k] === sortedArray[i]) occurrences[sortedArray[i]] += 1
        }
    result.push(occurrences)
    }
    return result
}
