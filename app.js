function playerMaker(name) {
    return {
        name: name,
    };
}
var soyoung = playerMaker("soyoung");
//readonly오류
soyoung.name = "123";
//배열도 적용가능
var names = ["soyoung", "hojin", "jisoo"];
