import React, { useMemo } from 'react'

export const UseMemohook = () => {
    let [simplestate, chngsimplestate] = React.useState(0)
    let data = 50;
    function heavyComputation(value) {
        console.log("computation happend");
        return Math.cbrt(value)
    }

    var computedvalue = useMemo(() => heavyComputation(data), [])
    // if no array is provided, function will run on each render
    // if empty array is provided, function will run only once at mounting
    // if array with values is provide, function will run whenevery the variables inside array changes
    return (
        <div>
            simple state : {simplestate}
            <button onClick={() => chngsimplestate(++simplestate)} >increment simple state</button>

            <h2>This is a useMemo hook</h2>
            memoized value is {computedvalue}
        </div>
    )
}
