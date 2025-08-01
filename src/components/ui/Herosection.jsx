import React from 'react'
import styled from 'styled-components';

const Herosection = ({title, image, description}) => {
  return (
    <StyledWrapper>
        <div className='herosection'>

<div className='title'>
                    <h1>{title}</h1>
                    <br /> <p>{description}</p>
                 
                </div>
                <div className='imagess'>
                    <img src={image} alt="Banner Image" />
                </div>
        </div>

    </StyledWrapper>
  )
}
const StyledWrapper = styled.div`

.herosection{
        margin: 10% 30px 150px 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;
}



@media (max-width: 741px) {
   
    .herosection{
        margin: 10% 30px 0px 30px;
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        justify-content: center;
        gap: 15px;
}




@media (min-width: 941px) and (max-width: 1024px){
   
.imagess image{
    max-width: 784px;
    max-height: 764px;
}
}

@media (min-width: 741px) and (max-width: 940px){

.imagess image{
    // max-width: 584px;
}
}






`;

export default Herosection
