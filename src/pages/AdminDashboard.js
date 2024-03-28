import React, { useRef, useState } from 'react';
import QRCode from 'react-qr-code';
import treeData from '../json/TreeData.json'; // Adjust the import path as needed
import { Container } from 'react-bootstrap';

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
        <>  <Container>
            <div className="container" ><br/><br/><br/>
            <h2 className='overview13'>Tree Data</h2>
                <div className="row justify-content-start">
                    <div className="col" id='qrtable'>
                    <table className="table table-striped table-hover" border="1" style={{ width: '100%', textAlign: 'justify' }}>
                    <thead className="headtable" id='headtable'>
                        <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Scientific Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider"> 
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
                    </div>
                    <div className="col d-flex flex-column align-items-center">
                        {selectedTreeForQR && (
                            <div className='card1 text-center'>
                                <div className='qr' ref={qrRef}>
                                    <QRCode value={selectedTreeForQR} />
                                </div>
                                <div>
                                    <button className='btn-secondary' onClick={downloadQRCode}> <i className='fa-solid fa-download' /> Save as PNG</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            </Container>
        </>
    );
};

export default AdminDashboard;
