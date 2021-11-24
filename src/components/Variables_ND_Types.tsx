export const Variables_ND_Types = () => {



    // Tuple
    let rough3: (String | Number | undefined)[];
    // or
    let rough2: Array<string | number | undefined>; //generic type declaration
    (() => {
        rough3 = ["Ashish", "saini", 56, 4, "Boom"]
        rough3.push(4.5)
        rough3.unshift(undefined)
        // console.log(rough3);
    })();



    // key values objects
    let obj1: { firstname: string, age: number, phonenumber?: number };
    (() => {
        obj1 = { firstname: "mighty", age: 1076 };
        // console.log(obj1);
    })();



    // Union mean - either this or that datatype
    var union1: (number | string); //variable as union 
    var union2: (number[] | string[]) //array as union
    var union3: "red" | "blue"; //it can replace enums
    (() => {
        union1 = 45;
        // you can not use both at the same time
        union1 = "this is the union 1 ";

        union2 = [3, 2];
        // you can not use both at the same time
        union2 = ["ashish ", "saini"];

        union3 = "blue";
        // union3 = "green";
    })();


    



    return (
        <div>
            <h1>
                this is tuple
            </h1>
            <ol>
                {rough3.map(a => <li>{a}</li>)}
            </ol>
            <br />
            <h1>
                this is object
            </h1>
            2: {obj1.firstname} {obj1.age}

            <h1>this is union</h1>
            {union1} <br />
            {union2} <br />
            {union3} <br />
        </div>
    )
}


