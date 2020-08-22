import React, { Component } from "react";
import { Row, Col, Form } from 'react-bootstrap';
import { ModalWithButton } from "../../common/modalWithButton"
import { IProductUpdate, IProduct } from "./models"


export class UpdateProduct extends Component<IProps, IProductUpdate> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            name: props.product.name,
            price: +props.product.price.toString().replace('$', ''),
            quantity: props.product.quantity
        }
    }

    onSave = () => {
        this.props.onSave(this.props.product.id, this.state);
    }

    handleInputChange = (event: any) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    };

    render() {
        return (
            <ModalWithButton modalTitle="Edit Product" buttonText="Edit" onSaveClick={this.onSave}>
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
                <Row>
                    <Col>
                        <Form.Group controlId="formPrice">
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control type="number" placeholder="Quantity" name="quantity" value={this.state.quantity} onChange={this.handleInputChange} />
                        </Form.Group>
                    </Col>
                </Row>
            </ModalWithButton>
        )
    }
}

interface IProps {
    product: IProduct;
    onSave(productId: string, productCreateModel: IProductUpdate): void;
}