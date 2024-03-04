import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import treeData from '../json/TreeData.json'

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
        <div>
            <h2><strong>Tree: </strong>{treeInfo.name} ({treeInfo.scientificName})</h2>
            <p><strong>Description:</strong> {treeInfo.description}</p>
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
    );
};


export default TreeInfo;

