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

function ProjectCard4() {

	const theme = useTheme()
	const desktopMode = useMediaQuery(theme.breakpoints.up('sm'))

	return (
	<>

			<Card sx={{ backgroundColor: '#141414', border: 'solid #c3c3c33d 1px', color: '#eeeeef', p: '10% 6%' }} square>
				<Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
					<Grid item xs={12}>
						<Typography variant="h3" sx={{ mb: '20px' }}>
							MSM Technologies - 2017
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Image src="https://msmtech.ca/wp-content/uploads/2022/04/8.jpg" alt="msmtech" />
					</Grid>
					<Grid item xs={12}>
						<Typography variant="h3" sx={{ fontSize: '20px', mt: '20px' }}>
							The problem
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="body1" sx={{ fontSize: '20px', mt: '20px', mb: '20px' }}>
							I needed a way to advertise my web development services online.
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="h3" sx={{ fontSize: '20px', mt: '20px' }}>
							Purpose
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="body1" sx={{ fontSize: '20px', mt: '20px', mb: '20px' }}>
							This website describes the services I offer while giving the prospecting customer different ways to contact me.
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="h3" sx={{ fontSize: '20px', mt: '20px' }}>
							Challenges faced
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="body1" sx={{ fontSize: '20px', mt: '20px', mb: '20px' }}>
							I needed hosting that was fast and reliable, I decided to provision a VPS and install my own LAMP stack and installed Wordpress.
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Image src="https://msmtech.ca/wp-content/uploads/2022/04/3-1.jpg" alt="message" />
					</Grid>
					<Grid item xs={12}>
						<Image src="https://msmtech.ca/wp-content/uploads/2022/04/6.jpg" alt="message" />
					</Grid>
					<Grid item xs={12}>
						<Image src="https://msmtech.ca/wp-content/uploads/2022/04/8-1.jpg" alt="message" />
					</Grid>
					<Grid item xs={12}>
						<Typography variant="h3" sx={{ fontSize: '20px', mt: '20px' }}>
							Technologies used
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="body1" sx={{ fontSize: '20px', mt: '20px', mb: '20px' }}>
							Javascript, MySQL, HTML, CSS, PHP, Wordpress, Apache, Linux
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Link href="https://msmtech.ca" underline="none" target="_blank">
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
export default ProjectCard4;