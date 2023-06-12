{
  /**
   *  Exception 과 Error state를 잘 구별하자.
   * Exception은 개발자가 컨트롤 하지 못할경우 (컴퓨터 메모리 부족 등... 네트워크 끊김 등...)
   * Error state는 개발자가 컨트롤이 가능한 예외들을 말한다.
   */

  function move(direction: "up" | "down" | "left" | "right" | "he") {
    switch (direction) {
      case "up":
        console.log("blabla");
        break;
      case "down":
        console.log("blabla");
        break;
      case "left":
        console.log("blabla");
        break;
      case "right":
        console.log("blabla");
        break;
      default:
        const invalid: never = direction; // 컴파일 단계에서 개발자에게  문제점을 알려줄수도 있다. "he" 를 case 문에 추가하면 문제 해결가능하다.
        throw new Error(`unknown direction: ${invalid}`); //이부분은 컴파일 단계에서는 알려주기는 어렵긴하다.
    }
  }
}
