import styled from 'styled-components';

export const Container = styled.div
`
    width: 950px; 
    margin: auto;
    padding: 10px 10px;   
    box-sizing: border-box;
`;

export const Title = styled.div `
    text-transform: uppercase;
    padding-bottom: 2em;
`;

export const Content = styled.div `    
    padding-top: 1em;
`;

export const ButtonPanel = styled.div `    
    padding-bottom: 1em;
    text-align: right;
    display: flex;
`;

export const ButtonPanelLeft = styled.div `        
    text-align: left;
    flex: 1;
`;

export const ButtonPanelRight = styled.div `        
    text-align: right;
    flex: 1;
`;