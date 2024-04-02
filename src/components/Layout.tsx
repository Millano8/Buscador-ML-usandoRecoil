//import React, {useState, useEffect} from "react"
const React = require('react')
const useState = React.useState
const useEffect = React.useEffect
import { SearchForm } from "./SearchForm"
import { Outlet } from "react-router-dom"

function Layout (){
    return <div>
        <header> <SearchForm /></header>
        <Outlet></Outlet>
        <footer>Soy el footer</footer>
        </div>
}


export {Layout}