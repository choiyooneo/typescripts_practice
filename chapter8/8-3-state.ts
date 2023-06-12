{
  // 세부적인 에러를 결정하고 싶을때는 error state를 쓰는것이 좋다.

  type SuccessState = {
    result: "success";
    reason: "offline" | "down" | "timeout";
  };

  type NetworkErrorState = {
    result: "fail";
  };

  type ResultState = SuccessState | NetworkErrorState;

  class NetworkClient {
    // 사실 이부분은에서 예상이 가능하다. 1.연결이 성공했는지. 2.연결이 실패했는지.
    // 예상 가능하게 프로그래밍 설계가 가능하다는것.
    tryConnect(): ResultState {
      return {
        result: "success",
        reason: "down",
      };
    }
  }

  class UserService {
    constructor(private client: NetworkClient) {}

    login() {
      this.client.tryConnect();
    }
  }

  class App {
    constructor(private userService: UserService) {}
    run() {
      try {
        this.userService.login();
      } catch (error) {}
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);

  app.run();
}
