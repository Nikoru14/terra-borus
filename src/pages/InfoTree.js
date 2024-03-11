import React, { useState, useEffect } from 'react';
import treeData from '../json/TreeData.json';
import { useSearchParams } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/infotree.css';

const InfoTree = () => {
  const [searchParams] = useSearchParams();
  const treeId = searchParams.get('treeId');
  const [treeInfo, setTreeInfo] = useState(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  useEffect(() => {
    if (treeId && treeData[treeId]) {
      setTreeInfo(treeData[treeId]);
    } else {
      console.log('treeId is null or not found in treeData');
    }
  }, [treeId]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveSlideIndex(prevIndex => (prevIndex + 1) % treeInfo?.imgUrl.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [treeInfo]);

  const handleNext = () => {
    setActiveSlideIndex(prevIndex => (prevIndex + 1) % treeInfo.imgUrl.length);
  };

  const handlePrev = () => {
    setActiveSlideIndex(prevIndex => (prevIndex - 1 + treeInfo.imgUrl.length) % treeInfo.imgUrl.length);
  };

  if (!treeInfo) {
    return <Container>Loading...</Container>;
  }

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={8}>
          <div className="slider">
            <img src={treeInfo.imgUrl[activeSlideIndex]} alt="Tree Image" className="slider-image" />
            <div className="content">
              <h2>{`Slider ${activeSlideIndex + 1}`}</h2>
              <p>{treeInfo.description}</p>
            </div>
            <div className="arrows">
              <Button variant="secondary" onClick={handlePrev}>{'<'}</Button>
              <Button variant="secondary" onClick={handleNext}>{'>'}</Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default InfoTree;
