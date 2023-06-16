import styled from "styled-components";

export const NavbarComponentMain = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 100%;
`;

export const DFlexBetween = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UnorderedList = styled.ul`
  display: flex;
  border-color: black;
  list-style: none;

  a {
    align-items: center;
    text-decoration: none;
    color: #000000;
  }

  li {
    margin-left: 20px;
  }
`;
