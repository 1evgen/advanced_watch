import React, {useEffect, useState} from 'react';
import s from '../ElectronicWatch/ElectronicWatch.module.css'
import moment from 'moment-timezone';

type PropsType = {
    hour: number | string
    minute: number | string
    second: number | string
}
type TimezoneType = 'New_York' | 'Tokio' | 'London' | 'CurrentTime'

export const ElectronicWatch = (props: PropsType) => {
    const [selectedTimezone, setSelectedTimezone] = useState('')
    const [activeTimezone, setActiveTimezone] = useState('CurrentTime')


    const setTimezone = (nameTime: TimezoneType)=> {
        setSelectedTimezone(nameTime)
        setActiveTimezone(nameTime)
    }
    let electronicWatchTime  = props.hour + ':' +  props.minute + ':' + props.second


    switch (selectedTimezone) {
        case "New_York": electronicWatchTime  = moment().tz('America/New_York').format('HH: mm: ss')
            break
        case 'Tokio': electronicWatchTime = moment().tz('Asia/Tokyo').format('HH: mm: ss')
            break
        case "London": electronicWatchTime = moment().tz('Europe/London').format('HH: mm: ss')
            break
        case "CurrentTime": electronicWatchTime = moment().format('HH: mm: ss')
            break
        default: break
    }

    return (
        <div className={s.wrapperForWatch} >
        <div className={s.bodyClock}>
            <div className={`${s.hour} ${s.numbers}`}>{electronicWatchTime }</div>
            <div className={s.buttons}>
                <div className={`${activeTimezone === 'New_York' ? s.activeTime : '' } ${s.button}`}
                     onClick={()=>setTimezone('New_York')}>New York</div>
                <div className={`${activeTimezone === 'Tokio' ? s.activeTime : '' } ${s.button}`}
                     onClick={()=> setTimezone('Tokio')}>Tokio</div>
                <div className={`${activeTimezone === 'London' ? s.activeTime : '' } ${s.button}`}
                     onClick={()=> setTimezone('London')}>London</div>
                <div className={`${activeTimezone === 'CurrentTime' ? s.activeTime : '' } ${s.button}`}
                     onClick={()=> setTimezone('CurrentTime')}>Your Time</div>
            </div>
        </div>
        </div>
    );
};

