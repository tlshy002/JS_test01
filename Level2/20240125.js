// forEach 반복문
var pants = [28, 30, 32];
pants.forEach(function(a, i){
  console.log(a) //반벅문 돌때마다 array하나하나 
  console.log(i) //반복문 돌때마다 하나씩 증가하는 정수
});

// for in 반복문
var obj = { name : 'kim', age : 20 }

// key출력
for (var key in obj){
  console.log(key)
}

// value출력
for (let key in obj) {
    console.log(obj[key])
}