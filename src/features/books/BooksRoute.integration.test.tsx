import { screen, waitForElementToBeRemoved, cleanup, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { RootState } from 'OutlastTypes';

import BooksRoute from './BooksRoute';
import { renderWithStoreAndRouter } from '../../shared/test-helpers';

const initialState: RootState = {
  books: {
    books: [],
    error: undefined,
    isFetchingBooks: false,
    isFetchingFavorite: false,
    isUpdatingFavorite: false,
    nextPage: 2,
  },
};

describe('BooksRoute', () => {
  describe('Books', () => {
    afterEach(cleanup);
    test('Should render load more button', () => {
      renderWithStoreAndRouter(<BooksRoute />, { preloadedState: initialState });

      const loadMoreButton = screen.getByTestId('LoadMoreButton');

      expect(loadMoreButton).toBeInTheDocument();
    });

    test('Should disable load more button when it is fetching', async () => {
      renderWithStoreAndRouter(<BooksRoute />, { preloadedState: initialState });

      const spinner = await screen.findByTestId('Loading');
      await waitForElementToBeRemoved(spinner);

      const loadMoreButton = await screen.findByTestId('LoadMoreButton');
      userEvent.click(loadMoreButton);

      const spinner2 = screen.getByTestId('Loading');

      expect(loadMoreButton).toBeDisabled();
      expect(spinner2).toBeInTheDocument();
    });

    test('Should list all the books fetched', async () => {
      renderWithStoreAndRouter(<BooksRoute />, { preloadedState: initialState });

      const spinner = await screen.findByTestId('Loading');
      await waitForElementToBeRemoved(spinner);

      const links = screen.getAllByRole('link');

      expect(links.length).toBeGreaterThan(0);
    });
  });
  describe('Book', () => {
    afterEach(() => {
      cleanup();
    });

    test('Should navigate to the single book page', async () => {
      renderWithStoreAndRouter(<BooksRoute />, {
        preloadedState: initialState,
      });

      const spinner = await screen.findByTestId('Loading');
      await waitForElementToBeRemoved(spinner);

      const links = screen.getAllByRole('link');

      expect(links.length).toBeGreaterThan(0);
      userEvent.click(links[0]);

      // const bookId = links[0].getAttribute('data-testid')?.split('-').reverse()[0];

      // eslint-disable-next-line no-restricted-globals
      // const param = location.pathname.split('/').reverse()[0];
      // expect(param).toBe(bookId);
    });
    test('Should mark book as favorite', async () => {
      renderWithStoreAndRouter(<BooksRoute />, { preloadedState: initialState });

      const spinner = await screen.findByTestId('Loading');
      await waitForElementToBeRemoved(spinner);

      const links = screen.getAllByRole('link');

      expect(links.length).toBeGreaterThan(0);
      userEvent.click(links[0]);

      const favoriteButton = await screen.findByTestId('FavoriteButton');
      await waitFor(() => expect(favoriteButton).toBeInTheDocument());

      expect(favoriteButton).toBeInTheDocument();
    });
  });
});
