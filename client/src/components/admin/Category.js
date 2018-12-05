import React from 'react';
import styled from 'styled-components';

const Row = styled.tr`
	display: grid;
	grid-template-columns: 100px 500px 100px 50px;
`

const Category = ({name, description, products}) => (
	<Row>
		<td>{name}</td>
		<td>{description}</td>
		<td>{products}</td>
		<td><button>Edit</button></td>
	</Row>
)

export default Category