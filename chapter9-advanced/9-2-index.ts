{
  const obj = {
    name: "ellie",
  };
  //object  에서 'ellie' 에 접근하는 두가지 방법.
  obj.name; //ellie
  obj["name"]; //ellie

  type Animal = {
    name: string;
    age: number;
    gender: "male" | "female";
  };

  type Name = Animal["name"]; // string
  const text: Name = "hello";

  type Keys = keyof Animal; // key 값만 쏙 빼온다.
  const key: Keys = "age";

  type Person = {
    name: string;
    gender: Animal["gender"];
  };
}
