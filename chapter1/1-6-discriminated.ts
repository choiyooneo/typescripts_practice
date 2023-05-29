{
  type SuccessState = {
    result: "success";
    response: {
      body: string;
    };
  };

  type FailState = {
    result: "fail";
    reason: string;
  };

  type LoginState = SuccessState | FailState;

  function login(): LoginState {
    return {
      result: "success",
      response: {
        body: "logged in!",
      },
    };
  }

  //printLoginState(state : LoginState)
  // success -> body
  // fail -> reason
  function printLoginState(state: LoginState) {
    if (state.result === "success") {
      console.log("success");
    } else {
      console.log("fail");
    }
  }
}
