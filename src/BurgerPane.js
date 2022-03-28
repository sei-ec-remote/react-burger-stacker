import React, { useState } from 'react'
import Burger from './Burger'

//refactored to functional component!
export default function BurgerPane (props) {

    function clrBurger(e) {
        const burger = document.getElementById('burger')
        while (burger.firstChild) {
            burger.removeChild(burger.firstChild)
        }
    }
    return (
        <div>
            <Burger />
            <button onClick={clrBurger}>Clear Burger!</button>
        </div>

    )
}