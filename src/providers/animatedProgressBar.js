import React from 'react';
import { useSpring, animated } from 'react-spring';
import 'react-circular-progressbar/dist/styles.css';

const AnimatedProgressProvider = ({ valueStart, valueEnd, duration, easingFunction, children }) => {
    const springProps = useSpring({
      from: { value: valueStart },
      to: { value: valueEnd },
      config: { duration: duration * 1000, easing: easingFunction },
    });
  
    return (
      <animated.div>
        {springProps.value.interpolate(value => children(value))}
      </animated.div>
    );
  };

export default AnimatedProgressProvider;
