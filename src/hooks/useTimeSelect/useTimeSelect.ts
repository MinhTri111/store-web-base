import moment from 'moment-timezone';

import { TIME_SELECT } from 'src/constants';

interface TimeSelect {}

function useTimeSelect(e): TimeSelect {
  const getTime =
    e === TIME_SELECT.WEEK
      ? `${moment(moment().subtract(7, 'days').calendar()).format().slice(0, 10)},${moment().format().slice(0, 10)}`
      : `${moment(moment().subtract(30, 'days').calendar()).format().slice(0, 10)},${moment().format().slice(0, 10)}`;

  return getTime;
}

export default useTimeSelect;
