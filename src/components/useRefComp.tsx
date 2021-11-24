import React, { useRef } from 'react'

function useRefComp() {
    var [state1, setstate1] = React.useState(0)
    var initiate = useRef(true); // use ref

    var ashish: any = useRef(null); // use ref
    console.log(ashish);


    return (
        <div>
            <div>
                <h1>This is the useRef component</h1><br />
                <p>{state1}</p>
                <input ref={ashish} type="text" placeholder="yourname" onChange={() => setstate1(++state1)} />
                <h2>{ashish.current ? ashish.current.value : false}</h2>
            </div>
        </div>
    )
}

export default useRefComp
