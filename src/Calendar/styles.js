import { css } from "@emotion/core";
import styled from "@emotion/styled";

const theme = {
  main: "white",
  hover: "rgb(128, 232, 224)",
  selected: "rgb(0, 166, 153)",
  selectedTemp: "rgb(0, 166, 153)",
  disabled: "rgb(202, 204, 205)",
  date: "rgb(72, 72, 72)",
  border: "rgb(228, 231, 231)"
};

const GlobalStyle = css`
  body {
    font-family: arial;
    text-align: center;
  }
`;

const CalendarStyled = styled.div`
  width: 400px;
  margin: 100px auto;
`;

const ButtonNavStyled = styled.button`
  float: ${props => props.float || "left"};
  background: none;
  border: 1px solid lightgray;
  padding: 10px;
  cursor: pointer;

  :focus {
    outline: none;
    border: 1px solid;
  }
`;
const MonthStyled = styled.h2`
  display: inline-block;
`;

const ContentStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  width: 100%;
`;

const CellDayWeek = styled.div`
  color: ${theme.date};
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;

  ::before {
    content: "";
    padding-bottom: 100%;
  }
`;

const CellStyled = styled.div`
  background: ${props =>
    (props.selected && theme.selected) ||
    (props.selectedTemp && theme.selectedTemp) ||
    theme.main};
  color: ${props => (props.disabled && theme.disabled) || theme.date};
  outline: 1px solid ${theme.border};
  display: flex;
  cursor: pointer;
  overflow: hidden;
  align-items: center;
  justify-content: center;

  ::before {
    content: "";
    padding-bottom: 100%;
  }

  :hover {
    background: ${props => !props.selected && theme.hover};
  }
`;

export {
  GlobalStyle,
  CalendarStyled,
  ButtonNavStyled,
  MonthStyled,
  ContentStyled,
  CellDayWeek,
  CellStyled
};
