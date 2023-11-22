//매개변수(parameter) 갯수가 다른 오버로딩
type Add = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};

//매개변수가 다른 함수의 타입을 오버로딩하려면 매개변수(optional)에 ?와 타입을 지정해주어야한다.
const add: Add = (a, b, c?: number) => {
  if (c) return a + b + c;
  return a + b;
};
