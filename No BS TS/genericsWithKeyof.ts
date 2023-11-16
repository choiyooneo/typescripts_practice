function pluck<DataType, keyType extends keyof DataType>(
  items: DataType[],
  key: keyType
): DataType[keyType][] {
  return items.map((item) => {
    const t = item[key];
    console.log(`item:${item},item[key]:${t}`);

    return t;
  });
}

const dogs = [
  { name: "mimi", age: 12 },
  { name: "LG", age: 13 },
];

console.log(pluck(dogs, "age"));
// console.log(pluck(dogs, "name"));

// 2번째 예제
interface BaseEvent {
  time: number;
  user: string;
}

interface EventMap {
  addToCart: BaseEvent & { quantity: number; productId: string };
  checkout: BaseEvent;
}

function sendEvent<Name extends keyof EventMap>(
  name: Name,
  data: EventMap[Name]
) {
  console.log([name, data]);
}

sendEvent("addToCart", {
  productId: "foo",
  quantity: 1,
  time: 10,
  user: "abc",
});
