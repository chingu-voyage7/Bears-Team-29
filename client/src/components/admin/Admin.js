import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Content from './Content';
import Sidenav from './Sidenav';

const StyledAdmin = styled.div`
	font-family: 'Roboto';
`
const StyledContent = styled.div`
	margin-left: 300px;
`

class Admin extends Component {

	state = {
		categories: null
	}

	componentDidMount(){
		axios.get('/api/categories')
		.then(result => this.setState({categories: result.data}))
		.catch(err =>  console.log(err));
	}
	updateCategories = () => {
		axios.get('/api/categories')
		.then(result => this.setState({categories: result.data}))
		.catch(err =>  console.log(err));
	}

	render() {
		const { categories } = this.state;
		return (
			<StyledAdmin>
				<Sidenav/>
				<StyledContent>
					<Content
					 categories={categories}
					 updateCategories={this.updateCategories}/>
				</StyledContent>
			</StyledAdmin>			
		);
	}
}

export default Admin
