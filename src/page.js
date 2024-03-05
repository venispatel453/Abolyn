import React, { useState } from 'react';
import './page.css';
import image from './Images/Group 64.png';

const Page = () => {
  const [isTextareaFocused, setIsTextareaFocused] = useState(false);

  const handleTextareaFocus = () => {
    setIsTextareaFocused(true);
  };

  const handleTextareaBlur = () => {
    setIsTextareaFocused(false);
  };
  return (
    <div className="page">
      <div className={`upper ${isTextareaFocused ? 'blurred' : ''}`}>
        <span className="left-section">
          <h1>
            Your Partner for Finding
            <br/>
            Manufacturing Supplies
          </h1>
          <br/>
          <h2>
            Place your search request, and we will send you the list of 
            <br/>
            products matching your needs within 24 hours.
          </h2>
        </span>
        <span className="right-section">
          <img src={image} alt="Right Side Image" style={{width:'400px',height:'350px'}} />
        </span>
      </div>
      <div className={`search-bar ${isTextareaFocused ? 'active' : ''}`}>
        <span className='textarea'>
          <textarea
            placeholder="What do you want?"
            className="big-text-area"
            onFocus={handleTextareaFocus}
            onBlur={handleTextareaBlur}
          ></textarea>
        </span>
        <span className="delivery-zip">
          <textarea
            placeholder="Delivery zip code"
            className="small-text-area"
            onFocus={handleTextareaFocus}
            onBlur={handleTextareaBlur}
          ></textarea>
        </span>
        <span className='search-button'>
          {/* Search will come here */}
        </span>
      </div>
    </div>
  );  
};

export default Page;
