import React from 'react';
import daImage from './da.png'; 

function CenteredImage() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
      <img src={daImage} alt="Description" style={{ maxWidth: '200%', height: 'auto', borderRadius:'20px' }} />
    </div>
  );
}

export default CenteredImage;


