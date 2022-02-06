import React from 'react'

const refComp3 = React.forwardRef((props, ref: any) => {
    const chngRef = () => {
        // console.log(ref);

        const refEL: any = ref.current;
        (refEL) && (refEL.innerHTML = "hehe, changed it using forward ref")

    }
    return (
        <div>
            <button onClick={chngRef}>click3</button>
        </div>
    )
})

export default refComp3
