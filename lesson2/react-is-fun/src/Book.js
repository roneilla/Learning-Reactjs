import React, { Component } from 'react';

export const Book = ({
  title = 'No Title Provided',
  author = 'No author',
  pages = 0,
  freeBookmark,
  hiring
}) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>Written by: {author}</p>
      <p>Pages: {pages} pages</p>
      <p>Free Bookmark Today: {freeBookmark ? 'Yes!' : 'No :('}</p>
    </section>
  );
};
