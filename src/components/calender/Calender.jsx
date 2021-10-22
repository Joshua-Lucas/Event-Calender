import { useState } from 'react';
import './Calender.css';

import CalenderHeader from './CalenderHeader';
import CalenderDaysOfWeek from './CalenderDaysOfWeek';
import CalenderCells from './CalenderCells';

function Calender() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className='calender'>
      <CalenderHeader
        currentMonth={currentMonth}
        changeMonth={setCurrentMonth}
      />
      <CalenderDaysOfWeek currentMonth={currentMonth} />

      <CalenderCells
        currentMonth={currentMonth}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
    </div>
  );
}

export default Calender;
