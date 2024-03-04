import React, { useState } from 'react';
import NavigationBar from "../components/NavigationBar";
import QRCode from 'react-qr-code';
import treeData from '../json/TreeData.json'; // Adjust the import path as needed

const AdminDashboard = () => {
    const dataArray = Object.entries(treeData).map(([id, details]) => ({
        id,
        ...details,
    }));

    const [selectedTreeForQR, setSelectedTreeForQR] = useState(null);

    // Function to generate the QR code URL dynamically
    const handleQRCodeGenerate = (treeId) => {
        const qrValue = `${window.location.origin}/TreeInfo?treeId=${treeId}`;
        setSelectedTreeForQR(qrValue);
    };

    return (
        <>
            <NavigationBar />
            <div style={{ margin: '20px' }}>
                <h2>Tree Data</h2>
                <table border="1" style={{ width: '100%', textAlign: 'left' }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Scientific Name</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataArray.map((tree) => (
                            <tr key={tree.id}>
                                <td>{tree.id}</td>
                                <td>{tree.name}</td>
                                <td>{tree.scientificName}</td>
                                <td>{tree.description}</td>
                                <td>
                                    <button onClick={() => handleQRCodeGenerate(tree.id)}>Generate QR Code</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {selectedTreeForQR && (
                    <div style={{ marginTop: '20px', textAlign: 'center', padding: '16px', background: 'white' }}>
                        {/* Display the QR Code */}
                        <QRCode value={selectedTreeForQR} />
                        {/* Optionally, display the URL below the QR code for reference */}
                        <p>QR Code for Tree ID: {selectedTreeForQR.split('=')[1]}</p>
                    </div>
                )}
            </div>
        </>
    );
};

export default AdminDashboard;
