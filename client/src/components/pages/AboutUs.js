import React from 'react';
import styled from 'styled-components';
import {Grid,Paper} from '@material-ui/core/';
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
const AboutUs = () => (
	<Paper>
		<Grid container >
			<Grid item xs={12}>
				<BackgroundImg>
					<h2>About us</h2>
				</BackgroundImg>
			</Grid>

			<Grid item sm={4}>
			  <HoverZoom>
				<ZoomImg src={require("/src/images/banner-14.jpg")}  />
			  </HoverZoom>
			</Grid>
			<Grid item sm={8}>
				<h3 class="m-text26 p-t-15 p-b-16">
					Our story
				</h3>

				<p class="p-b-28">
					Phasellus egestas nisi nisi, lobortis ultricies risus semper nec. Vestibulum pharetra ac ante ut pellentesque. Curabitur fringilla dolor quis lorem accumsan, vitae molestie urna dapibus. Pellentesque porta est ac neque bibendum viverra. Vivamus lobortis magna ut interdum laoreet. Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula. Vivamus tristique vulputate ultricies. Sed vitae ultrices orci.
				</p>

				<div class="bo13 p-l-29 m-l-9 p-b-10">
					<p class="p-b-11">
						Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while.
					</p>

					<span class="s-text7">
						- Steve Job’s
					</span>
				</div>
			</Grid>
		</Grid>
	</Paper>
	);
	
	export default AboutUs;