import React, { useRef, useState } from 'react';
import '../styles/treeform.css'; 

function TreeForm() {
    const [current, setCurrent] = useState(1);
    const steps = document.querySelectorAll('fieldset').length;

    const setProgressBar = (curStep) => {
        const percent = parseFloat(100 / steps) * curStep;
        return percent.toFixed();
    };

    const handleNext = () => {
        const current_fs = document.getElementById(`fieldset-${current}`);
        const next_fs = document.getElementById(`fieldset-${current + 1}`);
        const progressBarItems = document.querySelectorAll('#progressbar li');

        progressBarItems[current].classList.add('active');

        next_fs.style.display = 'block';

        let opacity = 1;
        const interval = setInterval(() => {
            opacity -= 0.05;
            current_fs.style.opacity = opacity;
            next_fs.style.opacity = 1 - opacity;

            if (opacity <= 0) {
                clearInterval(interval);
                current_fs.style.display = 'none';
            }
        }, 100);

        setCurrent(current + 1);
    };

    const handlePrevious = () => {
        const current_fs = document.getElementById(`fieldset-${current}`);
        const previous_fs = document.getElementById(`fieldset-${current - 1}`);
        const progressBarItems = document.querySelectorAll('#progressbar li');

        progressBarItems[current - 1].classList.remove('active');

        previous_fs.style.display = 'block';

        let opacity = 1;
        const interval = setInterval(() => {
            opacity -= 0.05;
            current_fs.style.opacity = opacity;
            previous_fs.style.opacity = 1 - opacity;

            if (opacity <= 0) {
                clearInterval(interval);
                current_fs.style.display = 'none';
            }
        }, 100);

        setCurrent(current - 1);
    };

    return (
        <>
            <div class="row justify-content-center"/>
                    <div class="col-11 col-sm-10 col-md-10 col-lg-6 col-xl-5 text-center p-0 mt-3 mb-2"/>
                        <div class="card px-0 pt-4 pb-0 mt-3 mb-3"/>
                            <h2 id="heading">Add New Tree Species</h2>
                            <p>Fill all form field to go to next step</p>
                            <form id="msform">
                            
                                <ul id="progressbar">
                                    <li class="active" id="account"><strong>First</strong></li>
                                    <li id="personal"><strong>Second</strong></li>
                                    <li id="payment"><strong>Third</strong></li>
                                    <li id="confirm"><strong>Finish</strong></li>
                                </ul>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
                                </div> <br/>
                                <fieldset>
                                    <div class="form-card">
                                        <div class="row">
                                            <div class="col-7">
                                                <h2 class="fs-title">Tree Information</h2>
                                            </div>
                                            <div class="col-5">
                                                <h2 class="steps">Step 1</h2>
                                            </div>
                                        </div> 
                                        <label for="name">Name:</label>
                                        <input type="text" class="fieldlabels" id="name" name="name" placeholder="Name"/>
                                        <label for="scientificName">Scientific Name:</label>
                                        <input type="text" class="fieldlabels" id="scientificName" name="scientificName" placeholder="Scientific Name" required/>
                                        <label for="description">Description:</label>
                                        <input type="text" class="fieldlabels" id="description" name="description" placeholder="Description" required/>
                                        <label for="otherNames">Other Names:</label>
                                        <input type="text" class="fieldlabels" id="otherNames" name="otherNames" placeholder="Other Names"/>
                                        <label class="fieldlabels">Upload File</label>
                                        <input type="file" name="pic" accept="image/*"/>
                                        </div> 
                                    
                                        <input type="button" name="next" class="next action-button" value="Next" />
                                </fieldset>
                                <fieldset>
                                    <div class="form-card">
                                        <div class="row">
                                            <div class="col-7">
                                                <h2 class="fs-title">Tree Information</h2>
                                            </div>
                                            <div class="col-5">
                                                <h2 class="steps">Step 2</h2>
                                            </div>
                                        </div> 
                                        <label for="treeCycle">Tree Cycle:</label>
                                        <select class="form-control" id="treeCycle" name="treeCycle" required>
                                            <option value="">Select</option>
                                            <option value="Annual">Annual</option>
                                            <option value="Biennial">Biennial</option>
                                            <option value="Perennial">Perennial</option>
                                        </select>
                                        <label for="fruitingMonths">Fruiting Months:</label>
                                        <input type="text" class="fieldlabels" id="fruitingMonths" name="fruitingMonths"/> 
                                        <label for="treeStatus">Tree Status:</label>
                                        <select class="form-control" id="treeStatus" name="treeStatus" required>
                                            <option value="">Select</option>
                                            <option value="Healthy">Healthy</option>
                                            <option value="Fruiting">Fruiting</option>
                                            <option value="Matured">Matured</option>
                                            <option value="Infected">Infected</option>
                                            <option value="Unknown">Unknown</option>
                                        </select> 
                                        <label for="treeSpecies">Tree Species:</label>
                                        <select class="form-control" id="treeSpecies" name="treeSpecies" required>
                                            <option value="">Select</option>
                                            <option value="Indigenous Fruit Tree">Indigenous Fruit Tree</option>
                                            <option value="Indigenous Forest Tree">Indigenous Forest Tree</option>
                                        </select>
                                        <label for="fruitColor">Fruit Color:</label>
                                        <input type="text" class="fieldlabels" id="fruitColor" name="fruitColor" placeholder="Fruit Color"/>
                                    </div> 
                                    
                                        <input type="button" name="next" class="next action-button" value="Next" /> <input type="button" name="previous" class="previous action-button-previous" value="Previous" />
                                </fieldset>
                                <fieldset>
                                    <div class="form-card">
                                        <div class="row">
                                            <div class="col-7">
                                                <h2 class="fs-title">Tree Information</h2>
                                            </div>
                                            <div class="col-5">
                                                <h2 class="steps">Step 3 </h2>
                                            </div>
                                        </div> 
                                        <label for="pestIdentified">Pest Identified:</label>
                                        <input type="text" id="pestIdentified" name="pestIdentified" required placeholder="Pest Identified"/> 
                                        <label for="pestImage">Choose Pest Identified Image:</label>
                                        <input type="file" id="pestImage" name="pestImage" accept="image/*" required/>
                                        <label for="floweringDescription">Flowering Description:</label>
                                        <textarea id="floweringDescription" name="floweringDescription" rows="4" required placeholder="Description"></textarea>
                                        <label for="floweringImage">Choose Flowering Picture:</label>
                                        <input type="file" id="floweringImage" name="floweringImage" accept="image/*" required/>
                                    </div> 
                                    <input type="button" name="next" class="next action-button" value="Next" /> <input type="button" name="previous" class="previous action-button-previous" value="Previous" />
                                </fieldset>
                                <fieldset>
                                    <div class="form-card"/>
                                        <div class="row">
                                            <div class="col-7">
                                                <h2 class="fs-title">Tree Information</h2>
                                            </div>
                                            <div class="col-5">
                                                <h2 class="steps">Step 4</h2>
                                            </div>
                                            <label for="fruitingDescription">Fruiting Description:</label>
                                            <textarea id="fruitingDescription" name="fruitingDescription" rows="4" required placeholder="Description"></textarea> 
                                            <label for="fruitingImage">Choose Fruiting Picture:</label>
                                            <input type="file" id="fruitingImage" name="fruitingImage" accept="image/*" required/>
                                            <label for="unripeFruitDescription">Unripe Fruit Description:</label>
                                            <textarea id="unripeFruitDescription" name="unripeFruitDescription" rows="4" required placeholder="Description"></textarea>
                                            <label for="unripeFruitImage">Choose Unripe Fruit Picture:</label>
                                            <input type="file" id="unripeFruitImage" name="unripeFruitImage" accept="image/*" required/>
                                            <label for="ripeFruitDescription">Ripe Fruit Description:</label>
                                            <textarea id="ripeFruitDescription" name="ripeFruitDescription" rows="4" required placeholder="Description"></textarea>
                                            <label for="ripeFruitImage">Choose Ripe Fruit Picture:</label>
                                            <input type="file" id="ripeFruitImage" name="ripeFruitImage" accept="image/*" required/>
                                        </div>
                                        <input type="button" name="submit" class="submit action-button" value="Submit" />  <input type="button" name="previous" class="previous action-button-previous" value="Previous" />
                                </fieldset>
                            </form>
        </>
    );
}

export default TreeForm;
