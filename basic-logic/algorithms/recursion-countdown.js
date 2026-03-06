export const countdown = (n) => {


    if (n < 1) { return [] }
    const arr = countdown(n - 1)

    return [n, ...arr]


}

console.log(countdown(5))