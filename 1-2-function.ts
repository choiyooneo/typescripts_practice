{
  // typeScript
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  // Type을 함수에 명시함으로써 함수를 읽을때 어떠한 함수인지 반환값은 무엇인지 예측이 가능하다.

  function fetchNum(id: string): Promise<number> {
    //code...
    //code...
    //code...

    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // Optional parameter
  function printName(firstName: string, lastName?: string) {}

  printName("A");
  printName("A", "B");

  // Default parameter
  function printMessage(message: string = "default message") {}

  // Rest parameter
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4));
}
