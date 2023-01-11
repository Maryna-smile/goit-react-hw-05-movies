import styled from '@emotion/styled';

export const MovieList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  list-style: none;
`;

export const MoviePoster = styled.img`
  width: 280px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  margin-bottom: 15px;
`;

export const MovieTitle = styled.p`
  text-align: center;
  margin-bottom: 20px;
`;

export const MovieItem = styled.li`
  border-radius: 10px;
  box-shadow: rgb(123 212 235) 0px 0px 10px 1px;
  transition: all 350ms ease;

  &:hover {
    scale: 1.05;
  }
`;

