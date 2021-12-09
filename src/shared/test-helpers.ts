import { render, RenderOptions } from '@testing-library/react';
import { ReactElement } from 'react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { configureStore, EnhancedStore } from '@reduxjs/toolkit';

import { RootState } from 'OutlastTypes';

import { rootReducer } from '../store';
import { ProviderWrapper, ProviderAndRouterWrapper } from './Wrappers';

export const renderWithHistoryRouter = (ui: ReactElement, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return render(ui, { wrapper: BrowserRouter });
};

export const renderWithRouter = (ui: ReactElement, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return render(ui, { wrapper: MemoryRouter });
};

export function renderWithStore(
  ui: ReactElement,
  {
    preloadedState,
    store = configureStore({
      reducer: rootReducer,
      ...(preloadedState ? { ...preloadedState } : {}),
    }),
    ...renderOptions
  }: RenderOptions & { preloadedState?: RootState; store?: EnhancedStore } = {},
) {
  return render(ui, { wrapper: ProviderWrapper(store), ...renderOptions });
}

export function renderWithStoreAndRouter(
  ui: ReactElement,
  {
    preloadedState,
    store = configureStore({
      reducer: rootReducer,
      ...(preloadedState ? { ...preloadedState } : {}),
    }),
    ...renderOptions
  }: RenderOptions & {
    preloadedState?: RootState;
    store?: EnhancedStore;
  } = {},
) {
  return render(ui, { wrapper: ProviderAndRouterWrapper(store), ...renderOptions });
}
