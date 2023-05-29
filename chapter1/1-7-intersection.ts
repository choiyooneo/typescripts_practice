{
  /**
   * (union 은 or 의 성격 을 가지고있지만..)
   *  Intersection Types : &
   * 다양한 타입을 하나로 만들수가 있다.
   */

  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    employId: number;
    worker: () => void;
  };

  function interWork(person: Student & Worker) {
    console.log(person.name, person.employId, person.worker());
  }

  //호출할때는 Student 와 Worker를 같이..
  interWork({
    name: "elie",
    score: 1,
    employId: 123,
    worker: () => {},
  });
}
