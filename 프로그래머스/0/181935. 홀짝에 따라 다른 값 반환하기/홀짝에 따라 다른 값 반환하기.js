function solution(n) {
    var answer = 0;
    if(n % 2 === 0) {
        for(let i = 2; i <= n; i+=2) {
            answer += i * i;
        }
    } else {
        for(let k = 1; k <= n; k+=2) {
            answer += k;
        }
    }
    return answer;
}