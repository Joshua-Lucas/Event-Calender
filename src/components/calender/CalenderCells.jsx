/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  addDays,
  format,
  parse,
  isSameMonth,
  isSameDay,
} from 'date-fns';

import './CalenderCells.css';

function CalenderCells({ currentMonth, selectedDate, setSelectedDate }) {
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfMonth(monthEnd);

  const dateFormat = 'd';
  const rows = [];

  let days = [];
  let day = startDate;
  let formattedDate = '';

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, dateFormat);
      const cloneDay = day;
      days.push(
        <div
          className={`col cell ${
            !isSameMonth(day, monthStart)
              ? 'disabled'
              : isSameDay(day, selectedDate)
              ? 'selected'
              : ''
          }`}
          key={day}
          onClick={() => setSelectedDate(parse(cloneDay))}
        >
          <span className='number'>{formattedDate}</span>
        </div>
      );
      day = addDays(day, 1);
    }
    rows.push(
      <div className='row' key={day}>
        {days}
      </div>
    );
    days = [];
  }

  return <div className='body'>{rows}</div>;
}

export default CalenderCells;
