import React from 'react';
import styled from 'styled-components';

export const Title = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="content">
          <h2 className="headings">Driving Your Business Forward with Accuracy & Technology</h2>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
      background-color: white;
    position: relative;
    display: flex;
    // width: 420px;
    border-radius: 14px;
    line-height: 0.5;
    transition: all 0.64s cubic-bezier(0.23, 1, 0.32, 1);
  }
  .content {
    padding: 20px;
    border-radius: 24px;
    color: #000000;
    z-index: 1;
    transition: all 0.64s cubic-bezier(0.23, 1, 0.32, 1);
  }
  .card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background-color: var(--brandcolor);
    border-radius: inherit;
    height: 100%;
    width: 100%;
    opacity: 0;
    transform: skew(-24deg);
    clip-path: circle(0% at 50% 50%);
    transition: all 0.64s cubic-bezier(0.23, 1, 0.32, 1);
  }
  .content .headings {
    font-weight: 600;
    font-size: 30px;
    line-height: 1.0;
    z-index: 1;
  }
 
  .card:hover::before {
    opacity: 1;
    transform: skew(0deg);
    clip-path: circle(140.9% at 0 0);
  }
  .card:hover .content {
    color: #ffffff;
  }`;

