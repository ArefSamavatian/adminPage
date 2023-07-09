import React from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';
import 'moment/locale/fa'; // Import Persian (Farsi) locale for moment
import 'antd/dist/reset.css'; // Import Ant Design styles

// Import Ant Design styles

// Set the locale to Persian (Farsi)
moment.locale('fa');

const DatePickerWrapper = (props) => {
  const { value, onChange } = props;

  // Convert the value to Gregorian date for Ant Design DatePicker
  const convertedValue = value ? moment(value, 'jYYYY/jMM/jDD') : null;

  // Convert the selected Gregorian date to Persian (Iranian) date
  const handleDateChange = (date, dateString) => {
    if (onChange) {
      const convertedDate = dateString ? moment(dateString, 'YYYY/MM/DD').format('jYYYY/jMM/jDD') : null;
      onChange(convertedDate);
    }
  };

  return (
    <DatePicker {...props} value={convertedValue} onChange={handleDateChange} />
  );
};

const Test = () => {
  const [selectedDate, setSelectedDate] = React.useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <h1>Select a date:</h1>
      <DatePickerWrapper value={selectedDate} onChange={handleDateChange} />
    </div>
  );
};

export default Test;
