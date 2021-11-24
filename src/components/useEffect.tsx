import React, { Component, useState } from 'react'

function useEffect() {
    var [iter, setiter] = useState(0)
    var initiate_normal = true;
    var initiate = React.useRef(false); //useRef

    //it will run on normal component did mount and component did update (everytime)
    React.useEffect(() => {
        console.log("useEffect usage 1");
    })

    //It will only run on component did mount
    React.useEffect(() => {
        console.log("useEffect usage 2");
    }, [])

    //it will run on both component did mount and component did update for (iter) only
    React.useEffect(() => {
        console.log("useEffect usage 3");
    }, [iter])


    // // it will run on component did update for (iter) only using useRef
    React.useEffect(() => {
        console.log(initiate.current);
        if (!initiate.current) {
            //component did mount
            initiate.current = true;
        } else {
            //component did update
            console.log("useEffect usage 4");
        }
    }, [iter])


    // it will run on component did update for (iter) only using normal variable
    React.useEffect(() => {
        if (initiate_normal) {
            // component will mount
            console.log("component did mount");
            initiate_normal = false;
        } else {
            console.log("component did mount");
        }
    }, [iter])

    return (
        <div>
            <h1>THis is the Use effect component</h1><br />
            {iter}
            <button onClick={() => setiter(++iter)}>increase iter</button>
        </div>
    )
}

export default useEffect
