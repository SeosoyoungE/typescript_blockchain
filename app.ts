//제네릭 사용법
type SuperPrint = {
  <T>(arr: T[]): void;
};

const superPrint: SuperPrint = (arr) => {
  arr.forEach((element) => {
    console.log(element);
  });
};
const arr = [0, 1, 2, 3, 4];
superPrint(arr);
superPrint([true, false, true]);
