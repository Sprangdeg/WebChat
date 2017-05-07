import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormField, FormInput, Checkbox } from 'elemental' 


export default class Login extends React.Component {
  render() {
    return (
      <Modal isOpen={true}>
				<ModalHeader text="Login in to chat" />
				<ModalBody>
					<Form>
						<FormField label="Username" htmlFor="basic-form-input-email">
							<FormInput autoFocus type="text" placeholder="Enter username" name="basic-form-input-email" />
						</FormField>
						<FormField label="Password" htmlFor="basic-form-input-password">
							<FormInput type="password" placeholder="Password" name="basic-form-input-password" />
						</FormField>
					</Form>
				</ModalBody>
				<ModalFooter>
					<Button type="primary" style={{margin: 3}} onClick={loginUser}>Login</Button>
					<Button type="default-danger" style={{margin: 3}} onClick={alert("What should happen?")}>Cancel</Button>
				</ModalFooter>
			</Modal>
    );
  }
}





