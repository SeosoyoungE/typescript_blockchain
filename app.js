//함수 정의법 - 함수이름() 뒤에는 리턴타입
function playerMaker(name) {
    return {
        name: name,
    };
}
//화살표 함수 정의법
var playerMaker2 = function (name) { name; };
//함수사용
var soyoung = playerMaker("soyoung");
