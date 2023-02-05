import { lazy } from "react";

export const MainPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      //@ts-ignore
      //Временная искусственная задержка
      setTimeout(() => resolve(import("./MainPage")), 1500);
    })
);
