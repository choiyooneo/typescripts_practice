{
  // generic 을 사용하면 타입을 보장! 받을수 있다.
  // 컴파일 시간때 우리가 보장 받을수 있다.

  function checkNotNull<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }

  const number = checkNotNull(123);
  const boal = checkNotNull(true);
}
