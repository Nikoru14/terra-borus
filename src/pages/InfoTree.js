import React, { useState, useEffect } from 'react';
import treeData from '../json/TreeData.json';
import { useSearchParams } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/infotree.css';

const InfoTree = () => {
  const [searchParams] = useSearchParams();
  const treeId = searchParams.get('treeId');
  const [treeInfo, setTreeInfo] = useState(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)
  const [slides, setSlides] = useState([]);


  useEffect(() => {
    if (treeId && treeData[treeId]) {
      setTreeInfo(treeData[treeId]);
      setSlides([
        {
          title: "General Information",
          content: `Scientific Name: ${treeInfo.scientificName}\nDescription: ${treeInfo.description}\nOther Names: ${treeInfo.otherNames.join(", ")}\nTree Cycle: ${treeInfo.treeCycle}\nFruiting Months: ${treeInfo.fruitingMonths}\nTree Status: ${treeInfo.treeStatus}\nTree Species: ${treeInfo.treeSpecies}\nFruit Colour: ${treeInfo.fruitColour}\nPests Identified: ${treeInfo.pestIdentified.join(", ")}`,
        },
        {
          title: "Flowering Description",
          content: treeInfo.floweringDescription,
        },
        {
          title: "Fruiting Description",
          content: treeInfo.fruitingDescription,
        },
        {
          title: "Unripe Fruit Description",
          content: treeInfo.unripeFruitDescription,
        },
        {
          title: "Ripe Fruit Description",
          content: treeInfo.ripeFruitDescription,
        },
      ]);
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
              <div className="container"><h2><strong>Tree: </strong>{treeInfo.name}</h2></div>
              <div className="content">
                <h2>{`Slider ${activeSlideIndex + 1}`}</h2>
                <h2>{slides[activeSlideIndex] && slides[activeSlideIndex].title}</h2>
                <p>{slides[activeSlideIndex] && slides[activeSlideIndex].content}</p>
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
