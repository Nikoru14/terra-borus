import React, { useState } from 'react';
import NavigationBar from "../components/NavigationBar";
import addTreeCss from '../styles/addtree.module.css';

class AddTree extends React.Component {
  
  render() {
    return (
        <>
        <NavigationBar />
      <div className={addTreeCss.container}>
          <div className={addTreeCss.card3}>
            <h1 className={addTreeCss.addtree}>Add Tree</h1>
            <form>
            <div className={addTreeCss['form-row']}>
                    <div className="col-md-6">
                    <div className={addTreeCss.formGroup}>
                        <label for="inputSpecies">Choose Species</label>
                        <select id="inputSpecies" className="form-control">
                          <option selected>Choose...</option>
                          <option>...</option>
                        </select>
                      </div></div>
                      <div className="col-md-6">
                      <div className={addTreeCss.formGroup}>
                        <label for="inputStatus">Choose Status</label>
                        <select id="inputStatus" className={addTreeCss['form-control']} >
                          <option selected>Choose...</option>
                          <option>...</option>
                        </select>
                      </div></div>
                        <div className="col-md-6">
                        <div className={addTreeCss.formGroup}>
                            <label for="inputTreeName">Name of Tree</label>
                            <select id="inputTreeName" className={addTreeCss['form-control']} >
                              <option selected>Choose...</option>
                              <option>...</option>
                            </select>
                          </div></div>
                          <div className="col-md-6">
                          <div className={addTreeCss.formGroup}>
                            <label for="inputPlanterName">Name of Planter</label>
                            <input type="name" className={addTreeCss['form-control']} id="name" aria-describedby="name" placeholder="Name"></input>
                          </div></div>
                         <div className="col-md-4">
                         <div className={addTreeCss.formGroup}>
                            <label for="inputlongitude">Longitude</label>
                            <input className={addTreeCss['form-control']}  id="longitude" rows="1"></input>
                         </div></div>
                         <div className="col-md-4">
                         <div className={addTreeCss.formGroup}>
                            <label for="inputlatitude">Latitude</label>
                            <input className={addTreeCss['form-control']}  id="latitude" rows="1"></input>
                         </div></div>
                         <div className="col-md-4">
                         <div className={addTreeCss.formGroup}>
                                <label className="control-label" for="date">Date</label>
                                <input type="datetime-local" className={addTreeCss['form-control']} id="date" name="date" placeholder="MM/DD/YYY"/>
                         </div></div>
                          </div>
                <div className="d-flex justify-content-center">
                <button type="submit" className={addTreeCss.btn}>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default AddTree;
