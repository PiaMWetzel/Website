import React from 'react'
import Stack from "./stack"
import Footer from "../components/footer"
import '../styles/index.scss'

const Layout = (props) =>
{
    return(
        <div>
            <Stack/>
            {props.children}
            <Stack/>
        </div>
    )
}

export default Layout;