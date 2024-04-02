import React from "react"
import { Link} from "react-router-dom"
import {useSearchResult} from "../hooks.ts"

function SearchResults (){
    const results = useSearchResult()

    return (
        <ul>
            {results.map((r)=>(<li>
                <Link to={"/item/"+(r.id)}>
                <h2>{r.title}</h2>
                </Link>
            </li>))}
        </ul>
        )
}


export {SearchResults}