import { useAuth } from 'hooks/useAuth';
import { StyledLink, NavContainer } from './Styled.Nav';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavContainer>
      <StyledLink to="/">Home</StyledLink>
      {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
    </NavContainer>
  );
};
