import styled from '@emotion/styled';

export const MovieSearch = styled.input`
  width: 60%;
  max-width: 350px;
  height: 30px;
  border-radius: 5px;
  background-color: #f5f5f5;
  padding-left: 10px;
  margin-right: 10px;
  outline: none;
  height: 30px;
`;

export const MovieList = styled.ul`
  margin-top: 5%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  list-style: none;
`;

export const MovieItem = styled.li`
  border-radius: 10px;
  box-shadow: rgb(123 212 235) 0px 0px 10px 1px;
  transition: all 350ms ease;

  &:hover {
    scale: 1.05;
  }
`;

export const MoviePoster = styled.img`
  width: 280px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  margin-bottom: 15px;
`;

export const MovieTitle = styled.p`
  text-align: center;
  margin: 0 auto;
  margin-bottom: 20px;
  max-width: 250px;
`;

export const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const SearchButton = styled.button`
  display: inline-block;
  max-width: 150px;
  text-align: center;
  text-decoration: none;
  color: #7bd4eb;
  font-size: 20px;
  font-weight: 500;
  margin: 5px;
  padding: 5px;
  border-radius: 10px;
  box-shadow: 0 0 10px 1px #7bd4eb;
  background-color: #2c5d63;
`;
