import React from "react";
import styled from "styled-components";
import Description from "./Description";

const FooterContainer = styled.div`
  height: 10rem;
  width: 100%;
  display: flex;
  justify-content: ${(props) => props.pos.justifyContent || 'center'};
  align-items: ${(props) => props.pos.alignItems};
`;


const Footer = (props) => {
                    const{pos}=props
                    return ( <FooterContainer
                    pos = {pos}
                    
                    >
                    
                    <span>Footer</span>
                    <Description></Description>
                    
                    </FooterContainer> );
}
 
export default Footer;