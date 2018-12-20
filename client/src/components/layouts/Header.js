import React from 'react';
import {Button,AppBar,Toolbar,MenuList,MenuItem } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import {Link} from 'react-router-dom';
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  regular: {
  	background: 'white',
	justifyContent: 'center',
  },
};

const LogoLink = styled(Link)`
	display: block;
	position: absolute;
	left: 52px;
	top: 50%;
	-webkit-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-o-transform: translateY(-50%);
	transform: translateY(-50%);
`
const StyledMenuIcon = styled.div`
	position:absolute;
	right:0;
`

const img = <img src={require("../../images/icons/logo.png")}/>

const Header = (props) =>{
	const { classes } = props;
  return (
	<div className="header-wrap">
      <CssBaseline/>
	  <AppBar position="sticky">
        <Toolbar classes={{
	        regular: classes.regular, // class name, e.g. `classes-nesting-root-x`
	      }}>
	      <LogoLink to="/">{img}</LogoLink>

        <div>
	         <Button href="/home" >
		        Home
		     </Button>
		     <Button href="/home/shop" >
		        Shop
		     </Button>
		     <Button href="/home/sale" >
		        Sale
		     </Button>
		     <Button href="/home/feature" >
		        Feature
		     </Button>
		     <Button href="/home/about" >
		        About us
		     </Button>
		     <Button href="/home/contactus" >
		        Contact us
		     </Button>
		</div>
		<StyledMenuIcon>
			<IconButton>
		        <AccountCircle />

		    </IconButton>	
		    <IconButton>
		        <AddShoppingCart />

		    </IconButton>
		     <Button href="/admin" >
		        Admin
		     </Button>
		</StyledMenuIcon>
        </Toolbar>
      </AppBar>
	</div>
	)};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
