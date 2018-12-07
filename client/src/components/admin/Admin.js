import React, { Component } from 'react';
import styled from 'styled-components';

import Categories from './Categories';
import Sidenav from './Sidenav';

const StyledAdmin = styled.div`
	
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
