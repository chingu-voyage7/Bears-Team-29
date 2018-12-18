import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/icons/NavigateNext';

const StyledDrawer = styled(({ ...other }) => (
	<Drawer {...other} classes={{ paper: 'paper' }}/>
))`
	& .paper {
		width: 300px;
	}
`

const StyledTitle = styled.p`
	text-align: center;
  	font-size: 25px;
  	margin: 10px;
`

const Sidenav = () => {

	return(
		<div>
			<StyledDrawer
	        variant="permanent"
	        anchor="left">
		        <StyledTitle>eCommerce</StyledTitle>
		        <Divider />
		        <List>
		          {['Dashboard', 'Categories', 'Products'].map((text, index) => (
		            <ListItem
		             component={Link}
		             to={text !== "Dashboard"
		             	?`/admin/${text.toLowerCase()}`
		             	: `/admin`
		             	}
		             key={text}
		             button
		             >
		              <ListItemIcon><Icon/></ListItemIcon>
		              <ListItemText primary={text} />
		            </ListItem>
		          ))}
		        </List>
      		</StyledDrawer>
		</div>
	)
}

export default Sidenav