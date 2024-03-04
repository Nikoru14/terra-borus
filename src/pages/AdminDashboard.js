import React, { useRef, useState } from 'react';
import NavigationBar from "../components/NavigationBar";
import QRCode from 'react-qr-code';
import treeData from '../json/TreeData.json'; // Adjust the import path as needed

const AdminDashboard = () => {
    const dataArray = Object.entries(treeData).map(([id, details]) => ({
        id,
        ...details,
    }));

    const [selectedTreeForQR, setSelectedTreeForQR] = useState(null);
    const qrRef = useRef(null);
    // Function to generate the QR code URL dynamically
    const handleQRCodeGenerate = (treeId) => {
        const qrValue = `${window.location.origin}/TreeInfo?treeId=${treeId}`;
        setSelectedTreeForQR(qrValue);
    };

    const downloadQRCode = () => {
        const svg = qrRef.current.querySelector('svg');
        const svgData = new XMLSerializer().serializeToString(svg);
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const img = new Image();
        const svgSize = svg.getBoundingClientRect();
        const borderSize = 10;

        canvas.width = svgSize.width + borderSize * 2;
        canvas.height = svgSize.height + borderSize * 2;

        img.onload = () => {
            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.drawImage(img, borderSize, borderSize, svgSize.width, svgSize.height);

            const pngFile = canvas.toDataURL("image/png");

            const downloadLink = document.createElement('a');
            downloadLink.href = pngFile;
            downloadLink.download = 'QRCode.png';
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
        };

        img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgData)));
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
                        <div ref={qrRef}>
                            <QRCode value={selectedTreeForQR} />
                        </div>
                        <button onClick={downloadQRCode}>Save as PNG</button>
                    </div>
                )}
            </div>
        </>
    );
};

export default AdminDashboard;
