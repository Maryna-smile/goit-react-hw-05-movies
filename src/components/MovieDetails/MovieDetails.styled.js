import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
  display: inline-block;
  cursor: pointer;
  margin-right: auto;
  margin-top: 55px;
  max-width: 150px;
  text-align: center;
  text-decoration: none;
  color: #7bd4eb;
  font-size: 25px;
  font-weight: 500;
   padding: 10px 15px;
  border-radius: 10px;
  box-shadow: 0 0 15px 1px #7bd4eb;
`;

export const MoviePoster = styled.img`
  width: 400px;
  height: 650px;
  border-radius: 10px;
   margin-bottom: 15px;
   box-shadow: 0 0 10px 1px #7bd4eb;
`;

export const MovieTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 15px;
`;

export const MovieGenres = styled.ul`
 display: flex;
 gap: 10px;
`;

export const MovieText = styled.p`
margin-bottom: 10px;
`;

export const MovieCaptions = styled.h3`
margin-top: 15px;
margin-bottom: 10px;
`;

export const FlexGeneral = styled.div`
display: flex;
flex-direction: column;

`;

export const FlexWrapper = styled.div`
display: flex;
gap: 20px;
`;

export const InnerUpFlex = styled.div`
display: flex;
flex-direction: column;
`;

export const InnerDownFlex = styled.div`
display: flex;
justify-content: flex-start;
gap: 25px;
`;


export const ExtraButton = styled(Link)`
  display: inline-block;

  margin-top: 15px;
  max-width: 150px;
  text-align: center;
  text-decoration: none;
  color: #7bd4eb;
  font-size: 25px;
  font-weight: 500;
   padding: 10px 15px;
  border-radius: 10px;
  box-shadow: 0 0 15px 1px #7bd4eb;
`;