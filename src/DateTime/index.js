import React from "react";
import { DateTimeContainer } from "./styled";
import useCurrentDate from "./useCurrentDate";

function DateTime() {
  const { currentDate, formatDate, formatTime } = useCurrentDate();

  return (
    <DateTimeContainer>
      {formatDate(currentDate)}<br />
      {formatTime(currentDate)}
    </DateTimeContainer>
  );
}

export default DateTime;
