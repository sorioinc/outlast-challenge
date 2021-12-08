import axios from 'axios';

import { GetBookResponse, IsFavoriteResponse } from './types';

const baseUrl = 'http://localhost:3001';

export async function getAllBooks(page?: number): Promise<GetBookResponse> {
  return axios
    .get<GetBookResponse>(`${baseUrl}/books${page ? `?pageNumber=${page}` : ''}`)
    .then(({ data }) => data);
}

export async function getIsFavoriteBook(bookId: number): Promise<IsFavoriteResponse> {
  const user = localStorage.getItem('user');
  if (!user) {
    throw new Error('Missing user');
  }
  return axios
    .get<IsFavoriteResponse>(`${baseUrl}/books/${bookId}/favorite`, {
      headers: {
        user,
      },
    })
    .then(({ data }) => data);
}

export async function putIsFavoriteBook(bookId: number): Promise<IsFavoriteResponse> {
  const user = localStorage.getItem('user');
  if (!user) {
    throw new Error('Missing user');
  }
  return axios
    .put<IsFavoriteResponse>(
      `${baseUrl}/books/${bookId}/favorite`,
      {},
      {
        headers: {
          user,
        },
      },
    )
    .then(({ data }) => data);
}
