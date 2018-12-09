import React, { Component, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import InputBase from '@material-ui/core/InputBase';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Modal from '@material-ui/core/Modal';

import EditCategory from './EditCategory';

const StyledInput = styled(InputBase)`
	background-color: none;
`

class Category extends Component {

	state = {
		editable: false,
		name: this.props.name,
		description: this.props.description,
		products: this.props.products
	}

	handleEdit = (e) => {
		e.preventDefault();
		const { editable, name } = this.state;

		if(editable) {
			this.setState({ editable: false});
		} else {
			this.setState({ editable: true })
		}
	}

	handleChange = e => {
		const target = e.target;
    	const value = target.value;
    	const name = target.name;

    	this.setState({
	      [name]: value
	    });
	}

	render(){
		const { editable, name, description, products } = this.state;
		return(
			<Fragment>
					<TableRow>
						<TableCell>{name}</TableCell>
						<TableCell>{description}</TableCell>
						<TableCell numeric>{products}</TableCell>
						<TableCell><Button onClick={this.handleEdit}>Edit</Button></TableCell>
					</TableRow>
					<Modal
					 aria-labelledby="simple-modal-title"
          		 	 aria-describedby="simple-modal-description"
					 open={editable}
					 onClose={this.handleEdit}>
						<EditCategory
						 name={name}
						 description={description}
						 products={products}
						 handleChange={this.handleChange}
						 handleEdit={this.handleEdit}
						 />
					</Modal>
			</Fragment>
		)
	}
}

export default Category