import styled from '@emotion/styled';

export const ActorCard = styled.li`
  padding-top: 5px;
`;

export const ActorList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin-top: 20px;
  list-style: none;
`;

export const ActorItem = styled.li`
  border-radius: 10px;
  box-shadow: rgb(123 212 235) 0px 0px 10px 1px;
  transition: all 350ms ease;
  width: 180px;
  list-style: none;

  &:hover {
    scale: 1.05;
  }
`;

export const ActorImg = styled.img`
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  text-align: center;
  margin: 0 auto;
  padding-bottom: 15px;
  width: 80%;
`;
