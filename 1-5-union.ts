{
  // Union Types : OR

  type Direction = "left" | "right" | "up" | "down";
  function move(direction: Direction) {
    console.log(direction);
  }
  move("down"); // 타입형태로 지정해서 사용가능.

  // 괜찮은 예제..
  type SuccessState = {
    response: {
      body: string;
    };
  };

  type FailState = {
    reason: string;
  };

  type LoginState = SuccessState | FailState;

  function login(): LoginState {
    return {
      response: {
        body: "logged in!",
      },
    };
  }
}
