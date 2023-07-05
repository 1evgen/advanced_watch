import React from 'react';
import './App.module.css';
import s from './App.module.css'
import {Clock} from "./clock/Clock";

function AppClock() {
  return (
    <div className={s.App}>
            <Clock />
    </div>
  );
}

export default AppClock;
