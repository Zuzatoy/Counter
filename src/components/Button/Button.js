
import React from 'react';

import './Button.css';


export const Button = ({title, onClick, isDisabled}) => (
    <button disabled={isDisabled} onClick={onClick}>{title}</button>
   )

