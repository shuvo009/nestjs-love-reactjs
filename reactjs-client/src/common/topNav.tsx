import React, { Component } from "react";
import { Navbar } from 'react-bootstrap';
export class TopNav extends Component {
    render() {
        return (
            <Navbar bg="dark">
                <Navbar.Brand className="text-white" href="#">Products</Navbar.Brand>
            </Navbar>
        )
    }
}