import React, { useState } from 'react';
import NavigationBar from "../components/NavigationBar";
import '../styles/addtree.css';

class AddTree extends React.Component {
  render() {
    return (
        <>
        <NavigationBar />
      <div className="container">
          <div className="card3">
            <h1 className='addtree'>Add Tree</h1>
            <form>
            <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputSpecies">Choose Species</label>
                        <select id="inputSpecies" class="form-control">
                          <option selected>Choose...</option>
                          <option>...</option>
                        </select>
                      </div>
                      <div class="form-group col-md-6">
                        <label for="inputStatus">Choose Status</label>
                        <select id="inputStatus" class="form-control">
                          <option selected>Choose...</option>
                          <option>...</option>
                        </select>
                      </div>
                        <div class="form-group col-md-6">
                            <label for="inputTreeName">Name of Tree</label>
                            <select id="inputTreeName" class="form-control">
                              <option selected>Choose...</option>
                              <option>...</option>
                            </select>
                          </div>
                          <div class="form-group col-md-6">
                            <label for="inputPlanterName">Name of Planter</label>
                            <input type="name" class="form-control" id="name" aria-describedby="name" placeholder="Name"></input>
                          </div>
                         <div class="form-group col-md-4">
                            <label for="inputlongitude">Longitude</label>
                            <input class="form-control" id="longitude" rows="1"></input>
                         </div>
                         <div class="form-group col-md-4">
                            <label for="inputlatitude">Latitude</label>
                            <input class="form-control" id="latitude" rows="1"></input>
                         </div>
                         <div class="form-group col-md-4">
                                <label class="control-label" for="date">Date</label>
                                <input type="datetime-local" class="form-control" id="date" name="date" placeholder="MM/DD/YYY"/>
                         </div>
                          </div>
              <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default AddTree;
