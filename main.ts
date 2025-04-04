// f//unction runQuiz(arr) {
let i = 0
let arr = [
    [
        "What is the capital of France?",
        ["A. London", "B. Paris", "C. Berlin", "D. Madrid"],
        "B. Paris"
], [
        "Which planet is known as the Red Planet?",
        ["A. Jupiter", "B. Mars", "C. Venus", "D. Saturn"],
        "B. Mars"
]]
while (i < arr.length) {
    console.log(`${arr[i][0]}`)
    console.log(`${arr[i][1]}.join('\n')}`)
    i += 1
}
