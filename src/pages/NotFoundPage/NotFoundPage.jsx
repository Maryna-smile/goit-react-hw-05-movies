import React from 'react';
import NotFound from '../../images/404.png';
import { Button, FlexWrapper, NotFoundImg, Text } from './NotFoundPage.styled';
import { useLocation } from 'react-router-dom';

export default function NotFoundPage() {
  const location = useLocation();
  return (
    <>
      <NotFoundImg src={NotFound} alt="Page 404" />
      <FlexWrapper>
        <Text>Page not found, but don`t worry, just </Text>
        <Button to={location.state?.from ?? '/'}>press here</Button>
      </FlexWrapper>
    </>
  );
}
