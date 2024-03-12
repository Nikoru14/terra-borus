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
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    if (treeId && treeData[treeId]) {
      const currentTreeInfo = treeData[treeId];
      setTreeInfo(currentTreeInfo);
      setSlides([
        {
          content1: (
            <div>
              <p><strong>Scientific Name:</strong> {currentTreeInfo.scientificName}</p>
              <p><strong>Description:</strong> {currentTreeInfo.description}</p>
              <p><strong>Other Names:</strong> {currentTreeInfo.otherNames.join(", ")}</p>
              <p><strong>Tree Cycle:</strong> {currentTreeInfo.treeCycle}</p>
              <p><strong>Fruiting Months:</strong> {currentTreeInfo.fruitingMonths}</p>
              <p><strong>Tree Status:</strong> {currentTreeInfo.treeStatus}</p>
              <p><strong>Tree Species:</strong> {currentTreeInfo.treeSpecies}</p>
              <p><strong>Fruit Colour:</strong> {currentTreeInfo.fruitColour}</p>
              <p><strong>Pests Identified:</strong> {currentTreeInfo.pestIdentified.join(", ")}</p>
            </div>
          ),
        },
        {
          title: "Flowering Description",
          content1: currentTreeInfo.floweringDescription,
        },
        {
          title: "Fruiting Description",
          content1: currentTreeInfo.fruitingDescription,
        },
        {
          title: "Unripe Fruit Description",
          content1: currentTreeInfo.unripeFruitDescription,
        },
        {
          title: "Ripe Fruit Description",
          content1: currentTreeInfo.ripeFruitDescription,
        },
      ]);
    } else {
      console.log('treeId is null or not found in treeData');
    }
  }, [treeId]);

  const handleNext = () => {
    setActiveSlideIndex((prevIndex) => (prevIndex + 1) % (treeInfo.imgUrl.length || 1));
  };

  const handlePrev = () => {
    setActiveSlideIndex((prevIndex) => (prevIndex - 1 + (treeInfo.imgUrl.length || 1)) % (treeInfo.imgUrl.length || 1));
  };

  if (!treeInfo) {
    return <Container>Loading...</Container>;
  }

  return (
    <Container>
      <Row className="justify-content1-md-center">
        <Col md={9}>
          <div className="slider">
            <div className="thumbnail">
              <img src={treeInfo.imgUrl[activeSlideIndex]} alt="Tree Image" className="slider-image" />
              <div className="container"><h2><strong>Tree: </strong>{treeInfo.name}</h2>
              <div className="content1">
                <h2>{`Slider ${activeSlideIndex + 1}`}</h2>
                <h2>{slides[activeSlideIndex] && slides[activeSlideIndex].title}</h2>
                <p className='paradescrip'>{slides[activeSlideIndex] && slides[activeSlideIndex].content1}</p>
              </div>
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
