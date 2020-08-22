import React, { Component } from "react";
import { TopNav } from "../../common/topNav";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { Row, Col, Button, Table, ButtonGroup, Spinner } from 'react-bootstrap';
import { connect } from "react-redux";
import { getProductList, createProduct, updateProduct, deleteProduct } from "./productStore"
import { IReducerState } from "../../helpers/rootStore";
import { IProductListProps } from "./props"
import { NewProduct } from "./newProduct"
import { UpdateProduct } from "./updateProduct"
import { IProductCreate, IProductUpdate } from "./models";
export class ProductListComponent extends Component<IProductListProps> {

    componentWillMount() {
        this.props.getProductList();
    }

    onCreateNewProduct = async (productModel: IProductCreate) => {
        await this.props.createProduct(productModel);
        this.props.getProductList();
    }

    onUpdateProduct = async (productId: string, productUpdateModel: IProductUpdate) => {
        await this.props.updateProduct(productId, productUpdateModel);
        this.props.getProductList();
    }

    onDeleteProduct = async (productId: string) => {
        confirmAlert({
            title: 'Confirm to delete',
            message: 'Are you sure are you want to delete?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: async () => {
                        await this.props.deleteProduct(productId);
                        this.props.getProductList();
                    }
                },
                {
                    label: 'No',
                    onClick: () => { }
                }
            ]
        });
    }

    render() {
        return (
            <>
                <TopNav></TopNav>

                <Row className="mt-2 mr-1">
                    <Col>
                        {this.props.isBusy ? <Spinner animation="border" variant="danger" /> : null}
                    </Col>
                    <Col className="auto">
                        <NewProduct onSave={this.onCreateNewProduct}></NewProduct>
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
                                {this.props.products.map((product, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{i + 1}</td>
                                            <td>{product.name}</td>
                                            <td>{product.price}</td>
                                            <td>{product.quantity}</td>
                                            <td>{product.lastUpdate}</td>
                                            <td>
                                                <ButtonGroup>
                                                    <UpdateProduct onSave={this.onUpdateProduct} product={product}></UpdateProduct>
                                                    <Button variant="danger" onClick={() => { this.onDeleteProduct(product.id) }}>Delete</Button>
                                                </ButtonGroup>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </>
        )
    }
}


const mapStateToProps = (state: IReducerState) => {
    return {
        ...state.productStore
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        getProductList: () => dispatch(getProductList()),
        createProduct: (productModel: IProductCreate) => dispatch(createProduct(productModel)),
        updateProduct: (productId: string, productModel: IProductUpdate) => dispatch(updateProduct(productId, productModel)),
        deleteProduct: (productId: string) => dispatch(deleteProduct(productId))
    }
}

export const ProductList = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductListComponent);
