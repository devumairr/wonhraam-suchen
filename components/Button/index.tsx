import React from 'react';

import style from './style.module.css';

interface IProps {
  text: string;
  fullWidth?: boolean;
}

const Button: React.FC<IProps> = ({ text, fullWidth }) => {
  return <button style={{width: fullWidth ? '100%' : 'max-content'}} className={style.button}>{text}</button>;
};

export default Button;
