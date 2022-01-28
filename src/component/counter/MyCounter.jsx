import React from 'react';
import {makeAutoObservable, runInAction} from 'mobx';
import {observer} from "mobx-react";

const delay = (ms) => new Promise((_) => setTimeout(_, ms))

class Store{
    constructor() {
        makeAutoObservable(this)
    }
    count = 0;

    inc = async () => {
        await delay(10)
        runInAction(() => {
            this.count++
            this.count++
            this.count++
        })
    }

    dec = () => {
        this.count--
    }
}


export const counterStore = new Store();


const MyCounter = () => {
    const {count, inc, dec} = counterStore
    return (
        <div className="App">
            <h1>{count}</h1>

            <button onClick={inc}>+</button>
            <button onClick={dec}>-</button>
        </div>
    )
}


export default observer(MyCounter);