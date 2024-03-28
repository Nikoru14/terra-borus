import React, { useState, useEffect } from 'react';
import treeData from '../json/TreeData.json';
import { useSearchParams } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import infoTreecss from '../styles/infotree.module.css';

const InfoTree = () => {
  const [searchParams] = useSearchParams();
  const treeId = searchParams.get('treeId');
  const [treeInfo, setTreeInfo] = useState(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [slides, setSlides] = useState([]);
  const [thumbnails, setThumbnails] = useState([]);

  useEffect(() => {
    if (treeId && treeData[treeId]) {
      const currentTreeInfo = treeData[treeId];
      setTreeInfo(currentTreeInfo);
      setThumbnails(currentTreeInfo.imgUrl);
      setSlides([
        {
          title: 'Main Description',
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
    setActiveSlideIndex((prevIndex) => (prevIndex + 1) % (thumbnails.length || 1));
  };

  const handlePrev = () => {
    setActiveSlideIndex((prevIndex) => (prevIndex - 1 + (thumbnails.length || 1)) % (thumbnails.length || 1));
  };

  const renderThumbnails = () => {
    return thumbnails.map((thumbnail, index) => (
      <div key={index} className={infoTreecss.thumbnailItem} onClick={() => setActiveSlideIndex(index)}>
        <div className={infoTreecss.thumbnailTitle}>{slides[index] && slides[index].title}</div>
        <img
          src={thumbnail}
          alt={`Slide ${index}`}
          className={`${infoTreecss.thumbnailImage} ${index === activeSlideIndex ? infoTreecss.active : ''}`}
        />
      </div>
    ));
  };

  const activeThumbnail = thumbnails[activeSlideIndex];

  if (!treeInfo) {
    return <Container>Loading...</Container>;
  }

  return (
    <>
      <div className={infoTreecss.infotreepage}>
        <Container>
          <h2 style={{ marginLeft: "20px", marginTop: "20px", fontSize: "50px" }}><strong>Tree: </strong>{treeInfo.name}</h2>
          <Row>
            <Col md={7} sm={12} style={{ justifyContent: 'center', alignItems: 'center', margin: '2%' }}>

              <div className={infoTreecss.content2} style={{ justifyContent: 'center', alignItems: 'center' }}>
                <h2 style={{ fontSize: "100px" }}>{`Slider ${activeSlideIndex + 1}`}</h2>
                <h2>{slides[activeSlideIndex] && slides[activeSlideIndex].title}</h2>
                <p className={infoTreecss.paradescrip}>{slides[activeSlideIndex] && slides[activeSlideIndex].content1}</p>
              </div>
              <div className={infoTreecss.arrows} id={infoTreecss.arrowinfo} style={{ position: 'absolute', top: '120px', right: '0' }}>
                <Button variant="secondary" onClick={handlePrev}>{'<'}</Button>
                <Button variant="secondary" onClick={handleNext}>{'>'}</Button>
              </div>
            </Col>
            <Col md={4} sm={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div className={infoTreecss.sliderBg}><img src={activeThumbnail} alt="Slide" style={{ width: '100%', height: '530px', objectFit: 'cover', maxHeight: '70vh', borderRadius: '5%' }} /></div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className={infoTreecss.thumbnailContainer}>
                {renderThumbnails()}
              </div>
            </Col>
          </Row>
        </Container>
      </div>

    </>
  );
};

export default InfoTree;