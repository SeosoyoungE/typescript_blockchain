//객체 타입 정의 방법
const player: {
  name: string;
  age?: number; //선택적 요소로 만들기 - ?
} = {
  name: "soyoung",
};

//age가 undefined일수도 있기때문에 에러
if (player.age < 10) {
}
//존재여부를 확인하면 에러가 나지않음
if (player.age && player.age < 10) {
}
