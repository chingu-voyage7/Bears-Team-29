import React, { Component } from 'react';
import styled from 'styled-components';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Category from './Category';

const StyledProducts = styled.div`
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

class Products extends Component{

	render(){
		return (
			<StyledProducts>
				<Title>Products</Title>
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
					</TableBody>				
				</Table>
			</StyledProducts>
		)
	}
}


export default Products