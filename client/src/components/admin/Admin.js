import React, { Component } from 'react';
import styled from 'styled-components';

import Categories from './Categories';
import Sidenav from './Sidenav';

const StyledAdmin = styled.div`
	font-family: 'Roboto';
`

class Admin extends Component {
	render() {
		return (
			<StyledAdmin>
				<Sidenav/>
				<Categories/>
			</StyledAdmin>
		);
	}
}

export default Admin
