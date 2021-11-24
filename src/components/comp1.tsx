import React from 'react'
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { BrowserRouter, Switch, Route, Link, useHistory } from 'react-router-dom';
import Object1Comp from './Object1Comp';
import Route1 from './route1';
import UseEffect from './useEffect';
import UseRefComp from './useRefComp';
import { Variables_ND_Types } from './Variables_ND_Types';



interface ashish {
    name: string,
    num: Number,
    tip?: Number, // ? indicates optional argument
    type: "rich" | "veryrich" // only these two values can be assigned
}
interface ashish_v2 extends ashish {
    age: Number
}


export const Comp1: React.FC<ashish> = ({ name, num, tip = 0 }, props) => {
    const history = useHistory();
    var [c1, setc1] = React.useState<Number | null>(3)
    const [showToast, setShowToast] = React.useState<{ message: React.ReactNode; color: "success" | "error" | "cancell" | undefined }>({ message: undefined, color: undefined });
    var rough1: ashish_v2 = { age: 21, name: "rahul", num: 2, type: "rich" }
    {
        let rough3: ashish_v2;
        const rough1: ashish_v2 = { age: 21, name: "rahul", num: 2, type: "rich" };

    }


    React.useEffect(() => { //component will mount

        setc1(5)
        console.log(c1);

        // setShowToast(undefined)
        console.log(showToast);

    }, [])




    return (

        <>
            "this is the first component named {name} with {num} and {tip}"
            "tip is {c1}"<br />

            <br />

            {/* <Variables_ND_Types />
            <UseEffect />
            <UseRefComp /> */}

            <br />

            <Switch>
                <Route exact path="/comp1" ><Route1 /></Route>
                <Route path="/obj1" component={Object1Comp} />
            </Switch>

            <button onClick={() => { history.push("/comp1") }}>click me!</button>
            <Link to="/comp1" >comp1 !</Link>
            <Link to="/obj1" >obj1 !</Link>

        </>

    )
}

