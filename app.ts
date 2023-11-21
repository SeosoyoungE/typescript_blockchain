let a: unknown;

//unknown오류
let b = a + 1;

//한번확인해주면 정상작동
if (typeof a === "number") {
  let b = a + 1;
}
