{
  /**
   * Type Aliases
   */

  type Text = string;
  const name: Text = "ABCD";

  type Num = number;
  const age: Num = 123;

  // string Literal Types
  type Name = "name";
  let yoonName: Name = "name"; //name을 강제로 넣을수있다.

  // object도 가능하다.
  type Student = {
    name: string;
    age: number;
  };

  const student: Student = {
    name: "abc",
    age: 12,
  };
}
