//같은 타입에 사용하기 위하여 alias type요소를 생성
type player = {
  name: string;
  age?: number;
};

//타입 사용법
const soyoung: player = {
  name: "soyoung",
  age: 25,
};
