import { ReactComponent as Calendar } from '../DatePicker/Calendar.svg';

const DatepickerLogo = ({ value }) => {
    return (
      <>
        <Calendar className={s.calendar} width="17" height="17" />
        <span className={s.text}>{value}</span>
        </>
    );
  };
  
  export default DatepickerLogo;