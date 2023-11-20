// a의 타입을 추론해줌
let a = "hello";
a = "bye";
a = 123; //타입에러

// 타입을 직접 정의해줄수도 있다.
let b: boolean = "x"; //타입에러

//배열도
let c: number[] = [1, 2, 3, 4];
c.push("abc"); //타입에러

//객체도
let player = {
  name: "soyoung",
};
player.name = 1; //타입에러
player.hello(); //에러
