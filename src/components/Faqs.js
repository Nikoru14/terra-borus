import React, { useState } from 'react';
import '../styles/faqs.css';

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main className="containerfaqs">
      <div className="wrapper_2">
        <h1>FAQ's</h1>
        <ul>
          {faqData.map((item, index) => (
            <li className="heading1" key={index}>
              <div className={`question ${activeIndex === index ? 'active' : ''}`} onClick={() => toggleAccordion(index)}>
                <p>{item.question}</p>
                <img className={`arrow-down ${activeIndex === index ? 'active' : ''}`} src="arrow-down" alt="down" />
              </div>
              <div className={`reply sub_heading ${activeIndex === index ? 'active' : ''}`}>{item.answer}</div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Faqs;

const faqData = [
  {
    question: 'Question 1',
    answer: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis ea aliquid earum atque illo dolor explicabo est adipisci! Expedita minus deserunt aspernatur quas debitis sint commodi sapiente quos quae. In!',
  },
  {
    question: 'Question 2',
    answer: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis ea aliquid earum atque illo dolor explicabo est adipisci! Expedita minus deserunt aspernatur quas debitis sint commodi sapiente quos quae. In!',
  },
  {
    question: 'Question 3',
    answer: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis ea aliquid earum atque illo dolor explicabo est adipisci! Expedita minus deserunt aspernatur quas debitis sint commodi sapiente quos quae. In!',
  },
  {
    question: 'Question 4',
    answer: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis ea aliquid earum atque illo dolor explicabo est adipisci! Expedita minus deserunt aspernatur quas debitis sint commodi sapiente quos quae. In!',
  },
  {
    question: 'Question 5',
    answer: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis ea aliquid earum atque illo dolor explicabo est adipisci! Expedita minus deserunt aspernatur quas debitis sint commodi sapiente quos quae. In!',
  },
];
