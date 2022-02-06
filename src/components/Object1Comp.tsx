import React from 'react'
import { a1, a2, a3 } from "./Class1"

let dishes: (string | number | object | undefined)[];

function Object1Comp() {
    console.log(typeof dishes);

    var [normaldisharr, chng_normaldisharr] = React.useState<typeof dishes>([]);
    let [paneerdish, chng_paneerdish] = React.useState<typeof dishes>([]);
    let [commonmandata, chngcommonmandata] = React.useState<(string | number)[]>([])

    React.useEffect(() => {
        //executing typescript ts code
        // const normaldish = new a1("white", "100g", "1cup", "the food is being prepared")
        const normaldish = new a1("white", "100g", "1cup", "", "", "the food is being prepared")
        chng_normaldisharr([
            a1.description(),
            normaldish.dough,
            normaldish.peppername(),
            normaldish.otherspeciesname(),
            normaldish.salt,
            normaldish.water,
            normaldish.followup()
        ]);

        var kadhaipaneer = new a2("black", "500g", "3cups", "250g", "paneermasala")
        chng_paneerdish([
            kadhaipaneer.dough,
            a2.freedal(),
            kadhaipaneer.creatingpaneer(),
            kadhaipaneer.mixit(),
            kadhaipaneer.rough1(),
        ])

        var common_man = new a3(1056, "niklaus");
        chngcommonmandata([common_man.nameandage()])
        // console.log(common_man.nameandage())
    }, [])

    console.log(normaldisharr, paneerdish);


    return (
        <div>
            <h1>normal dish parent class</h1>
            <ul>
                {normaldisharr.map((a, b) => (<li key={b} >{JSON.stringify(a)}</li>))}
            </ul>
            <h1>kadhaipaneer child class</h1>
            <ol>
                {paneerdish.map((a, b) => <li key={b}>{a}</li>)}
            </ol>
            <h1>{commonmandata}</h1>
            {/* <ol>
                {paneerdish.map((a, b) => <li key={b}>{a}</li>)}
            </ol> */}
        </div>
    )
}

export default Object1Comp
