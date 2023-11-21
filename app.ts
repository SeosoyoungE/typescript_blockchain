function hello(): never {
  throw new Error("XXX");
}
hello();
