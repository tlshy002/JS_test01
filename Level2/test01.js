// Level 2 변수, 사칙연산 실력향상 과제
// 이자율 계산 (정상작동함)
//연 15% 20%인데 2년이니까 퍼센트 2번계산

const money1 = 60000;
const money2 = 10000;

function cal(money) {
    if(money >= 50000) {
        const year1 = money * 0.2; // year1 = 12000
        const year2 = (year1 + money) * 0.2; // year2 = 14400
        const result = (year1 + money) + year2; // result = 72000 + 14400
        console.log(result);
    } else if((money < 50000) || (money > 0)) {
        const year1 = money * 0.15; 
        const year2 = (year1 + money) * 0.15; 
        const result = year1 + money + year2; 
        console.log(result);
    }
}
cal(money1);
cal(money2);

// 예제 답
var 예금액 = 60000;
var 미래예금액 = 0;
if ( 예금액 >= 50000 ){
  미래예금액 = 예금액 * 1.2 * 1.2 ;
} else {
  미래예금액 = 예금액 * 1.15 * 1.15 ;
}
console.log(미래예금액)