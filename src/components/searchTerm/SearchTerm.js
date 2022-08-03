import React, { useState} from "react";
import './SearchTerm.css';

export const SearchTerm = ({setCity})=>{
    const [term, setTerm] = useState('');     //locally store term change   

    // handle on change for term
    const searchTermHandler = ({target})=>{
        setTerm(target.value);
    }
    const onSubmitHandler = (e)=>{
        e.preventDefault()         //prevent from loading
        if(term){                   // check if search term is empty
            setCity(term)           // call function of App compo.
        }
    }

    return (
        <form className="search" onSubmit={onSubmitHandler}>
            <input 
            type='text' 
            placeholder='delhi'
            onChange={searchTermHandler}
            />
            <button>go</button>
        </form>
      );
}