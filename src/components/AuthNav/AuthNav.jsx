import { StyledLink, Container } from './Styled.AuthNav';

export const AuthNav = () => {
  return (
    <Container>
      <StyledLink to="/register">Register</StyledLink>
      <StyledLink to="/login">Log In</StyledLink>
    </Container>
  );
};
