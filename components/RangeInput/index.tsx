import React from 'react';
import styles from './style.module.css';

interface Iprops {
  label: string;
  placeholder1: string;
  placeholder2: string;
}

const RangeInput: React.FC<Iprops> = ({
  placeholder1,
  placeholder2,
  label,
}) => {
  return (
    <div className='input-group'>
      <label htmlFor='rooms'>{label}</label>
      <div className={`${styles.inputContainer} flex items-center`}>
        <input
          type='number'
          name=''
          id=''
          placeholder={placeholder1}
          className='flex flex-1'
        />
        <span className='px-3'>to</span>
        <input
          type='number'
          name=''
          id=''
          placeholder={placeholder2}
          className='flex flex-1'
        />
      </div>
    </div>
  );
};

export default RangeInput;
