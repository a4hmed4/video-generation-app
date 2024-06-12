import React from 'react';
import './article.css';

const Article = ({ imgUrl, date, text }) => (
  <div className="vga__blog-container_article">
    <div className="vga__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="vga__blog-container_article-content">
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <p><a href="https://drive.google.com/file/d/12LSE4rFgmU7FToT_l_v9XMEJJpKYMNxz/view?usp=drive_link">Read Full Documentation</a></p>
    </div>
  </div>
);

export default Article;
