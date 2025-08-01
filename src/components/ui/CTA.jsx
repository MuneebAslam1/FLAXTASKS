import { useState, useEffect } from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";

const CTA = () => {
    const words = ["Accounting", "IT", "Finance", "Auditing", "Developing", "Designing", "Consulting"];
    const [currentWord, setCurrentWord] = useState(words[0]);
    let index = 0;

    useEffect(() => {
        const interval = setInterval(() => {
            index = (index + 1) % words.length;
            setCurrentWord(words[index]);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <StyledWrapper>
            <div className='container '>
                <div className="outer">
                    <div className="card">
                        <div className="content">
                            <h1 className="title">
                                Hire the <span className="highlight">{currentWord}</span>
                                <br /> expert you need
                            </h1>
                            <p className="description">
                                Your one-stop solution for all your accounting and finance needs. We provide expert advice and services to help you grow your business.
                            </p>
                            <button className="button" >  <Link to="/contact"> Find Expert </Link> </button>
                        </div>
                    </div>
                </div>
            </div>
        </StyledWrapper>
    );
};

export default CTA;

const StyledWrapper = styled.div`

.container {
color: black;
    // display: flex;
    align-items: center;
    margin-top: 7%;
    margin-bottom: 7%;
    justify-content: center;
    min-height: 58vh;
    background: var(--cardcolor);
    border-radius: 8px;
}

.outer {
    margin-top:30px;
    margin-bottom:30px;


    padding: 20px;
    border-radius: 10px;
}

.card {
    background-color: #D5DEE9;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    padding: 40px;
    text-align: center;
    // border: 1px solid var(--brandcolor);
}

.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}

.title {
    font-size: 40px;
    font-weight: 500;
    color: Black;

}

.highlight {
    background: #2C51CD;
    -webkit-background-clip: text;
    color: transparent;
    font-weight: 500;
}

.description {
    font-size: 18px;
    // color: #ddd;
    max-width: 600px;
}

.button {
    background-color: var(--brandcolor);
    color: white;
    padding: 12px 24px;
    font-size: 18px;
    border-radius: 30px;
    border: none;
    cursor: pointer;
    box-shadow: 0px 4px 10px rgba(34, 61, 136, 0.5);
    transition: background 0.3s;
}

.button:hover {
    background-color:rgb(18, 50, 119);
}



@media screen and (max-width: 786px) {
    .title{
      line-height: 1.05;
      margin-bottom: 8px;
    }
    .points{
        flex-direction: column-reverse;
        align-items: center;
    }
    .left-side{width: 80%;}
    .right-side{width: 70%;}
   }


`;