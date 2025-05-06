import React from 'react';

function NewsButy({ title, viewAllUrl, articles }) {
  return (
    <div className="news-section">
      <div className="section-header">
        <h2>{title}</h2>
        <a href={viewAllUrl}>View All</a>
      </div>
      <div className="articles">
        {articles.map((item, index) => (
          <div className="article" key={index}>
            <img src={item.image} alt="article" />
            <div>
              <h4>{item.heading}</h4>
              <p>{item.subheading}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsButy;
