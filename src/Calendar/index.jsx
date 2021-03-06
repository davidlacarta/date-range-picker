import React, { useState } from "react";
import dayjs from "dayjs";
import { Global } from "@emotion/core";
import {
  CalendarStyled,
  GlobalStyle,
  ContentStyled,
  CellDayWeek,
  CellStyled,
  ButtonNavStyled,
  MonthStyled
} from "./styles";

const DAYS_OF_WEEK = ["Mo", "Tu", "Wd", "Th", "Fr", "Sa", "Su"];

function Calendar() {
  const [firstDayMonth, setFirstDayMonth] = useState(dayjs().startOf("month"));
  const [startDay, setStartDay] = useState(null);
  const [endDay, setEndDay] = useState(null);
  const [endSelectedDay, setEndSelectedDay] = useState(null);

  function nextMonth() {
    setFirstDayMonth(firstDayMonth.add(1, "month"));
  }

  function prevMonth() {
    setFirstDayMonth(firstDayMonth.subtract(1, "month"));
  }

  function selectDay(day) {
    if (!startDay) {
      return setStartDay(day);
    }
    if (!endDay && day.isAfter(startDay)) {
      return setEndDay(day);
    }
    setStartDay(day);
    setEndDay(null);
    setEndSelectedDay(null);
  }

  function calculateSelected(day) {
    if (endDay) {
      return;
    }
    const diffDays = day.diff(startDay, "day");
    setEndSelectedDay(diffDays > 0 ? day : null);
  }

  function isSelectedTemp(day) {
    if (!endSelectedDay || !startDay) {
      return false;
    }
    return (
      day.isSame(endSelectedDay) ||
      (day.isBefore(endSelectedDay) && day.isAfter(startDay))
    );
  }

  return (
    <CalendarStyled>
      <Global styles={GlobalStyle} />
      <Head
        firstDayMonth={firstDayMonth}
        nextMonth={nextMonth}
        prevMonth={prevMonth}
      />
      <ContentStyled>
        {DAYS_OF_WEEK.map(day => (
          <CellDayWeek>{day}</CellDayWeek>
        ))}
        {daysMonthPlusAdjacent(firstDayMonth).map(day => {
          return (
            <CellStyled
              key={day.valueOf()}
              selected={isEqual(startDay, day)}
              selectedTemp={isSelectedTemp(day)}
              disabled={firstDayMonth.month() !== day.month()}
              onClick={_ => selectDay(day)}
              onMouseOver={_ => calculateSelected(day)}
            >
              {day.date()}
            </CellStyled>
          );
        })}
      </ContentStyled>
    </CalendarStyled>
  );
}

function Head({ firstDayMonth, prevMonth, nextMonth }) {
  return (
    <React.Fragment>
      <ButtonNavStyled role="button" onClick={prevMonth}>
        prev
      </ButtonNavStyled>
      <MonthStyled>{firstDayMonth.format("MMM YYYY")}</MonthStyled>
      <ButtonNavStyled role="button" float="right" onClick={nextMonth}>
        next
      </ButtonNavStyled>
    </React.Fragment>
  );
}

function isEqual(objectA, objectB) {
  return JSON.stringify(objectA) === JSON.stringify(objectB);
}

function daysMonthPlusAdjacent(firstDayMonth) {
  const firstDayMonthDay = firstDayMonth.day();
  const firstDayRowCalendar = firstDayMonth.subtract(
    firstDayMonthDay - 1,
    "day"
  );
  return Array(42)
    .fill(firstDayRowCalendar)
    .map((firstDayRowCalendar, index) => firstDayRowCalendar.add(index, "day"));
}

export default Calendar;
