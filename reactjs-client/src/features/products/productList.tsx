import React, { Component } from "react";
import { TopNav } from "../../common/topNav";

import { Row, Col, Button, Table, ButtonGroup } from 'react-bootstrap';
export class ProfileSkillEdit extends Component {
    render() {
        return (
            <>
                <TopNav></TopNav>
                <Row className="mt-2 mr-1">
                    <Col>
                        <Button className="float-right">Add new product</Button>
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>LastUpdate</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                    <td>
                                        <ButtonGroup>
                                            <Button variant="info">Edit</Button>
                                            <Button variant="danger">Delete</Button>
                                        </ButtonGroup>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </>
        )
    }
}
