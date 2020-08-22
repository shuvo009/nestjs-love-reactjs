import React, { Component, useState } from "react";
import { Button, Modal } from 'react-bootstrap';
export class ModalWithButton extends Component<IProps, IState> {

    state = {
        isModalShowing: false
    }

    toggleModal = (isShow: boolean) => {
        this.setState({
            ...this.state,
            isModalShowing: isShow
        });
    }

    onCancelClick = () => {
        this.toggleModal(false);
        if (this.props.onCancelClick) {
            this.props.onCancelClick();
        }
    }

    onSaveClick = () => {
        this.toggleModal(false);
        this.props.onSaveClick();
    }

    openModal = () => {
        if (this.props.breforeOpenModal) {
            this.props.breforeOpenModal();
        }
        this.toggleModal(true);
    }

    render() {
        return (
            <>
                <Button variant="primary" className={this.props.buttonClassName} onClick={this.openModal}> {this.props.buttonText} </Button>
                <Modal show={this.state.isModalShowing} onHide={() => { this.toggleModal(false) }}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.modalTitle}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.props.children}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.onCancelClick}>Cancel</Button>
                        <Button variant="primary" onClick={this.onSaveClick}>Save Changes</Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}


interface IProps {
    buttonText: string;
    buttonClassName?: string;
    breforeOpenModal?: () => void;
    onSaveClick(): void;
    onCancelClick?: () => void;
    modalTitle: string;

}

interface IState {
    isModalShowing: boolean;
}