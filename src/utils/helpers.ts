import moment, { Moment } from 'moment';
import dayjs, { Dayjs } from 'dayjs';

export const getApiEndpoint = () => {
  const url = process.env.REACT_APP_API_KEY;
  if (url === undefined)
    throw new Error('Please specify an API endpoint in the environment variable REACT_APP_API_KEY');
  return url;
};

export function UppercaseFormat(text: string) {
  return text?.charAt(0).toUpperCase() + text?.slice(1);
}

export const handleTimeFormate = (date: any) => {
  const hours = date['$H'];
  const mins = date['$m'];
  return `${hours}:${mins}`;
};

export const disabledDate = (current: Moment | null): boolean => {
  // Disable dates before today and after 1 month from today
  return current ? current < moment().startOf('day') || current > moment().add(1, 'month').endOf('day') : false;
};

export const disabledTime = (current: Dayjs | null) => {
  let now = dayjs();
  now = now.add(5, 'minute');
  const isToday = current && current?.isSame(now, 'day');

  return {
    disabledHours: () => {
      if (isToday) return [...Array(now.hour()).keys()];
      else return [];
    },
    // else return []
    disabledMinutes: (selectedHour: any) => {
      if (isToday && selectedHour === now.hour()) return [...Array(now.minute()).keys()];
      else return [];
    },
  };
};
