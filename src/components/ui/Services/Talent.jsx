import React from 'react'

import styled from 'styled-components';


const Talent = ({ img, title, description }) => {
    return (
        <>
            <StyledWrapper>
                <div className="one-card">

                    <div className="left-img"> <img src={img} alt="" /> </div>
                    <div className="right-text">
                        <p className="sub-head"><b> {title}</b></p>
                        <p className="sm">
                            {description}
                        </p>
                    </div>
                </div>
            </StyledWrapper>
        </>
    )
}
const StyledWrapper = styled.div`
.one-card{
display:flex;
width: 33%;
}  
// .left-img {width: 300px;}

.right-text
  {
  display:flex;
  gap:20px;
  flex-direction: column;
  }
  .sub-head p{
  font weight: 500;
  font-size: 20px;}
    // img{height:50px; width: 50px;}
`;

export default Talent