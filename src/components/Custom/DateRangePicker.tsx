// components/DateRangePicker.tsx
import React from 'react';

const DateRangePicker: React.FC = () => {
  return (
    <div className="flex space-x-2">
      <input type="date" className="border rounded-lg p-2" />
      <span className="self-center">to</span>
      <input type="date" className="border rounded-lg p-2" />
    </div>
  );
};

export default DateRangePicker;