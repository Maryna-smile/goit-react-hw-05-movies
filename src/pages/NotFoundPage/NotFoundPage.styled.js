import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
  display: inline-block;
  max-width: 150px;
  text-align: center;
  text-decoration: none;
  color: #7bd4eb;
  font-size: 25px;
  font-weight: 500;
  margin: 10px;
  padding: 10px 15px;
  border-radius: 10px;
  box-shadow: 0 0 15px 1px #7bd4eb;
`;

export const NotFoundImg = styled.img`
  text-align: center;
  width: 25%;
  margin: 50px auto;
`;

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 50px auto;
`;

export const Text = styled.p`
  font-size: 25px;
`;
