const sum = (a, b, ...args) => {
    console.log(`a: ${a}`)
    console.log(`b: ${b}`)
    console.log(`args: ${args}`)
    return a + args[3]
}

console.log(sum(1, 2, 3, 4, 5, 6))
