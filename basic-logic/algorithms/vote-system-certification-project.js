const poll = new Map

export const addOption = (option) => {
    let optionString = "";
    if (!option) {
        return optionString = "Option cannot be empty.";
    };
    if (!poll.has(option)) {
        poll.set(option, new Set); optionString = `Option "${option}" added to the poll.`;
    } else {
        optionString = `Option "${option}" already exists.`;
    }
    return optionString;
}

export const vote = (option, voterId) => {
    let voteString = ""
    if (!poll.has(option)) {
        return voteString = `Option "${option}" does not exist.`
    } else if
        (poll.get(option).has(voterId)) {
        voteString = `Voter ${voterId} has already voted for "${option}".`
    } else {
        voteString = `Voter ${voterId} voted for "${option}".`; poll.get(option).add(voterId)
    }

    return voteString
}

addOption("Mexico")
addOption("Argentina")
addOption("Chile")
addOption("Ecuador")
addOption("Guatemala")
addOption("Puerto Rico")

vote("Mexico", 117)
vote("Mexico", 109)
vote("Mexico", 101)

export const displayResults = () => {
    let resultString = "Poll Results:"
    poll.forEach((votes, option) => {
        resultString += `\n${option}: ${votes.size} votes`
    })
    return resultString
}




