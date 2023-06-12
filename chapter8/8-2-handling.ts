{
  //try chatch handling.. 비법.

  class NetworkClient {
    tryConnect(): void {
      throw new Error("no network!");
    }
  }

  class UserService {
    constructor(private client: NetworkClient) {}

    login() {
      //A1: 사실 여기엣 에러 핸들링을 해도 해줄것이 마땅하게 없다.. 여기에서 해줄것이 없다면..
      // try catch 도 안쓰는것이 낫다는것이다. 이것보다 윗단에서 확인해보자. 즉 처리할수 있는곳에서 처리하자.
      this.client.tryConnect();
      //login...
    }
  }

  class App {
    constructor(private userService: UserService) {}
    run() {
      //A2 : Application 단에서 에러 핸들링을 해주는것이 좋을것 같다.
      try {
        this.userService.login();
      } catch (error) {
        // 여기에서 의미 있는 처리가 가능하다.
        // 사용자에게 다이얼로그로 에러를 알려주는 행위 라던지..
      }
    }
  }

  //Q : 어디에서  Error handling 을 해야할까? 중요한것은 의미 있게 처리할수있는곳을 생각해보자는 것이다.

  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);

  app.run();
}
