const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('close', function () {
    // escape문으로 백슬래시가 사용되기때문에 하나 더 추가
    console.log(`!@#$%^&*(\\'"<>?:;`)
});