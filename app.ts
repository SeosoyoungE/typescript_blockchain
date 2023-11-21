//같은 타입에 사용하기 위하여 alias type요소를 생성 / 맨앞글자 대문자사용
type Player = {
  name: string;
  age?: number;
};

//함수 정의법 - 함수이름() 뒤에는 리턴타입
function playerMaker(name: string): Player {
  return {
    name, //같은이름일경우
  };
}

//화살표 함수 정의법
const playerMaker2:Player =(name:string)=>{name}

//함수사용
const soyoung = playerMaker("soyoung");
