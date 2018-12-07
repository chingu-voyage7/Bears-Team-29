import React, { Component } from 'react';
import styled from 'styled-components';

const Form = styled.form`
`

const StyledInput = styled.div`
`

const Submit = styled.input`
`

class CategoryForm extends Component {
	state = {
		name: "",
		description: "",
		products: 0
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
		return (
			<Form onSubmit={this.handleSubmit}>
				<h4>Add Category</h4>
				<StyledInput>
					<input id="name"
						   name="name"
						   type="text"
						   onChange={this.handleChange}/>
					<label htmlFor="name">Name</label>				
				</StyledInput>
				<StyledInput>
					<input id="description"
						   name="description"
						   type="text"
						   onChange={this.handleChange}/>
					<label htmlFor="description">Description</label>				
				</StyledInput>
				<StyledInput>
					<input id="products"
						   name="products"
						   type="number"
						   onChange={this.handleChange}/>
					<label htmlFor="products">Products</label>				
				</StyledInput>

				<Submit className="btn" type="submit" value="Add"/>
			</Form>
		);
	}
}


export default CategoryForm
