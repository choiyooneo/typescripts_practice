{
  //상속을 활용하여 코드의 재사용성을 높이자.

  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; //class level 로 지정해서 모든 객체마다 공유 되도록 하자.
    private coffeeBeans: number = 0; // instance (object) level

    protected constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
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

      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
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

  class CaffeLatteMachine extends CoffeeMachine {
    private steamMilk(): void {
      console.log("steaming some milk ...");
    }

    constructor(coffeeBeans: number, public readonly serialNumber: string) {
      super(coffeeBeans);
    }

    //override 는 그대로 함수를 써주면 된다.
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots); //부모 클래스 접근시.. super만 입력
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true,
      };
    }
  }

  const latteMachine = new CaffeLatteMachine(23, "SSS");
  const coffee = latteMachine.makeCoffee(1);
  console.log(coffee);
  console.log(latteMachine.serialNumber);
}
