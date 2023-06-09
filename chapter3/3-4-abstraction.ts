{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  class CoffeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; //class level 로 지정해서 모든 객체마다 공유 되도록 하자.
    private coffeeBeans: number = 0; // instance (object) level

    //생성자를 private로 한이유는 static makeMachine으로만 생성할수있도록 유도 하기위함이다.
    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeMachine {
      return new CoffeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        // 이 함수를 사용하는 사람에 에러를 통해 올바르게 사용하도록 유도한다.
        throw new Error("value for beans should be greater then 0");
      }

      this.coffeeBeans += beans;
    }

    clean() {
      console.log("cleaning the machine");
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);

      if (this.coffeeBeans < shots * CoffeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
    }

    private preHeat(): void {
      console.log("heating up...");
    }

    extract(shots: number): CoffeeCup {
      console.log(`pulling ${shots}} shots...`);

      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preHeat();
      return this.extract(shots);
    }
  }

  //interface에 따라 달라지는것 확인
  const maker: CoffeMachine = CoffeMachine.makeMachine(32);
  maker.fillCoffeeBeans(32);
  maker.makeCoffee(2);

  const maker2: CommercialCoffeeMaker = CoffeMachine.makeMachine(32);
  maker2.makeCoffee(2);
  maker2.fillCoffeeBeans(32);
  maker.clean();
}
