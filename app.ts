type Config = {
  path: string;
  state: object;
};

//함수에서 사용할 오버로딩 타입정의 예시
type Push = {
  (path: string): void;
  (config: Config): void;
};

//실제 함수에서 사용하는 법
const push: Push = (config) => {
  if (typeof config === "string") {
    console.log(config);
  } else {
    console.log(config.path, config.state);
  }
};
