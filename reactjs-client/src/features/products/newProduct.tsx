import React, { Component } from "react";
import { Row, Col, Form } from 'react-bootstrap';
import { ModalWithButton } from "../../common/modalWithButton"
import { IProductCreate } from "./models"


export class NewProduct extends Component<IProps, IProductCreate> {

    state = {
        name: '',
        price: 0
    }

    onSave = () => {
        this.props.onSave(this.state);
    }

    handleInputChange = (event: any) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    };

    beforeOpenModal = () => {
        this.setState({
            ...this.state,
            name: '',
            price: 0
        })
    }

    render() {
        return (
            <ModalWithButton modalTitle="New Product" buttonText="Add New Product" buttonClassName="float-right" onSaveClick={this.onSave} breforeOpenModal={this.beforeOpenModal}>
                <Row>
                    <Col>
                        <Form.Group controlId="fromProductName">
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control type="text" placeholder="Product name" name="name" value={this.state.name} onChange={this.handleInputChange} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group controlId="formPrice">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="number" placeholder="Price" name="price" value={this.state.price} onChange={this.handleInputChange} />
                        </Form.Group>
                    </Col>
                </Row>
            </ModalWithButton>
        )
    }
}

interface IProps {
    onSave(productCreateModel: IProductCreate): void;
}