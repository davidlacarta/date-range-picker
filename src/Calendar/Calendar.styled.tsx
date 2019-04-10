import styled, { createGlobalStyle } from "styled-components";

const theme = {
  main: "white",
  hover: "rgb(128, 232, 224)",
  selected: "rgb(0, 166, 153)",
  selectedTemp: "rgb(0, 166, 153)",
  disabled: "rgb(202, 204, 205)",
  date: "rgb(72, 72, 72)",
  border: "rgb(228, 231, 231)"
};

const GlobalStyle = createGlobalStyle`
  body{
    font-family: arial;
    text-align: center;
  }
`;

const CalendarStyled = styled.div`
  width: 400px;
  margin: 100px auto;
`;

type ButtonNavStyledProps = {
  float?: string;
};

const ButtonNavStyled = styled.button`
  float: ${(props: ButtonNavStyledProps) => props.float || "left"};
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
  color: ${props => props.theme.date};
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;

  ::before {
    content: "";
    padding-bottom: 100%;
  }
`;

type CellStyledProps = {
  selected: boolean;
  selectedTemp: boolean;
  disabled: boolean;
  theme: {
    date: string;
    disabled: string;
    selected: string;
    selectedTemp: string;
    hover: string;
    main: string;
    border: string;
  };
};

const CellStyled = styled.div`
  background: ${(props: CellStyledProps) =>
    (props.selected && props.theme.selected) ||
    (props.selectedTemp && props.theme.selectedTemp) ||
    props.theme.main};
  color: ${(props: CellStyledProps) =>
    (props.disabled && props.theme.disabled) || props.theme.date};
  outline: 1px solid ${(props: CellStyledProps) => props.theme.border};
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
    background: ${(props: CellStyledProps) =>
      !props.selected && props.theme.hover};
  }
`;

export {
  theme,
  GlobalStyle,
  CalendarStyled,
  ButtonNavStyled,
  MonthStyled,
  ContentStyled,
  CellDayWeek,
  CellStyled
};
