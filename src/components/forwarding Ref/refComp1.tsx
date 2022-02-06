import React from 'react'
import RefComp2 from './refComp2';
import RefComp3 from './refComp3';

const RefComp1: React.FC = () => {
    const ref1 = React.useRef<any>(null)
    return (
        <div>
            <h1 ref={ref1}>this is my RefComp1</h1>
            <RefComp2 refr={ref1} /> {/* key can be anything but not ref when not using "forwardRef" */}
            <RefComp3 ref={ref1} /> {/* "ref" can be key, only when "forwardRef" is used */}
        </div>
    )
}

export default RefComp1
