import { addMonths, subMonths, format } from 'date-fns';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

import './CalenderHeader.css';

function CalenderHeader({ currentMonth, changeMonth }) {
  const dateFormat = 'MMMM yyyy';

  function nextMonth() {
    changeMonth(addMonths(currentMonth, 1));
  }

  function prevMonth() {
    changeMonth(subMonths(currentMonth, 1));
  }
  return (
    <div className='header'>
      <button aria-label='Previous Month' onClick={prevMonth}>
        <ChevronLeftIcon
          focusable='false'
          aria-hidden='true'
          className='toggle-button'
        />
      </button>
      <h2>{format(currentMonth, dateFormat)}</h2>
      <button aria-label='Next Month' onClick={nextMonth}>
        <ChevronRightIcon
          focusable='false'
          aria-hidden='true'
          className='toggle-button'
        />
      </button>
    </div>
  );
}

export default CalenderHeader;
