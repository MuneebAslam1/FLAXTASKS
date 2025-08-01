import React from 'react';
import styled from 'styled-components';

const teamcard = ({ position, details }) => {
  return (
    <StyledWrapper>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <p className="title">{position}</p>
            <spa>Learn more -</spa>
          </div>
          <div className="flip-card-back">
            {/* <p className="title">BACK</p> */}
            <span>{details}</span>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .flip-card {
  background-color: transparent;
  width: 190px;
  height: 254px;
  perspective: 1000px;
  font-family: sans-serif;
}

.title {
  font-size: 1.5em;
  font-weight: 900;
  text-align: center;
  margin: 0;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  box-shadow: 0 8px 14px 0 rgba(0,0,0,0.2);
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border: 1px solid #0077b6;
  border-radius: 1rem;
}

.flip-card-front {
  background: linear-gradient(120deg, #b3e0ff 60%, #99ccff 88%, 
     #80bfff 40%, #3399ff 48%);
  color: #005f99;
}

.flip-card-back {
  background: linear-gradient(120deg, #66b3ff 30%, #0077b6 88%, 
     #99ccff 40%, #3399ff 78%);
  color: white;
  transform: rotateY(180deg);

  }`;

export default teamcard;
