function solution(a, b) {
    var answer = 0;
    const ab = parseInt(a.toString() + b.toString());
    if(ab < 2 * a * b) {
        answer = 2 * a * b;
} else answer = ab;
    return answer;
}