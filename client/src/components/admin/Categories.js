import React from 'react';
import styled from 'styled-components';

import CategoryForm from './CategoryForm';
import Category from './Category';
import categories from './static-data';


const StyledCategories = styled.div`
	margin-left: 300px;
	padding: 10px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

const Title = styled.h1`
	margin: 0;
	padding: 0;
`

const CategoriesList = styled.table`
	display: grid;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

const Row = styled.tr`
	display: grid;
	grid-template-columns: 100px 500px 100px 50px;

`

const AddButton = styled.div`

`

const Modal = styled.div`
`

const Categories = () => {

	return (
		<StyledCategories>
			<Title>Categories</Title>
			<CategoriesList>
				<thead>
					<Row>
						<th>Name</th>
						<th>Description</th>
						<th>Products</th>
					</Row>
				</thead>
				<tbody>
					{
						categories.map(category => (
							<Category
							 key={category.id}
							 id={category.id}
							 name={category.name}
							 description={category.description}
							 products={category.products}

							/>
							)
						)
					}
				</tbody>				
			</CategoriesList>
			<AddButton>
				<a>
					<i>add</i>
				</a>
			</AddButton>
			<Modal>
				<div>
					<CategoryForm/>
				</div>
			</Modal>
		</StyledCategories>
	)
}

export default Categories