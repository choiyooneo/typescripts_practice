{
  //var 는 이제 잊어먹자..
  // let 과 const 만..
  //##############################

  /**
   * 타입종류
   * Primitive(원시): number, string, boolean, bigint, symbol, null, undefine
   * Object: function, array...
   */

  // number
  const num: number = -6;

  // string
  const str: string = "hello";

  //undefined : 값이 아직 결정되어지지 않은 상태
  let name: undefined; //💩
  let age: number | undefined; // null 보다 더 보편적으로 쓰임
  age = undefined;
  age = 1;

  //함수로 사용할때 예제.. 주로 무언가를 찾을때 없으면... undefined
  function find(): number | undefined {
    return undefined;
  }

  // null : 비었다 라고 값이 결정 되어진 상태
  let person: null; //💩
  let person2: string | null;

  // unknown //💩
  //가능하면 구체적으로 타입을 지정하는것에 노력해라...

  // any //💩
  //이것도.. 가능하는한 쓰지말자..

  // never
  // 리턴할 값이 없다고 명시적으로 쓰일때 사용한다.
  // 에러를 처리할때  쓰이기도한다.
  function throwError(message: string): never {
    //message > server (log) 남기고 에러만 던질때...
    throw new Error("hello");

    //while(true){ } // 이것도 never로 활용..
  }

  // object //💩
  //너무 광범위하게 쓰인다 왠만하면 범위를 줄이는 타입을 활용하자
}
