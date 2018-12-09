import React from 'react';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/icons/NavigateNext';
import MailIcon from '@material-ui/icons/Mail';

const drawerWidth = 300;

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
		            <ListItem button key={text}>
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