function solution(a, b) {
    var answer = 0;
    const intA = a.toString()+b.toString();
    const intB = b.toString()+a.toString();
    if(intA > intB) {
     return parseInt(intA);
    }else return parseInt(intB);
} 