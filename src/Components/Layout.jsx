import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./Components"

export default function Layout() {
    return (
        <>

        <Header/>
        <Outlet/>
        
        </>
    )
}