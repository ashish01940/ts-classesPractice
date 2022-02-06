import React from "react";

export interface interfaceforPersonclass {
    name: string;
    age: number;
    nameandage(): string;
    newagecomp?(): number | string | Object;
}
interface forobj {
    name: string;
    age: number;
    number: number;
    address?: string;
}
interface strangeinfo {
    one: number,
    two: number
}
interface mixed extends forobj, strangeinfo {
    mixed: any
}
interface forStringArray {
    [i: number]: string;
}
interface forStringNumArray {
    [i: number]: (string | number)
}
interface normalstring {
    i: string
}

function Interfaces() {
    let style1: Object = { display: "flex", flexDirection: "column" };
    let obj1: forobj;
    obj1 = { name: "ashish", age: 34, number: 23 };
    console.log("obj1 is : ", obj1);

    let [data1, chng_data1] = React.useState<strangeinfo | Object>({});
    console.log("data 1 is: ", data1);
    let si_1 = (data: strangeinfo) => {
        console.log(Object.values(data));
        chng_data1(data);

    };


    let number1: strangeinfo["one"] = 1; //that's how we can take only one property from strangeinfo

    let pura_pariwar: mixed;
    pura_pariwar = {
        name: "rippah", age: 300, number: 45, address: "Mystic Falls", one: 5, two: 8, mixed: "kch bhi dede isme to"
    }

    let array_string: forStringArray;
    array_string = ["Ashish", "Saini"]

    let array_num_string: forStringNumArray;
    array_num_string = [1, 4, "rippah", .5]

    let normalarray = [1, 2, 3, 4, 5]

    let normalstr1: normalstring["i"];
    normalstr1 = "3";



    return (
        <div style={{ backgroundColor: "coral" }} >
            <button onClick={() => { si_1({ one: 2, two: 5 }) }}>setData</button>
            <hr />
            <div style={style1}>
                <p> {obj1.name + "'s number is " + obj1.number + " and he is of age " + obj1.age} </p>
                {Object.values(data1).map((d, c) => <p key={c}>{d}</p>)}
            </div>
            <hr />
            {array_string}
            <hr />
            {array_num_string}
            <hr />
            {normalarray}
        </div>
    )
}

export default Interfaces

