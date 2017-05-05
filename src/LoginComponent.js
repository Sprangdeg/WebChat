import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormField, FormInput, Checkbox } from 'elemental' 


export default class Login extends React.Component {
  render() {
    return (
      <Modal isOpen={true}>
				<ModalHeader text="Modal Header" />
				<ModalBody>
					<Form>
						<FormField label="Email address" htmlFor="basic-form-input-email">
							<FormInput autoFocus type="email" placeholder="Enter email" name="basic-form-input-email" />
						</FormField>
						<FormField label="Password" htmlFor="basic-form-input-password">
							<FormInput type="password" placeholder="Password" name="basic-form-input-password" />
						</FormField>
					</Form>
				</ModalBody>
				<ModalFooter>
					<Button type="primary">Login</Button>
					<Button type="link-cancel">Cancel</Button>
				</ModalFooter>
			</Modal>
    );
  }
}





