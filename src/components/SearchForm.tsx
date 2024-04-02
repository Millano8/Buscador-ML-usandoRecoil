import React, {useState, useEffect} from "react"
import { useParams, useNavigate } from "react-router-dom"
import {useSearchResult} from "../hooks.ts"

function SearchForm (){
    const navigate = useNavigate()
    const results = useSearchResult()

    function handleSubmit(e){
        e.preventDefault()
        const query = e.target.query.value
        navigate("/search/"+query, {replace:true})
    }
    return (<form onSubmit={handleSubmit}>
        <input type="text" name="query" />
        <button>Buscar</button>
        <h4>Resultados: {results.length}</h4>
    </form>)
}


export {SearchForm}