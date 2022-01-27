import React from 'react';
import { autorun, makeAutoObservable,} from 'mobx';
import {observer} from "mobx-react";


class Store{
    constructor() {
        makeAutoObservable(this)
    }
    count = 0;

    inc = () => {
        this.count++
    }

    dec = () => {
        this.count--
    }

    get double() {
        return this.count * 2
    }
}
const TestComp = () => {
    console.log("render", new Date())
    return <div> test </div>
}

export const counterStore = new Store();

autorun(() => {
    console.log(counterStore.count)
})


const MyCounter = observer(() => {
    return (
        <div className="App">
            <h1>{counterStore.count}</h1>
            <TestComp />
            <h2>{counterStore.double}</h2>

            <button onClick={counterStore.inc}>+</button>
            <button onClick={counterStore.dec}>-</button>
        </div>
    )
})


export default MyCounter;