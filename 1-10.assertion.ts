// 아래와같은 타입스크립트가 아닌 자바스크립트의 함수가 있을때..
function jsStrFunc(): any {
  return "string~~~";
}

// 생각하기에 jsStrFunc는 100% string을 반환할꺼야 라고 생각(장담)한다면..
// 형변환을 할수있다. *그러나 주의 해야한다..

const result = jsStrFunc();
console.log((result as string).length); //타입 스크립트는 형변환을 하면 그 형태대로 사용가능..
console.log((<string>result).length); //타입 스크립트는 형변환을 하면 그 형태대로 사용가능..
