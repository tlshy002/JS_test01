// Q1. 철수의 369게임
// 함수에 넣은 매개변수 값이 3의 배수인지 판단하는 함수

function third(x) {
    if(x % 3 == 0) {
        console.log('박수');
    } else {
        console.log('통과');
    }
}
third(9);
third(12);
third(7);