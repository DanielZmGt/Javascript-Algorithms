const permuteString = (string, prefix = "", results = []) => {
    if (string.length === 0) {
        if (!results.includes(prefix)) {
            results.push(prefix);
        }
        return results
    }

    for (let i = 0; i < string.length; i++) {
        const char = string[i];
        const remainingString = string.substring(0, i) + string.substring(i + 1);
        permuteString(remainingString, prefix + char, results)

    }

    return results

}

console.log(permuteString("far"))