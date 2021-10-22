import { startOfWeek, format, addDays } from 'date-fns';
import './CalenderDaysOfWeek.css';

function CalenderDaysOfWeek({ currentMonth }) {
  const dateFormat = 'EEEE';
  const days = [];

  let startDate = startOfWeek(currentMonth);

  for (let i = 0; i < 7; i++) {
    days.push(format(addDays(startDate, i), dateFormat));
  }

  return (
    <div className='daysOfWeek'>
      {days.map((day) => {
        return (
          <p className='col col-center' key={day}>
            {day}
          </p>
        );
      })}
    </div>
  );
}

export default CalenderDaysOfWeek;
