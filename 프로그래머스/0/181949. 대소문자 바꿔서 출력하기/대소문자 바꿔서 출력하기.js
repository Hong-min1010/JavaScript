const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [...line];
}).on('close',() => {
    console.log(
        // 정규식을 사용하여 c가 소문자인지 확인 후 소문자라면 대문자로 소문자면 그대로 출력 후 join()메서드를 사용하여 하나의 문장으로 결합
    input.map((c) => (/[a-z]/).test(c) ? c.toUpperCase() : c.toLowerCase()).join(""));
});

