import React, { useContext } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { SettingsContext } from '../context/SettingContext';

const CountDownAnimation = ({key, timer, animate, children}) => {

    const {stopAimate} =useContext(SettingsContext)
    return (
        <div>
             <CountdownCircleTimer 
                key={key}
                 isPlaying={animate}
                 duration={timer * 60}
                 colors={[
                    ['#FE6F6B', 0.33],
                    ['#FE6F6B', 0.33],
                    ['#FE6F6B', 0.33],
                  ]}
                  size={220}
                 strokeWidth={6}
                 trailColor="#151932"
                 onComplete={()=>{
                    stopAimate()
                 }}
                 >
                 {children}
            </CountdownCircleTimer>
            
            
        </div>
    );
};

export default CountDownAnimation;