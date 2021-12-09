/* eslint-disable react/function-component-definition, react/prop-types */
import { EnhancedStore } from '@reduxjs/toolkit';
import { FC, PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

export const ProviderWrapper =
  (store: EnhancedStore): FC<PropsWithChildren<Record<string, unknown>>> =>
  ({ children }) =>
    <Provider store={store}>{children}</Provider>;

export const ProviderAndRouterWrapper =
  (store: EnhancedStore): FC<PropsWithChildren<Record<string, unknown>>> =>
  ({ children }) =>
    (
      <Provider store={store}>
        <MemoryRouter>
          <Inspector>{children}</Inspector>
        </MemoryRouter>
      </Provider>
    );

export const Inspector: FC<PropsWithChildren<Record<string, unknown>>> = ({ children }) => (
  <div>{children}</div>
);
