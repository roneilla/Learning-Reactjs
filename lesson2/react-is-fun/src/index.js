import React, { Component } from 'react';
import { render } from 'react-dom';
import Library from './Library';

let bookList = [
  {
    title: 'A Series of Unfortunate Events 1',
    author: 'Lemony Snicket',
    pages: 300
  },
  {
    title: 'A Series of Unfortunate Events 2',
    author: 'Lemony Snicket',
    pages: 205
  },
  {
    title: 'A Series of Unfortunate Events 3',
    author: 'Lemony Snicket',
    pages: 388
  },
  {
    title: 'A Series of Unfortunate Events 4',
    author: 'Lemony Snicket',
    pages: 123
  }
];

render(<Library books={bookList} />, document.getElementById('root'));
