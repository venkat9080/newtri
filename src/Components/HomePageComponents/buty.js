import React from 'react';
import './news.css';
import NewsButy from './butygod';

function Buty() {
  const sections = [
    {
      title: 'Fashion & Lifestyle',
      viewAllUrl: '#',
      articles: [
        {
          image: 'https://www.indiaretailing.com/wp-content/uploads/2025/05/Mukesh-Kumar.jpg',
          heading: 'The House of Rare opens first unified Rareism...',
          subheading: 'Spanning over 1,350 sq. ft., the newly launched store...',
        },
        {
          image: 'https://www.indiaretailing.com/wp-content/uploads/2025/05/Mukesh-Kumar.jpg',
          heading: '₹14,000 Cr Fashion Empire Restructured: How Ashish Dikshit...',
          subheading: 'ABFRL is undergoing a strategic vertical demerger...',
        },
        {
          image: 'https://www.indiaretailing.com/wp-content/uploads/2025/05/Mukesh-Kumar.jpg',
          heading: 'CHANEL Fragrance & Beauty launches on Nykaa',
          subheading: 'Chanel’s products will be available through a select offering...',
        },
      ],
    },
    {
      title: 'Beauty & Wellness',
      viewAllUrl: '#',
      articles: [
        {
          image: 'https://www.indiaretailing.com/wp-content/uploads/2025/04/Kora-organics.jpg',
          heading: 'Skincare brand KORA Organics enters India with Beautindia',
          subheading: 'The brand will be available exclusively on Nykaa...',
        },
        {
          image: 'https://www.indiaretailing.com/wp-content/uploads/2025/04/Kora-organics.jpg',
          heading: 'The Basics Woman: Redefining hormonal health...',
          subheading: 'The Basics Woman’s mission is to offer sustainable, long-term...',
        },
        {
          image: 'https://www.indiaretailing.com/wp-content/uploads/2025/04/Kora-organics.jpg',
          heading: 'Urban Company files draft papers for Rs 1,900...',
          subheading: 'The company proposed to raise Rs 429 crore through...',
        },
      ],
    },
    {
      title: 'Food & Beverage',
      viewAllUrl: '#',
      articles: [
        {
          image: 'https://www.indiaretailing.com/wp-content/uploads/2023/04/coca-cola-e1714541569842.jpg',
          heading: 'Something’s Brewing targets Rs 250 cr revenue by...',
          subheading: 'Although Something’s Brewing is primarily a B2C brand...',
        },
        {
          image: 'https://www.indiaretailing.com/wp-content/uploads/2023/04/coca-cola-e1714541569842.jpg',
          heading: 'India to be among Costa Coffee’s top 5...',
          subheading: 'India is among the top-20 coffee markets globally for...',
        },
        {
          image: 'https://www.indiaretailing.com/wp-content/uploads/2023/04/coca-cola-e1714541569842.jpg',
          heading: 'Coca–Cola reports double-digit volume growth in Q1...',
          subheading: 'The global earnings statement also drew attention to the...',
        },
      ],
    },
  ];

  return (
    <div className="container">
      {sections.map((section, index) => (
        <NewsSection key={index} {...section} />
      ))}
    </div>
  );
}

export default Buty;
