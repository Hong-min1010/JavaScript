// require() -> 'readline'이라는 모듈을 불러옴
const readline = require('readline');
// readline 모듈을 사용 한 인터페이스를 생성 후 rl 변수에 저장
// input : 사용자 입력값
// output : 출력값
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 입력값을 저장 할 input 변수 선언
let input = [];

// 사용자가 Enter를 할 때마다, 한줄 저장
// 두줄 입력 시 이전값 초기화 후 마지막 입력 한 한줄만 배열에 저장
rl.on('line', function (line) {
    input = [line];
    // 'close' 입력 종료 시 실행
}).on('close',function(){
    str = input[0];
    console.log(str);
});