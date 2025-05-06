import React from 'react';
import './LatestNews.css'; 

const newsItems = [
  {
    image: 'https://www.indiaretailing.com/wp-content/uploads/2025/05/Rareism-Rare-Ones-696x522.jpeg',
    title: 'Swiggy’s 10–minute food delivery service ‘Bolt’ now...',
    desc: 'Currently, one in every ten food orders...'
  },
  {
    image: 'https://www.indiaretailing.com/wp-content/uploads/2025/05/Rareism-Rare-Ones-696x522.jpeg',
    title: 'Muscat Grand Mall in partnership with SRED...',
    desc: 'Little India a vibrant cultural and retail...'
  },
  {
    image: 'https://www.indiaretailing.com/wp-content/uploads/2025/05/Rareism-Rare-Ones-696x522.jpeg',
    title: 'ITC leveraging AI for supply chain efficiency,...',
    desc: 'The company has built pilot plants for...'
  },
  {
    image: 'https://www.indiaretailing.com/wp-content/uploads/2025/05/Rareism-Rare-Ones-696x522.jpeg',
    title: 'CHANEL Fragrance & Beauty launches on Nykaa',
    desc: 'Chanel\'s products will be available through a...'
  },
  {
    image: 'https://www.indiaretailing.com/wp-content/uploads/2025/05/Rareism-Rare-Ones-696x522.jpeg',
    title: 'Eternal Q4 net profit at Rs 39...',
    desc: 'The company, which re-branded itself from Zomato...'
  },
  {
    image: 'https://www.indiaretailing.com/wp-content/uploads/2025/05/Rareism-Rare-Ones-696x522.jpeg',
    title: 'Order volumes across D2C brands grew by...',
    desc: 'Despite the rise in order volumes, average...'
  },
  {
    image: 'https://www.indiaretailing.com/wp-content/uploads/2025/05/Rareism-Rare-Ones-696x522.jpeg',
    title: 'Varun Beverages Q1 profit rises 33.47% to...',
    desc: 'The company, which follows the calendar year...'
  },
  {
    image: 'https://www.indiaretailing.com/wp-content/uploads/2025/05/Rareism-Rare-Ones-696x522.jpeg',
    title: 'Japan’s KOKUYO to acquire office furniture company...',
    desc: 'This strategic acquisition marks a significant milestone...'
  }
];

const LatestNews = () => {
  return (
    <div className="latest-news-container">
      <div className="header">
        <div className="title">Latest News</div>
        <div className="view-all">View All &gt;&gt;</div>
      </div>
      <div className="news-content">
        {/* Left main article */}
        <div className="main-article">
          <img src="https://www.indiaretailing.com/wp-content/uploads/2025/05/Rareism-Rare-Ones-696x522.jpeg" alt="Main News" />
          <h3>The House of Rare opens first unified Rareism and Rare Ones Store in Mumbai</h3>
          <p>
            Spanning over 1,350 sq. ft., the newly launched store is located on the first floor of Phoenix Market City Mall, Kurla West Mumbai...
          </p>
        </div>

        {/* Right two-column news */}
        <div className="side-news">
          {newsItems.map((item, index) => (
            <div className="side-news-item" key={index}>
              <img src={item.image} alt="news" />
              <div className="side-news-text">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
