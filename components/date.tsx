import React from 'react';
import { parseISO, format } from 'date-fns';

export type DateProps = {
  dateString: string;
};

const Date: React.FC<DateProps> = ({
  dateString
}): React.ReactElement<DateProps> => {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
};

export default Date;
