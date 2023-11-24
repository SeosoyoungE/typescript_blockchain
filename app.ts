//abstract class
abstract class User {
  //따로 class에 parameter를 선언할 필요 없이 constructor에서 한번에 parameter 선언 및 초기화
  constructor(
    protected firstName: string,
    protected lastName: string,
    public nickname: string,
  ) {}
  //abstract method
  abstract getNickname(): string;
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Player extends User {
  getNickname(): string {
    return this.nickname;
  }
}

const soyoung = new Player("seo", "soyoung", "soyoungee");
console.log(soyoung.getFullName);
