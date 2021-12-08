import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { ConnectedBooks, ConnectedBook } from './components';

export interface BookProps {
  id: number;
  title: string;
  authors: string;
  cover: string;
  isFavorite?: boolean;
}

type Props = Record<string, unknown>;

const BooksRoute: FC<Props> = function BooksRoute() {
  return (
    <Routes>
      <Route path="/" element={<ConnectedBooks />} />
      <Route path=":id" element={<ConnectedBook />} />
    </Routes>
  );
};

export default BooksRoute;
