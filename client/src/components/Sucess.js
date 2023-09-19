import React from 'react';
import './Success.css'; 

const Success = () => {
  const imageUrl = 'https://momentumacademy.net/wp-content/uploads/2020/05/Paymentsuccessful21.png'; 

  return (
    <div className='center-image' >
      <img src={imageUrl} alt="Success" />
    </div>
  );
}

export default Success;
