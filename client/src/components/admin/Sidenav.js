import React from 'react';
import styled from 'styled-components';

const StyledSidenav = styled.ul`
	width: 300px;
`
const NavTitle = styled.h4`
	margin-left: 20px;
`
const Sidenav = () => {

	return(
		<StyledSidenav>
			<NavTitle>eCommerce</NavTitle>
			    <li><a href="#!">Dashboard</a></li>
			    <li><a href="#!">Categories</a></li>
			    <li><a href="#!">Products</a></li>
		</StyledSidenav>
	)
}

export default Sidenav