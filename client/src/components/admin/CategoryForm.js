import React, { Component } from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

const Form = styled.form`
	background-color: white;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	width:700px;
  	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	padding: 15px;
	font-family: 'Roboto';
`

const StyledButton = styled(Button)`
	width: 100px;
	align-self: center;
`

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});


class CategoryForm extends Component {
	state = {
		name: "",
		description: "",
		products: ""
	}

	handleChange = event => {
		const target = event.target;
    	const value = target.value;
    	const name = target.name;

    	this.setState({
	      [name]: value
	    });
	}

	handleSubmit = event => {
		const { name, description, products} = this.state;
		event.preventDefault();
		alert(`Product: ${name}\nDescription ${description}\nProducts ${products}`)
	}

	render() {
		const { name, description, products } = this.state;
		return (
			<Form onSubmit={this.handleSubmit}>
				<p>Add Category</p>
				<TextField
		          required
		          name="name"
		          label="Name"
		          value={name}
		          onChange={this.handleChange}
		          margin="normal"
		          variant="filled"
		        />
				<TextField
		          required
		          name="description"
		          label="Description"
		          value={description}
		          onChange={this.handleChange}
		          margin="normal"
		          variant="filled"
		        />
				<TextField
				  required
		          name="products"
		          label="Products"
		          value={products}
		          onChange={this.handleChange}
		          type="number"
		          margin="normal"
		          variant="filled"
		        />

				<StyledButton
				 type="submit"
				 variant="contained"
				 size="small"
				 >
					Add
					<Icon>send</Icon>
				</StyledButton>
			</Form>
		);
	}
}


export default CategoryForm
