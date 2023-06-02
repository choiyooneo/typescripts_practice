{
  //상속을 활용하여 코드의 재사용성을 높이자.

  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  //싸구려 우유 거품기
  class CheapMilSteamer {
    private steamMilk(): void {
      console.log("Steaming some milk...");
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  //설탕 제조기
  class AutoSugarMixer {
    private getSugar(): boolean {
      console.log("getting som sugar from candy");
      return true;
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
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
    constructor(
      coffeeBeans: number,
      public readonly serialNumber: string,
      private milkFother: CheapMilSteamer
    ) {
      super(coffeeBeans);
    }

    //override 는 그대로 함수를 써주면 된다.
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots); //부모 클래스 접근시.. super만 입력
      return this.milkFother.makeMilk(coffee);
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    //DI 를 이용하여 sugar를 받는다.
    constructor(beans: number, private sugar: AutoSugarMixer) {
      super(beans);
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);

      return this.sugar.addSugar(coffee);
    }
  }

  class SweetCaffeLatteMachine extends CoffeeMachine {
    //사실.. 아래와 같은 형태는 구체 클래스를 DI를 한 형태라 커플링이 심하다..
    //그래서 interface형태로 구현하는것이 좋다.
    constructor(
      private beans: number,
      private milk: CheapMilSteamer,
      private sugar: AutoSugarMixer
    ) {
      super(beans);
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      const sugarAdded = this.sugar.addSugar(coffee);
      return this.milk.makeMilk(sugarAdded);
    }
  }
}
