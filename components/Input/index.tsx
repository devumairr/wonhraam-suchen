import React from 'react';
import Image from 'next/image';

import search from '../../public/assets/images/search.png';

import styles from './style.module.css';
import Button from '../Button';

interface Iprops {
  placeholder: string;
  button?: boolean;
}

const Input: React.FC<Iprops> = ({ placeholder, button }) => {
  return (
    <div className={styles.inputContainer}>
      <form action='#'>
        <input type='text' placeholder={placeholder} />
        {button ? <Button text='Submit' /> : <Image src={search} alt='search icon' width={14} />}
      </form>
    </div>
  );
};

export default Input;
