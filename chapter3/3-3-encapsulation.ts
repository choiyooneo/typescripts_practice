{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; //class level 로 지정해서 모든 객체마다 공유 되도록 하자.
    private coffeeBeans: number = 0; // instance (object) level

    //생성자를 private로 한이유는 static makeMachine으로만 생성할수있도록 유도 하기위함이다.
    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeMaker {
      return new CoffeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        // 이 함수를 사용하는 사람에 에러를 통해 올바르게 사용하도록 유도한다.
        throw new Error("value for beans should be greater then 0");
      }

      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!"); //아래는 실행이 안된다.
      }

      this.coffeeBeans -= shots * CoffeMaker.BEANS_GRAMM_PER_SHOT;

      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = CoffeMaker.makeMachine(30);
  maker.fillCoffeeBeans(30);

  //get set 예제
  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }

    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }

    set age(num: number) {
      this.internalAge = num;
    }

    constructor(private firstName: string, public lastName: string) {
      //멤버 변수처럼 활용이 가능하다.
    }
  }
  const user = new User("steve", "jobs");
  user.age = 6;
  console.log(user);
}
