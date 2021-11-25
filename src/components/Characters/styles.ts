import styled from "styled-components";
import { typography, TypographyProps } from "styled-system";

interface ThumbnailData {
  thumbnail: {
    path: string;
    extension: string;
  };
}

export const Container = styled.main`
  display: flex;
  flex-wrap: wrap;

  width: 100%;
  height: 100%;
`;

export const CardList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

const urlImg = (props: ThumbnailData) => 
`${props.thumbnail.path}.${props.thumbnail.extension}`

export const Card = styled.div`
  background: #f1f1f1;
  height: 450px;
  width: 300px;
  margin: 10px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.3);

  h2, p {
    padding: 5px;
    text-align: justify;
  }

  div#img {
    height: 400px;
    width: 100%;
    background: url(${urlImg}) no-repeat center;
    background-size: cover;
    transition: all 3s;
  }

  &:hover {
    div#img {
      height: 200px;
    }
  }
`;

type TextProps = TypographyProps;

export const ButtonMore = styled.div<TextProps>`
  background: #f1f1f1;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  cursor: pointer;
  box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.3);
  margin: 20px auto;
  padding: 0 50px;
  border-radius: 5px;
  transition: all 0.3s;

  &:hover {
    background-color: red;
  }

  svg {
    margin: 0 8px;
  }

  ${typography}
`

export const Name = styled.p`
  font-size: 18px;
  font-weight: bold;
`