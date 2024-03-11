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
            <div className="thumbnail">
            <img src={treeInfo.imgUrl[activeSlideIndex]} alt="Tree Image" className="slider-image" />
            <div className="content">
            <div className="container"><h2><strong>Tree: </strong>{treeInfo.name}</h2></div>
              <h2>{`Slider ${activeSlideIndex + 1}`}</h2>
              <div className="row"> <h4><strong>Scientific Name: ({treeInfo.scientificName})</strong></h4></div>
              <p>{treeInfo.description[activeSlideIndex]}</p>
            </div>
          
            <div className="arrows">
              <Button variant="secondary" onClick={handlePrev}>{'<'}</Button>
              <Button variant="secondary" onClick={handleNext}>{'>'}</Button>
            </div>
          </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default InfoTree;
