import PropTypes from 'prop-types';
import s from './Filter.module.css';

export const Filter = ({ value, onChange }) => {
  return (
    <label htmlFor="" className={s.label}>
      Find contacts by name
      <input
        className={s.filter__input}
        name="filter"
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
