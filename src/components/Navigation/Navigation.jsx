import { NavStyled, LinkNav, NavWrapper } from './Navigation.styled';

export const Navigation = () => {
  return (
    <NavWrapper>
      <NavStyled>
        <li>
          <LinkNav to="/" end>
            Home
          </LinkNav>
        </li>
        <li>
          <LinkNav to="tweets">Tweets</LinkNav>
        </li>
      </NavStyled>
    </NavWrapper>
  );
};
