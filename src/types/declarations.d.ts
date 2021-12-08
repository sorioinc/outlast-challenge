declare module 'OutlastTypes' {
  export type RootState = import('../store').RootState;
  export type AppDispatch = import('../store').AppDispatch;
}

declare module '*.scss' {
  const content: { [className: string]: string };
  export = content;
}
