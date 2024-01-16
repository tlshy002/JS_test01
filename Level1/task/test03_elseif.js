// Q3. 시험점수 합격여부 알려주는 함수
// 100점만점에 두 과목 합쳐서 120이상이면 합격
// 두과목 합쳐서 120이상이여도 과목하나가 40미만이면 불합격


function test(x, y) {
    const score = x + y;
    if((x > 101 || x < 0) || (y > 101 || y < 0)) {
        console.log('잘못된 점수임');
    } else if((score < 120) || (x < 40 && y < 40)) {
        console.log('불합격');        
    } else {
        console.log('합격');
    }


    // 처음에 짠 코드
    // if((score > 120) && (100 > x > 40 && 100 > y > 40)) {
    //     console.log('합격');
    // } else {
    //     console.log('불합격');
    // }
}
test(80, 120);
test(-1, 90);
test(60, 50);
test(30, 60);
test(80, 80);