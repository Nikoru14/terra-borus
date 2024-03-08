import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TreeData from '../json/TreeData.json'; // Update the path as needed based on your file structure

// SortButtons component, assuming no changes from previous implementation
const SortButtons = ({ onSort }) => {
    const buttonStyle = {
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px',
        margin: '4px 2px',
        borderRadius: '12px',
        cursor: 'pointer'
    };

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <button style={buttonStyle} onClick={() => onSort('all')}>
                All
            </button>
            <button style={buttonStyle} onClick={() => onSort('forest')}>
                Forest Trees
            </button>
            <button style={buttonStyle} onClick={() => onSort('fruit')}>
                Fruit Trees
            </button>
        </div>

        
    );
};

// The individual card component
const Card = ({ name, description, imgUrl, buttonUrl }) => {
    return (
        <div style={{ width: '500px', margin: '10px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' }}>
            <div className="grid-container">
                <div><img src={imgUrl} className="grid1" alt={name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} /></div>
                <div className="grid2">
                    <h4>{name}</h4>
                </div>
                <div className="grid3" style={{ maxHeight: '100px', overflow: 'hidden', fontSize:'12px'}}>
                    <p style={{ margin: 0 }}>{description}</p>
                </div> 
                <div className='grid4'>
                    <Link to={`/TreeInfo?treeId=${buttonUrl}`} className="button_view" role="button">Read More</Link>
                </div>
            </div>
        </div>
    );
};



// The list component that renders the cards
const CardList = ({ cards }) => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {cards.map(card => (
                <Card key={card.id} name={card.name} description={card.description} imgUrl={card.imgUrl} buttonUrl={card.id} />
            ))}
        </div>
    );
};

const TreeList = () => {
    // Convert TreeData from an object to an array and pick the first image
    const treeArray = Object.keys(TreeData).map(key => ({
        id: key,
        ...TreeData[key],
        imgUrl: TreeData[key].imgUrl[0] // Using the first image for display
    }));

    const [cards, setCards] = useState(treeArray);

    // Add sorting logic here as needed for your application
    const handleSort = (type) => {
        // This is a placeholder function
        let sortedData = cards;
        // Implement sorting logic based on type and update sortedData accordingly
        setCards(sortedData);
    };

    return (
        <>
            <SortButtons onSort={handleSort} />
            <CardList cards={cards} />
        </>
    );
};

export default TreeList;
