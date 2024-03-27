import React, { useState } from 'react';
import '../styles/treeform.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
function App() {
  const [current, setCurrent] = useState(1);
  const steps = 4;

  const containerStyle = {
    width: '80%',
    border: '1px solid #ccc',
    padding: '50px',
    marginTop: '5%',
    backgroundColor: 'white',
  };

  const next = () => {
    setCurrent(current + 1);
  };

  const previous = () => {
    setCurrent(current - 1);
  };

  const sumbit = (e) => {
    e.preventDefault();
    return false;
  };

  const setProgressBar = (curStep) => {
    const percent = ((curStep - 1) / (steps - 1)) * 100;
    return percent + '%';
  };


  return (
    <Container style={containerStyle}>
      <Row>
        <Col>
          <div id="heading">Add New Tree Species</div>
          <p id='paragraphh'>Fill all form field to go to next step</p>
          <form id="msform">
            <ul id="progressbar">
              <li className={current === 1 ? 'active' : ''} id="account">
                <strong>First</strong>
              </li>
              <li className={current === 2 ? 'active' : ''} id="personal">
                <strong>Second</strong>
              </li>
              <li className={current === 3 ? 'active' : ''} id="payment">
                <strong>Third</strong>
              </li>
              <li className={current === 4 ? 'active' : ''} id="confirm">
                <strong>Finish</strong>
              </li>
            </ul>
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped progress-bar-animated"
                role="progressbar"
                style={{ width: setProgressBar(current) }}
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>{' '}

            <br />
            {/* Your form fields go here */}
            {current === 1 && (
              <fieldset>
                <div className="form-card">
                  <div className="row">
                    <div className="col-7">
                      <div className="fs-title">Tree Information</div>
                    </div>
                    <div className="col-5">
                      <div className="steps">Step 1</div>
                    </div>
                  </div>
                  <label id='addtreelabel' for="name">Name:</label>
                  <input type="text" class="fieldlabels" id="name" name="name" placeholder="Name" />
                  <label id='addtreelabel' for="scientificName">Scientific Name:</label>
                  <input type="text" class="fieldlabels" id="scientificName" name="scientificName" placeholder="Scientific Name" required />
                  <label id='addtreelabel' for="description">Description:</label>
                  <input type="text" class="fieldlabels" id="description" name="description" placeholder="Description" required />
                  <label id='addtreelabel' for="otherNames">Other Names:</label>
                  <input type="text" class="fieldlabels" id="otherNames" name="otherNames" placeholder="Other Names" />
                  <label id='addtreelabel' class="fieldlabels">Upload File</label>
                  <input type="file" name="pic" accept="image/*" />
                </div>
                <input
                  type="button"
                  className="next action-button"
                  value="Next"
                  onClick={next}
                />
              </fieldset>
            )}
            {current === 2 && (
              <fieldset>
                <div class="form-card">
                  <div class="row">
                    <div class="col-7">
                      <div class="fs-title">Tree Information</div>
                    </div>
                    <div class="col-5">
                      <div class="steps">Step 2</div>
                    </div>
                  </div>
                  <label id='addtreelabel' for="treeCycle">Tree Cycle:</label>
                  <select class="form-control" id="treeCycle" name="treeCycle" required>
                    <option value="">Select</option>
                    <option value="Annual">Annual</option>
                    <option value="Biennial">Biennial</option>
                    <option value="Perennial">Perennial</option>
                  </select>
                  <label id='addtreelabel' for="fruitingMonths">Fruiting Months:</label>
                  <input type="text" class="fieldlabels" id="fruitingMonths" name="fruitingMonths" />
                  <label id='addtreelabel' for="treeStatus">Tree Status:</label>
                  <select class="form-control" id="treeStatus" name="treeStatus" required>
                    <option value="">Select</option>
                    <option value="Healthy">Healthy</option>
                    <option value="Fruiting">Fruiting</option>
                    <option value="Matured">Matured</option>
                    <option value="Infected">Infected</option>
                    <option value="Unknown">Unknown</option>
                  </select>
                  <label id='addtreelabel' for="treeSpecies">Tree Species:</label>
                  <select class="form-control" id="treeSpecies" name="treeSpecies" required>
                    <option value="">Select</option>
                    <option value="Indigenous Fruit Tree">Indigenous Fruit Tree</option>
                    <option value="Indigenous Forest Tree">Indigenous Forest Tree</option>
                  </select>
                  <label id='addtreelabel' for="fruitColor">Fruit Color:</label>
                  <input type="text" class="fieldlabels" id="fruitColor" name="fruitColor" placeholder="Fruit Color" />
                </div>
                <input
                  type="button"
                  className="next action-button"
                  value="Next"
                  onClick={next}
                />
                <input
                  type="button"
                  className="previous action-button-previous"
                  value="Previous"
                  onClick={previous}
                />
              </fieldset>
            )}
            {/* Continue the same way for other steps */}
            {current === 3 && (
              <fieldset>
                <div className="form-card">
                  <div className="row">
                    <div className="col-7">
                      <div className="fs-title">Tree Information</div>
                    </div>
                    <div className="col-5">
                      <div className="steps">Step 3</div>
                    </div>
                  </div>
                  <label id='addtreelabel' for="pestIdentified">Pest Identified:</label>
                  <input type="text" id="pestIdentified" name="pestIdentified" required placeholder="Pest Identified" />
                  <label id='addtreelabel' for="pestImage">Choose Pest Identified Image:</label>
                  <input type="file" id="pestImage" name="pestImage" accept="image/*" required />
                  <label id='addtreelabel' for="floweringDescription">Flowering Description:</label>
                  <textarea id="floweringDescription" name="floweringDescription" rows="4" required placeholder="Description"></textarea>
                  <label id='addtreelabel' for="floweringImage">Choose Flowering Picture:</label>
                  <input type="file" id="floweringImage" name="floweringImage" accept="image/*" required />
                </div>
                <input
                  type="button"
                  className="next action-button"
                  value="Next"
                  onClick={next}
                />
                <input
                  type="button"
                  className="previous action-button-previous"
                  value="Previous"
                  onClick={previous}
                />
              </fieldset>
            )}

            {current === 4 && (
              <fieldset>
                <div className="form-card">
                  <div className="row">
                    <div className="col-7">
                      <div className="fs-title">Tree Information</div>
                    </div>
                    <div className="col-5">
                      <div className="steps">Step 4</div>
                    </div>
                  </div>
                  <label id='addtreelabel' for="fruitingDescription">Fruiting Description:</label>
                  <textarea id="fruitingDescription" name="fruitingDescription" rows="4" required placeholder="Description"></textarea>
                  <label id='addtreelabel' for="fruitingImage">Choose Fruiting Picture:</label>
                  <input type="file" id="fruitingImage" name="fruitingImage" accept="image/*" required />
                  <label id='addtreelabel' for="unripeFruitDescription">Unripe Fruit Description:</label>
                  <textarea id="unripeFruitDescription" name="unripeFruitDescription" rows="4" required placeholder="Description"></textarea>
                  <label id='addtreelabel' for="unripeFruitImage">Choose Unripe Fruit Picture:</label>
                  <input type="file" id="unripeFruitImage" name="unripeFruitImage" accept="image/*" required />
                  <label id='addtreelabel' for="ripeFruitDescription">Ripe Fruit Description:</label>
                  <textarea id="ripeFruitDescription" name="ripeFruitDescription" rows="4" required placeholder="Description"></textarea>
                  <label id='addtreelabel' for="ripeFruitImage">Choose Ripe Fruit Picture:</label>
                  <input type="file" id="ripeFruitImage" name="ripeFruitImage" accept="image/*" required />
                </div>
                <input
                  type="button"
                  className="next action-button"
                  value="Submit"
                  onClick={sumbit}
                />
                <input
                  type="button"
                  className="previous action-button-previous"
                  value="Previous"
                  onClick={previous}
                />
              </fieldset>
            )}
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default App;