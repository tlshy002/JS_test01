// Q2. 철수의 369게임 업그레이드
// 9의 배수에는 박수x2

function third(x) {
    if(x % 3 == 0 && x % 9 == 0) {
        console.log('박수x2');
    } else if(x % 3 == 0) {
        console.log('박수');
    } else {
        console.log('통과');
    }
}
third(9);
third(12);
third(7);