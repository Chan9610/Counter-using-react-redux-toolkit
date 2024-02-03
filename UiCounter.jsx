import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import { decrementCounter,incrementCounter } from './Slice'

function UiCounter() {
    const counter1 = useSelector((state)=>{
        return state.counter.counter
    })

    const dispatch = useDispatch()
  return (
    <>
    <button onClick={()=>dispatch(incrementCounter())}>Increment</button>
    <p>{counter1}</p>
    <button onClick={()=>dispatch(decrementCounter())}>Decrement</button>
    
    </>
  )
}

export default UiCounter