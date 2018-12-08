import React from 'react';
import {Grid,Paper,Button} from '@material-ui/core/';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import img from '/src/images/heading-pages-06.jpg';

const HoverZoom = styled.div`
	display: block;
    overflow: hidden;
    padding: 15px 15px 30px 15px;
`
const ZoomImg = styled.img`
	width: 100%;
	-webkit-transition: all 0.6s;
	-o-transition: all 0.6s;
	-moz-transition: all 0.6s;
	transition: all 0.6s;
`
const BackgroundImg = styled.div`
	background-image: url(${img});
	width: 100%;
	min-height: 239px;
	padding-left: 15px;
	padding-right: 15px;
	background-repeat: no-repeat;
	background-position: center 0;
	background-size: cover;
	-ms-align-items: center;
	align-items: center;
	justify-content: center;
	padding-top: 40px;
	padding-bottom: 50px;
	display: -webkit-box;
	display: -webkit-flex;
	display: -moz-box;
	display: -ms-flexbox;
	display: flex;
`
const ContactUs = () => (
<Paper>
	<Grid container >
		<Grid item xs={12}>
			<BackgroundImg>
				<h2>Contact</h2>
			</BackgroundImg>
		</Grid>

		<Grid item sm>
			<HoverZoom>
				<ZoomImg src={require("/src/images/banner-14.jpg")}  />
			  </HoverZoom>
		</Grid>
		<Grid item sm>
			<React.Fragment>
		      <Typography variant="h6" gutterBottom>
		        Send us your message
		      </Typography>
		      <Grid container spacing={24}>
		        <Grid item xs={12} >
		          <TextField
		            required
		            id="fullName"
		            name="firstName"
		            label="Full name"
		            fullWidth
		            autoComplete="fname"
		          />
		        </Grid>
		        <Grid item xs={12} >
		          <TextField
		            required
		            id="phoneNo"
		            name="phoneNo"
		            label="Phone No"
		            fullWidth
		            autoComplete="phoneno"
		          />
		        </Grid>
		        <Grid item xs={12}>
		          <TextField
		            required
		            id="email"
		            name="email"
		            label="Email Address"
		            fullWidth
		            autoComplete="billing address-line1"
		          />
		        </Grid>
		       
		        <Grid item xs={12} sm={6}>
		         <TextField
		          id="filled-multiline-flexible"
		          label="Multiline"
		          multiline
		          rowsMax="4"
		          margin="normal"
		          helperText="hello"
		        />
		        </Grid>
		      </Grid>
		      <Button
                  variant="contained"
                  color="primary"
                >Send
			  </Button>
		</React.Fragment>
		</Grid>
	</Grid>
</Paper>
	);
export default ContactUs;