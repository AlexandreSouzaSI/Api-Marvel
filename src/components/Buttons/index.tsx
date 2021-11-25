import styled from "styled-components";
import { typography, TypographyProps } from "styled-system";

type TextProps = TypographyProps;

export const Button = styled.button<TextProps>`
  width: 200px;
  height: 35px;
  border-radius: 5px;
  box-shadow: 1px 1px 5px 1px;
  cursor: pointer;
  font-weight: bold;
  font-size: 20px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }

  ${typography}
`