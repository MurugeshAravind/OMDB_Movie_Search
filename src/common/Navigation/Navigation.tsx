import styled from 'styled-components';

const Nav = styled.nav`
  font-size: 1.5em;
  text-align: center;
  color: black;
`;

const Header = styled.h1`
  color: silver;
`;

const Navigation = () => {
  return (
    <Nav>
      <Header>OMDB Search</Header>
    </Nav>
  );
};
export default Navigation;
