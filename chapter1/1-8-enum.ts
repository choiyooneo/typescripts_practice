{
  /**
   * Enum
   */

  //JavaScript 는 아래와 같은 형태로 enum 형태를 보여준다.
  const MAX_NUM = 6;
  const DAYS_ENUMS = Object.freeze({ MONDAY: 0, TUESDAY: 1 });
  const dayOfToday = DAYS_ENUMS.MONDAY;

  //TypeScript 는 아래와 같은 형태
  //*그러나... 가능한한 쓰지말고.. type Days 와 같은 형태로 구현하자.
  enum Days {
    Monday,
    TuseDay,
  }
  let day: Days = Days.TuseDay;
  //* 문제는... 아래와 같은 코드가 가능하다는것이다.
  day = 0; // 타입이 보장 되지 않는다는것이다..

  // 아래처럼 enum 대신 Union type을 사용하자.
  type DaysOfWeek = "Monday" | "Tuesday";
}
