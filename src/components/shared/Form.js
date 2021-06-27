import styled from "@emotion/styled";

export const Input = styled.input`
  height: calc(1.5em + 1rem + 2px);
  padding: 0.5rem 1rem;
  margin: 2rem 0;
  font-size: 2.4rem;
  line-height: 1.5;
  border-radius: 0.3rem;
  display: block;
  width: 60%;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  margin-left: 10%;
`;

export const Button = styled.button`
  color: #fff;
  background-color: #29409A;
  border-color: #29409A;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  border: 1px solid transparent;
  padding: 0.5rem 1rem;
  font-size: 2rem;
  line-height: 1.5;
  height: calc(1.5em + 1rem + 8px);
  border-radius: 0.25rem;
  user-select: none;
  &:hover {
    cursor: pointer;
    background-color: #54335B;
    border-color: #54335B;
  }
  &:active {
    background-color: #0062cc;
    border-color: #005cbf;
  }
`;