import React from 'react';
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

const EditCategory = ({name, description, products, handleChange, handleEdit}) => (
	<Form
	 onSubmit={handleEdit}>
		<TextField
		  required
		  name="name"
		  label="Name"
          value={name}
          onChange={handleChange}
          margin="normal"
          variant="filled"
        />
		<TextField
          required
          name="description"
          label="Description"
          value={description}
          onChange={handleChange}
          margin="normal"
          variant="filled"
        />
		<TextField
		  required
          name="products"
          label="Products"
          value={products}
          onChange={handleChange}
          type="number"
          margin="normal"
          variant="filled"
        />

		<StyledButton
		 type="submit"
		 variant="contained"
		 size="small"
		 >
		Save
			<Icon>save</Icon>
		</StyledButton>		
	</Form>
)

export default EditCategory