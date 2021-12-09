/* eslint-disable import/prefer-default-export */

import { rest } from 'msw';
import { books as booksResponse, favoriteBooks as favoriteBooksResponse } from './data';

const handlers = [
  rest.get('http://localhost:3001/books', async (req, res, ctx) => {
    if (!req.url.searchParams.has('pageNumber')) {
      return res(ctx.json(booksResponse['1']));
    }
    const pageNumber = req.url.searchParams.get('pageNumber') ?? '';
    return res(ctx.json(booksResponse[pageNumber as keyof typeof booksResponse]));
  }),
  rest.get('/books/:bookId/favorite', async (req, res, ctx) => {
    const { bookId } = req.params;

    const book = favoriteBooksResponse.find(fb => fb.bookId === Number(bookId));
    if (book) {
      return res(ctx.json(book));
    }
    return res(
      ctx.json({
        bookId,
        isFavorite: false,
      }),
    );
  }),
];

export { handlers };
