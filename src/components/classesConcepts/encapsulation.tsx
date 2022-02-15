/* Encapsulation means restricting the property to be accessed by anyone using a class,
It can be achieved by using access modifiers like private and getters and setters */
import React, { Component } from 'react';
class Encapsulation {
    private readonly amtInBank: number = 50000;
    private depositAmt: number = 0;
    constructor(depositAmt: number) {
        this.depositAmt = depositAmt;
    }
    getAmtInBank = () => { //getter function
        return this.amtInBank;
    }
    setDepositAmt = (depositAmt: number) => {
        console.log(typeof this.depositAmt, typeof depositAmt);
        depositAmt ? this.depositAmt = this.depositAmt + depositAmt : this.depositAmt = this.depositAmt
    }
    getDepositAmt = () => {
        return this.depositAmt;
    }
}

interface encapsulationState {
    depositedAmtState: number
}

export class encapsulation extends Component<{}, encapsulationState> { //React class
    constructor(props: any) {
        super(props)
        this.state = {
            depositedAmtState: 1,
        }
    }
    render() {
        const inputRf = React.createRef<any>()
        const bank = new Encapsulation(this.state.depositedAmtState)
        return (
            <>
                {console.log(this.state.depositedAmtState)}
                <h1>can't be cahnged, only getter{bank.getAmtInBank()}</h1>
                <hr />
                <h1>getting here ={">"} {this.state?.depositedAmtState}</h1>
                setting here ={">"} <input ref={inputRf} type="number"></input>
                <button
                    onClick={
                        () => {
                            bank.setDepositAmt(parseInt(inputRf.current.value))
                            this.setState({ "depositedAmtState": bank.getDepositAmt() })
                        }
                    }
                >
                    setDeposit
                </button>
            </>
        )
    }
}

export default encapsulation;
