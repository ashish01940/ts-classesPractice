import React from 'react'

interface myi1 {
    refr?: any
}

const refComp2: React.FC<myi1> = ({ refr }) => {
    console.log(refr);
    const chngRef = () => {
        var refInfo = refr.current;
        if (refInfo) refInfo.innerHTML = "i changed it without using forward ref";
    }
    return (
        <div>
            {/* <h1 ref={refr} >this is refComp2</h1> */}
            <button onClick={chngRef}>click</button>
        </div>
    )
}

export default refComp2
