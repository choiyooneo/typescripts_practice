{
  type Video = {
    title: string;
    author: string;
  };

  type Optional<T> = {
    [P in keyof T]?: T[P]; //for...in
    //T 의 객체안에 키값 : T의객체[P:키값]
  };

  type VideoOptional = Optional<Video>;

  const videoInfo: Optional<VideoOptional> = {
    title: "hello",
  };

  /*
  type VideoOptional = {
    title?: string;
    author?: string;
  };

  type VideoReadOnly = {
    readonly title: string;
    readonly author: string;
  };
  */

  type Nullable<T> = {
    [P in keyof T]: T[P] | null;
  };
}
