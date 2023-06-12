type PositionType = {
  x: number;
  y: number;
};

interface PositionInterface {
  x: number;
  y: number;
}

// 둘다 obj 형태 구현가능
const obj1: PositionType = {
  x: 1,
  y: 1,
};

const obj2: PositionInterface = {
  x: 1,
  y: 1,
};

// 둘다 class 형태 구현가능
class Pos1 implements PositionType {
  x: number;
  y: number;
}

class Pos2 implements PositionInterface {
  x: number;
  y: number;
}

// 둘다 기존것으로부터 Enxtends(확장)이 가능하다.
interface ZPositionInterface extends PositionInterface {
  z: number;
}

type ZPositionType = PositionType & { z: number };

// interface만 merge가 가능하다.
interface PositionInterface {
  z: number;
}

// type은 computed properties가 가능하다.
type Person = {
  name: string;
  age: number;
};

type Name = Person["name"];
