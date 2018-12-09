import React from 'react';
import {Typography, Grid,Button,AppBar,Toolbar } from '@material-ui/core';
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import styled from 'styled-components';
const FooterCustom = styled.footer`
	background-color: #f0f0f0;
	padding: 45px 45px 43px 45px;
`

const StyledGrid = styled(Grid)`
	padding-top: 15px
`
const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one'],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];


const Footer = () =>
	<React.Fragment>
      <CssBaseline />
      {/* Footer */}
      <FooterCustom >
        <StyledGrid container spacing={32} justify="space-evenly">
          {footers.map(footer => (
            <Grid item xs key={footer.title}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              {footer.description.map(item => (
                <Typography key={item} variant="subtitle1" color="textSecondary">
                  {item}
                </Typography>
              ))}
            </Grid>
          ))}
        </StyledGrid>
      </FooterCustom>
      {/* End footer */}
		</React.Fragment>;

export default Footer;