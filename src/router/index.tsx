import React from "react"
import { Layout } from "../components/Layout";
import { Home } from "../pages/Home";
import { SearchResults } from "../pages/SearchResulsts";

import {Routes, Route } from "react-router-dom";

function AppRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Layout />} >
                <Route index element={<Home />} />
                <Route path="/search/:query" element={<SearchResults />} />
            </Route>
        </Routes>
    )
}

export {AppRoutes}