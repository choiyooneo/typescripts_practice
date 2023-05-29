{
  // Array : 배열을 나타내는 다양한 방법
  const fruits: string[] = ["1", "2", "3"];
  const scores: Array<number> = [1, 2, 3];

  // readonly를 하면 내부에서 읽기만 가능하도록 한다.
  function printArray(fruits: readonly string[]) {}

  // Tuple...//그렇게 권장하지 않는다. 인덱스로 접근을 해야하기에..
  // interface, type alias, class 로 사용하여라
  // react에서 useState로 주로 활용을 한다.
  let student: [string, number];
  student = ["name", 123];
  student[0]; // name..
}
