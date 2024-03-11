import React, { useState, useEffect } from 'react';
import treeData from '../json/TreeData.json';
import { useSearchParams } from 'react-router-dom';
import { Container, Row, Col, Table, Button, Card } from 'react-bootstrap';
import '../styles/infotree.css';

const InfoTree = () => {
  const [searchParams] = useSearchParams();
  const treeId = searchParams.get('treeId');
  const [treeInfo, setTreeInfo] = useState(null);
  const [itemActive, setItemActive] = useState(0);
  const thumbnails = Array.from(document.querySelectorAll('.thumbnail .item'));
  const items = document.querySelectorAll('.slider .list .item');
  const countItem = items.length;

  const showSlider = (index) => {
    const itemActiveOld = document.querySelector('.slider .list .item.active');
    const thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    setItemActive(index);

    const itemActiveNew = document.querySelector(`.slider .list .item:nth-child(${index + 1})`);
    const thumbnailActiveNew = document.querySelector(`.thumbnail .item:nth-child(${index + 1})`);
    itemActiveNew.classList.add('active');
    thumbnailActiveNew.classList.add('active');
  };

  const handleNext = () => {
    setItemActive((prevIndex) => (prevIndex + 1) % countItem);
  };

  const handlePrev = () => {
    setItemActive((prevIndex) => (prevIndex - 1 + countItem) % countItem);
  };

  const startAutoSlide = () => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  };

  
  useEffect(() => {
    startAutoSlide();
  }, []);

  useEffect(() => {
    console.log('Retrieved treeId: ', treeId);

    if (treeId && treeData[treeId]) {
      const info = treeData[treeId];
      setTreeInfo(info);
    } else {
      console.log('treeId is null or not found in treeData');
    }
  }, [treeId]);

  useEffect(() => {
    if (treeInfo) {
      console.log('Tree Info: ', JSON.stringify(treeInfo, null, 2));
    } else {
      console.log('Tree Info is not available yet or treeId does not exist.');
    }
  }, [treeInfo]);
  if (!treeInfo) {
    return <div>Loading..</div>;
  }

  return (
    <div className="slider">
              <div class="list">
            <div class="item active">
            <img src={treeInfo.imgUrl[1]} alt="Tree Image" />
                <div class="content">
                    <p>design</p>
                    <h2>Slider 01</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.
                    </p>
                </div>
            </div>
            <div class="item">
            <img src={treeInfo.imgUrl[0]} alt="Tree Image"/>
                <div class="content">
                    <p>design</p>
                    <h2>Slider 02</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.
                    </p>
                </div>
            </div>
            <div class="item">
            <img src={treeInfo.imgUrl[1]} alt="Tree Image"/>
                <div class="content">
                    <p>design</p>
                    <h2>Slider 03</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.
                    </p>
                </div>
            </div>
            <div class="item">
            <img src={treeInfo.imgUrl[1]} alt="Tree Image"/>
                <div class="content">
                    <p>design</p>
                    <h2>Slider 04</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.
                    </p>
                </div>
            </div>
            <div class="item">
            <img src={treeInfo.imgUrl[1]} alt="Tree Image"/>
                <div class="content">
                    <p>design</p>
                    <h2>Slider 05</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.
                    </p>
                </div>
            </div>
            <div class="item">
            <img src={treeInfo.imgUrl[1]} alt="Tree Image"/>
                <div class="content">
                    <p>design</p>
                    <h2>Slider 06</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.
                    </p>
                </div>
            </div>
            <div class="item">
            <img src={treeInfo.imgUrl[1]} alt="Tree Image"/>
                <div class="content">
                    <p>design</p>
                    <h2>Slider 07</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.
                    </p>
                </div>
            </div>
            <div class="item">
            <img src={treeInfo.imgUrl[1]} alt="Tree Image"/>
                <div class="content">
                    <p>design</p>
                    <h2>Slider 08</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.
                    </p>
                </div>
            </div>
            <div class="item">
            <img src={treeInfo.imgUrl[1]} alt="Tree Image"/>
                <div class="content">
                    <p>design</p>
                    <h2>Slider 09</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.
                    </p>
                </div>
            </div>
            <div class="item">
            <img src={treeInfo.imgUrl[1]} alt="Tree Image"/>
                <div class="content">
                    <p>design</p>
                    <h2>Slider 10</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.
                    </p>
                </div>
            </div>
        </div>
        <div className="arrows">
        <button onClick={handlePrev}>{'<'}</button>
        <button onClick={handleNext}>{'>'}</button>
      </div>
      <div className="thumbnail">
        {thumbnails.map((thumbnail, index) => (
          <div key={index} className={`item ${index === itemActive ? 'active' : ''}`}>
            <img src="./bg.png" alt={`Thumbnail ${index + 1}`} />
            <div className="content">{`Name Slider ${index + 1}`}</div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default InfoTree;
