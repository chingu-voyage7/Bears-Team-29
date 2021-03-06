import React, { Component } from 'react';
import styled from 'styled-components';
import Modal from '@material-ui/core/Modal';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import CategoryForm from './CategoryForm';
import Category from './Category';


const StyledCategories = styled.div`
	padding: 10px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
`

const Title = styled.h1`
	margin: 15px 0 0 0;
	padding: 0;
	font-weight: normal;
`

const AddButton = styled.div`
	margin-top: 20px;
`

class Categories extends Component {

	state = {
		open: false
	}

	handleModal = () => {
		const { open } = this.state;

		if(open) {
			this.props.updateCategories()
			this.setState({ open: false });
		}
		else {
			this.setState({ open: true });
		}
	}


	render(){
		const { open } = this.state;
		const { categories } = this.props;
		return (
			<StyledCategories>
				<Title>Categories</Title>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Name</TableCell>
							<TableCell>Description</TableCell>
							<TableCell numeric>Products</TableCell>
							<TableCell></TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{
							categories === null || categories === []
							?
							<TableRow>
								<TableCell>Please add categories</TableCell>
							</TableRow>
							:
							categories.map(category => (
								<Category
								 key={category._id}
								 id={category.id}
								 name={category.name}
								 description={category.description}
								 products={category.products}
								 handleChange={this.handleChange}
								/>
								)
							)
						}
					</TableBody>				
				</Table>
				<AddButton>
					<Fab onClick={this.handleModal} color="inherit" aria-label="Add" >
			        	<AddIcon />
			    	</Fab>
				</AddButton>
				<Modal
				 aria-labelledby="simple-modal-title"
          		 aria-describedby="simple-modal-description"
				 open={open}
				 onClose={this.handleModal}>
					<CategoryForm handleModal={this.handleModal}/>
				</Modal>
			</StyledCategories>
		)
	}
}
	

export default Categories