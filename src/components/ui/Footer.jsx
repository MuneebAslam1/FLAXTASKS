import React from 'react';
import styled from 'styled-components';

// Styled Components
const FooterContainer = styled.footer`
  border-radius: 12px;
  background-color: #13141a;
  color: white;
  padding: 2.5rem 2rem;
  font-family: 'Arial', sans-serif;
  margin-bottom: 20px;
  transition: transform 0.3s ease;
  
  &:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterLinksWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 2.5rem;
`;

const LinkColumn = styled.div`
  margin-bottom: 1.5rem;
  min-width: 160px;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  display: block;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  opacity: 0.9;
  transition: all 0.2s ease;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 1px;
    bottom: -2px;
    left: 0;
    background-color: white;
    transition: width 0.3s ease;
  }
  
  &:hover {
    opacity: 1;
    transform: translateX(3px);
    
    &:after {
      width: 100%;
    }
  }
`;

const ColumnTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin: 1.5rem 0;
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const SocialContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SocialText = styled.span`
  margin-right: 1rem;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 600;
`;

const SocialIconsWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
    transform: scale(1.15);
    border-color: rgba(255, 255, 255, 0.5);
    color: #fff;
  }
`;

const CopyrightText = styled.div`
  font-size: 0.8rem;
  opacity: 0.7;
  text-align: center;
  margin-top: 1rem;
  transition: opacity 0.2s ease;
  
  &:hover {
    opacity: 1;
  }
`;

const ContactInfo = styled.div`
  text-align: right;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const ContactTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const ContactText = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  opacity: 0.9;
  margin-bottom: 0.5rem;
  transition: opacity 0.2s ease;
  
  a {
    color: white;
    text-decoration: none;
    transition: all 0.2s ease;
    position: relative;
    
    &:after {
      content: '';
      position: absolute;
      width: 0;
      height: 1px;
      bottom: -2px;
      left: 0;
      background-color: white;
      transition: width 0.3s ease;
    }
    
    &:hover {
      opacity: 1;
      
      &:after {
        width: 100%;
      }
    }
  }
  
  &:hover {
    opacity: 1;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLinksWrapper>
          <LinkColumn>
            <ColumnTitle>FLAXTASKS</ColumnTitle>
            <FooterLink href="#services">Services</FooterLink>
            <FooterLink href="/contact">Contact Us</FooterLink>
            <FooterLink href="/about" target='blank'>About Us</FooterLink>
          </LinkColumn>
          
          <LinkColumn>
            <ColumnTitle>About Us</ColumnTitle>
            <FooterLink href="#testimonial">Testimonials</FooterLink>
            <FooterLink href="#TermsOfServices">Terms Of Services</FooterLink>
            <FooterLink href="#FAQs">FAQs</FooterLink>
          </LinkColumn>
          
          <LinkColumn>
            <ColumnTitle>Follow Us</ColumnTitle>
            <SocialIconsWrapper>
              <SocialIcon href="#" aria-label="Facebook">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 320 512">
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="#" aria-label="Instagram">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 448 512">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="https://www.linkedin.com/company/flaxtasks/" target='blank' aria-label="LinkedIn">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 448 512">
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                </svg>
              </SocialIcon>
            </SocialIconsWrapper>
          </LinkColumn>
          
          <LinkColumn>
            <ContactTitle>Contact Us</ContactTitle>
            <ContactText><a href="mailto:info@flaxtasks.com">info@flaxtasks.com</a></ContactText>
            <br />
            <ContactText>
              SF 211, Divine Mega Plaza<br />
              Airport Road, Lahore Cantt<br />
              Pakistan
            </ContactText>
          </LinkColumn>
        </FooterLinksWrapper>
        
        <Divider />
        
        <CopyrightText>
          © {new Date().getFullYear()} FlaxTasks. All rights reserved.
        </CopyrightText>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;