import styled from "@emotion/styled";

export const List = styled.ul`
  padding: 0;
  margin: 0 0 100px;
  max-width: 70%;
  display: flex;
  flex-direction: column;
  margin-left: 10%;
`;

export const ListItem = styled.li`
  display: block;
  padding: 3rem 5rem;
  background-color: #D6ECDF;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-top-width: 0;
  &:first-of-type {
    border-top-width: 1px;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }
  &:last-of-type {
    border-bottom-right-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }
}
`;

export const ListItemWithLink = styled.li`
  display: block;
  > a {
    display: block;
    color: #2C1831;
    background-color: #fff;
    text-decoration: none;
    padding: 3rem 5rem;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-top-width: 0;
    &:hover {
      color: #2C1831;
      background-color: #D6ECDF;
      border-color: #D6ECDF;
      cursor: pointer;
    }
  }
  &:first-of-type {
    a {
      border-top-width: 1px;
      border-top-left-radius: 0.25rem;
      border-top-right-radius: 0.25rem;
    }
  }
  &:last-of-type {
    a {
      border-bottom-right-radius: 0.25rem;
      border-bottom-left-radius: 0.25rem;
    }
  }
`;