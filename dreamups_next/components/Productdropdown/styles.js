import styled from "styled-components"

export const ProductItem = styled.div`
  height:80px;
  font-family: 'Open Sans';
  font-weight: regular;
  font-size: 20px;
  color: #000;
  display: flex;
  align-items: right;
  text-decoration: none;
  text-align: right;
  height:150%;
  margin-right: 6px;
  position: absolute right;
  cursor: pointer;
  &.active {
    border-bottom: 3px solid #01bf71;
  }
`