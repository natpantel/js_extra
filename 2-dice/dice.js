function diceRoll(diceType) {
    const availableTypes = ['d4', 'd6', 'd8', 'd10', 'd12', 'd16', 'd20'];
    if (!availableTypes.includes(diceType)) {
        return null
    }
    const diceCount = Number(diceType.replace('d', ''));
    return Math.floor(Math.random() * (diceCount - 1) + 1)
}