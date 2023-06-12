{
  interface Employee {
    pay(): void;
  }

  class FullTimeEmployee implements Employee {
    pay(): void {
      console.log("full time");
    }

    workFullTime() {}
  }

  class PartTimeEmployee implements Employee {
    pay(): void {
      console.log("part time");
    }

    partTime() {}
  }

  //세부적인 타입을 인자로 받아서 추상적인 타입으로 다시 리턴하는 함수 💩
  function payBad(employee: Employee): Employee {
    employee.pay();
    return employee;
  }

  function pay<T extends Employee>(employee: T): T {
    employee.pay();
    return employee;
  }

  const ellie = new FullTimeEmployee();
  const bob = new PartTimeEmployee();
  ellie.workFullTime();
  bob.partTime();

  const ellieAfterPay = pay(ellie);
  const bobAfterPay = pay(bob);
  ellieAfterPay.workFullTime();

  ////////////////////////////////////////

  const obj = {
    name: "yooneo",
  };

  function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }

  console.log(getValue(obj, "name"));
}
