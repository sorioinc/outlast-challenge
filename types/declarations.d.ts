declare module 'OutlastTypes' {
  export type RootState = import('../src/store').RootState;
  export type AppDispatch = import('../src/store').AppDispatch;
}
