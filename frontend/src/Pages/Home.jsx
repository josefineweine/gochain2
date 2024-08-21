import React from 'react';

export const Home = () => {
  return (
    <main className="content">
      <h1 className="title">Go-Chain</h1>
      <div className="description">
        <p>
          Welcome to Go-Chain2. 
        </p>
        <div className="image-container">
          <img src={goChainImage} alt="Go-Chain" />
        </div>
      </div>
    </main>
  );
};
