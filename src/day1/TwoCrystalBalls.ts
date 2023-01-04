export default function two_crystal_balls(breaks: boolean[]): number {
    // Initialize the jump amount 
    let jmpAmount = Math.floor(Math.sqrt(breaks.length))

    // Start at the first jump
    let i = jmpAmount
    for (; i < breaks.length; i += jmpAmount) {
        // If first ball breaks; break from the loop
        if (breaks[i]) break
    }
    // Move back by the jump amount and
    i -= jmpAmount
    
    for (let j=0; j < jmpAmount && i < breaks.length; i++, j++) {
        if (breaks[i]) return i
    }

    return -1
}