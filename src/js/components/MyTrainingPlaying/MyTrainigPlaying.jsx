import DatePicker from 'react-datepicker';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import s from '../MyTrainingPlaying/MyTrainingPlaying.module.css';
import sprite from '../../../sprites/myTrainingPlaying.svg';
// import { useTranslation } from 'react-i18next';

function MyTrainingPlaying() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  return (
    <form className={s.form}>
      <svg className={s.iconBack} width="24" height="12">
        <use href={sprite + '#icon-back'}></use>
      </svg>
      <h2 className={s.title}>Моє тренування</h2>
      <div className={s.datePicker}>

       <DatePicker
          dateFormat="dd.MM.yyyy"
          minDate={new Date()}
          selected={startDate}
          onChange={startDate => setStartDate(startDate)}
          placeholderText={'Початок'}
          className={s.datePickerInput}
        />
        <DatePicker
          dateFormat="dd.MM.yyyy"
          minDate={new Date()}
          selected={endDate}
          onChange={endDate => setEndDate(endDate)}
          placeholderText={'Закінчення'}
          className={s.datePickerInput}
        />
      </div>
      <div className={s.selectBtn}>
        <select className={s.select}>
          <option className={s.option} selected value="default">
            Обрати книги з бібліотеки
          </option>
        </select>
        <button className={s.submitBtn} type="submit">
          Додати
        </button>
      </div>
    </form>
  );
}

export default MyTrainingPlaying;