// import DateCounter from "./DateCounter";
import {useEffect, useReducer} from "react";
import Header from "./Header";
import Main from "./Main";
import {type} from "@testing-library/user-event/dist/type";

const initialState={
    questions:[],
    //status can be loading ,error,ready,active,finished
    status:"loading"
}
function reducer(state,action){
   switch (action.type){
       case "DataReceived":
           return {
               ...state,
               questions: action.payload
               status: "ready"
           }
       case "dataFailed":
           return {
               ...state,
               state:"error"
           }
       default:
           throw new Error("action unknown")
   }
}
export default function App() {
    const [state,dispatch]=useReducer(reducer,initialState)
  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({type:"DataReceived", payload:data}))
      .catch((error) => dispatch({type:"dataFailed"}));
  }, []);
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}
