import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { Context } from '../../Store';
import Content from './Content';
import Sidenav from './Sidenav';

const StyledAdmin = styled.div`
	font-family: 'Roboto';
`
const StyledContent = styled.div`
	margin-left: 300px;
`

const Admin = () =>  (
	<Context.Consumer>
		{state => (
			<StyledAdmin>
				<Sidenav/>
				<StyledContent>
					<Content
					 categories={state.state.categories}
					 updateCategories={state.updateCategories}/>
				</StyledContent>
			</StyledAdmin>
		)
		}
	</Context.Consumer>			
);

export default Admin
