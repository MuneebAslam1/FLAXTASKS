import React from 'react';
import styled from 'styled-components';

export const Rollingcards = ({ Xnumber, Xtitle, Xdesc, image }) => { // Accept svgs as a prop
    return (
        <StyledWrapper>
            <div className="cards">
                <div className="card red">
                    <h1 className="tip">
                        {image && image.endsWith(".png") && (
                            <img src={image} alt={Xtitle} className="w-12 h-12 inline-block" />
                        )}
                        {Xnumber !== null && Xnumber !== undefined && <span>{Xnumber}</span>}
                    </h1>
                    <h3 className="second-text">
                        <b>{Xtitle}</b> <br /> {Xdesc}
                    </h3>
                </div>
            </div>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
  .cards {
  margin-top: 8%;
  margin-bottom: 4%;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .cards .red {
    background-color:rgba(95, 95, 95, 0.13);
  }

  h1.tip{
  padding: 7px 1px 20px 1px;}
  .cards .card {
  padding: 1px 5px 20px 18px;
    display: flex;
   
    flex-direction: column;
    text-align: left;
    // height: 220px;
    width: 270px;
    border-radius: 3px;
    // color: white;
    cursor: pointer;
    transition: 400ms;
  }

  .cards .card p.tip {
    font-size: 1em;
    font-weight: 500;
  }

  .cards .card p.second-text {
    font-size: .7em;
    line-height: 0.75;
  }

  .cards .card:hover {
    transform: scale(1.1, 1.1);
  }

  .cards:hover > .card:not(:hover) {
    filter: blur(10px);
    transform: scale(0.9, 0.9);
  }`;

