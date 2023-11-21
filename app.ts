type Player = {
  readonly name: string; //수정이 불가능
  age?: number;
};

function playerMaker(name: string): Player {
  return {
    name,
  };
}

const soyoung = playerMaker("soyoung");
//readonly오류
soyoung.name = "123";

//배열도 적용가능
const names: readonly string[] = ["soyoung", "hojin", "jisoo"];
