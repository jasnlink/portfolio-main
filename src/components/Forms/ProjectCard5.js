import React, { useState, useEffect, useRef } from 'react';


import { 	
	Typography,
	Container,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	ListItemSecondaryAction,
	Divider,
	AppBar,
	Box,
	Toolbar,
	IconButton,
	FormControl,
	FilledInput,
	OutlinedInput,
	InputLabel,
	InputAdornment,
	FormHelperText,
	Button,
	TextField,
	Input,
	Grid,
	Fade,
	CircularProgress,
	Drawer,
	Paper,
	Chip,
	ToggleButton,
	ToggleButtonGroup,
	ButtonBase,
	Alert,
	Dialog,
	DialogTitle,
	DialogActions,
	DialogContent,
	Collapse,
	Card,
	CardActionArea,
	Stack,
	SvgIcon,
	Link,
	useMediaQuery
 } from '@mui/material';

import { useTheme } from '@mui/material/styles';

import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import '../../index.css';

import Image from './Image'

function ProjectCard5() {

	const theme = useTheme()
	const desktopMode = useMediaQuery(theme.breakpoints.up('md'))

	return (
	<>

			<Card sx={{ backgroundColor: '#141414', border: 'solid #c3c3c33d 1px', color: '#eeeeef', p: '10% 6%' }} square>
				<Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
					<Grid item xs={12}>
						<Typography variant="h3" sx={{ mb: '20px' }}>
							PrimeElo - 2015
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Image src="https://msmtech.ca/wp-content/uploads/2022/04/1.jpg" alt="PrimeElo" />
					</Grid>
					<Grid item xs={12}>
						<Typography variant="h3" sx={{ fontSize: '20px', mt: '20px' }}>
							The problem
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="body1" sx={{ fontSize: '20px', mt: '20px', mb: '20px' }}>
							Players needed a way to rank up with as little effort as possible.
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="h3" sx={{ fontSize: '20px', mt: '20px' }}>
							Purpose
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="body1" sx={{ fontSize: '20px', mt: '20px', mb: '20px' }}>
							This platform allows players that want their ranks to be boosted to book an agent to do it for them.
							On the other end, highly skilled players that want to monetise their abilities can sign up and be paid to play.
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="h3" sx={{ fontSize: '20px', mt: '20px' }}>
							Challenges faced
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="body1" sx={{ fontSize: '20px', mt: '20px' }}>
							I needed to make the website look more trustworthy, so I connected with Facebook and Twitter API to display the number of likes/followers.
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="body1" sx={{ fontSize: '20px' }}>
							I needed a way to let users follow on the progress of the order, so I used PHP to fetch the Riot Games API to see data on the current match being played and the current rank of the user. 
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="body1" sx={{ fontSize: '20px', mb: '20px' }}>
							I needed to reflect the chosen ranks in realtime while also preventing users from choosing a lower desired rank. I used Javascript to calculate the current rank and the desired rank. I used jQuery to fetch realtime prices from my database.
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Image src="https://msmtech.ca/wp-content/uploads/2022/04/2.jpg" alt="Features" />
					</Grid>
					<Grid item xs={12}>
						<Typography variant="h3" sx={{ fontSize: '20px', mt: '20px' }}>
							Technologies used
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="body1" sx={{ fontSize: '20px', mt: '20px', mb: '20px' }}>
							Javascript, jQuery, mySQL, HTML, CSS, PHP
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="h3" sx={{ fontSize: '20px', mt: '20px' }}>
							Features
						</Typography>
						<Typography variant="body1" sx={{ fontSize: '20px', mb: '20px'}}>
							<ul style={{ paddingTop: 0 }}>
								<li>Real time order monitoring.</li>
								<li>Secure login authentication.</li>
								<li>Email contact form.</li>
								<li>Fast and secure Paypal Checkout.</li>
								<li>Agent job board for new orders.</li>
								<li>Intuitive rank selection.</li>
							</ul>
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Link href="https://primeelo.msmtech.ca" underline="none" target="_blank">
							<Button className="btn" fullWidth={!desktopMode} disableRipple>
								See live demo
							</Button>
						</Link>
					</Grid>
				</Grid>
			</Card>

	</>
	)

}
export default ProjectCard5;