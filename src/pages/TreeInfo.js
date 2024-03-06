import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Container, Row, Col, Table, Button, Card } from 'react-bootstrap';
import '../styles/tree.css'
import treeData from '../json/TreeData.json'
import NavigationBar from "../components/NavigationBar";

const TreeInfo = () => {
    const [searchParams] = useSearchParams();
    const treeId = searchParams.get('treeId');
    const [treeInfo, setTreeInfo] = useState(null);

    useEffect(() => {
        // Log the retrieved treeId for debugging
        console.log("Retrieved treeId: ", treeId);

        if (treeId && treeData[treeId]) { // Ensure treeId is not null and exists in treeData
            const info = treeData[treeId];
            setTreeInfo(info);
        } else {
            // Log a message if treeId is null or not found in treeData
            console.log("treeId is null or not found in treeData");
        }
    }, [treeId]);

    // Debugging treeInfo - conditionally log based on treeInfo's state
    useEffect(() => {
        if (treeInfo) {
            console.log("Tree Info: ", JSON.stringify(treeInfo, null, 2));
        } else {
            console.log("Tree Info is not available yet or treeId does not exist.");
        }
    }, [treeInfo]);


    console.log("Tree: " + treeInfo);

    if (!treeInfo) {
        return <div>Loading..</div>
    }

    return (
        <>
            <NavigationBar />
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 p-3 mb-2"><h2><strong>Tree: </strong>{treeInfo.name}</h2>
                    <div class="content">
                    <div class="row"> <h4><strong>Scientific Name: ({treeInfo.scientificName})</strong></h4></div>
                    <div class="row"><p><strong>Description:</strong>  {treeInfo.description}</p></div>
                    <div class="row"><p><strong>Other Names:</strong> {treeInfo.otherNames.join(', ')}</p></div>
                    <div class="row"><p><strong>Tree Cycle:</strong> {treeInfo.treeCycle}</p></div>
                    <div class="row"><p><strong>Fruiting Months:</strong> {treeInfo.fruitingMonths}</p></div>
                    <div class="row"><p><strong>Tree Status:</strong> {treeInfo.treeStatus}</p></div>
                    <div class="row"><p><strong>Tree Species:</strong> {treeInfo.treeSpecies}</p></div>
                    <div class="row"><p><strong>Fruit Colour:</strong> {treeInfo.fruitColour}</p></div>
                    <div class="row"><p><strong>Pests Identified:</strong> {Array.isArray(treeInfo.pestIdentified) ? treeInfo.pestIdentified.join(', ') : treeInfo.pestIdentified}</p></div>
                    </div>
                    </div>
                    <div class="col-sm-6 p-3 mb-2">
            <div class="text-center">Image</div>
        </div>
                </div>
                </div>

                <div class="container text-center">
                    <div class="row">
                        <div class="col-sm-6 p-3 mb-2">
                        <div class="p"><p><strong>Flowering Description:</strong> 
                        {treeInfo.floweringDescription}</p></div>
                        </div>
                        <div class="col-sm-6 p-3 mb-2">
                        <div class="p">Image</div>
                        </div>
                        </div>
                        <div class="row">
                        <div class="col-sm-6 p-3 mb-2">
                        <div class="p">Image</div>
                        </div>
                        <div class="col-sm-6 p-3 mb-2">
                        <div class="p"><p><strong>Fruiting Description:</strong> 
                        {treeInfo.fruitingDescription}</p></div>
                        </div>
                    </div>  
                </div>
                <div class="container text-center">
                    <div class="row">
                        <div class="col-sm-6 p-3 mb-2">
                        <div class="p"><p><strong>Unripe Fruit Description:</strong> 
                        {treeInfo.unripeFruitDescription}</p></div>
                        </div>
                        <div class="col-sm-6 p-3 mb-2">
                        <div class="p">Image</div>
                        </div>
                        </div>
                        <div class="row">
                        <div class="col-sm-6 p-3 mb-2">
                        <div class="p">Image</div>
                        </div>
                        <div class="col-sm-6 p-3 mb-2">
                        <div class="p"> <p><strong>Ripe Fruit Description:</strong> 
                        {treeInfo.ripeFruitDescription}</p></div>
                        </div>
                        </div>  
                </div>
            <div className="card">
                <h4 className="tree-title"><strong>Name: </strong>{treeInfo.name} ({treeInfo.scientificName})</h4>
                <p className="" ><strong>Description:</strong> {treeInfo.description}</p>
                <p><strong>Other Names:</strong> {treeInfo.otherNames.join(', ')}</p>
                <p><strong>Tree Cycle:</strong> {treeInfo.treeCycle}</p>
                <p><strong>Fruiting Months:</strong> {treeInfo.fruitingMonths}</p>
                <p><strong>Tree Status:</strong> {treeInfo.treeStatus}</p>
                <p><strong>Tree Species:</strong> {treeInfo.treeSpecies}</p>
                <p><strong>Fruit Colour:</strong> {treeInfo.fruitColour}</p>
                <p><strong>Pests Identified:</strong> {Array.isArray(treeInfo.pestIdentified) ? treeInfo.pestIdentified.join(', ') : treeInfo.pestIdentified}</p>
                <p><strong>Flowering Description:</strong> {treeInfo.floweringDescription}</p>
                <p><strong>Fruiting Description:</strong> {treeInfo.fruitingDescription}</p>
                <p><strong>Unripe Fruit Description:</strong> {treeInfo.unripeFruitDescription}</p>
                <p><strong>Ripe Fruit Description:</strong> {treeInfo.ripeFruitDescription}</p>
            </div>
        </>
        
    );
};



export default TreeInfo;

