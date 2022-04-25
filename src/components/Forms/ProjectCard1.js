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

function ProjectCard1() {

	const theme = useTheme()
	const desktopMode = useMediaQuery(theme.breakpoints.up('md'))


	return (
	<>

			<Card sx={{ backgroundColor: '#141414', border: 'solid #c3c3c33d 1px', color: '#eeeeef', p: '10% 6%' }} square>
				<Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
					<Grid item xs={12}>
						<Typography variant="h3" sx={{ mb: '20px' }}>
							MealPortal - 2022
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Image src="https://msmtech.ca/wp-content/uploads/2022/04/2-5.jpg" alt="mealportal" direction="vertical" />
						<Image src="https://msmtech.ca/wp-content/uploads/2022/04/8-3.jpg" alt="meal portal" direction="vertical" />
					</Grid>
					<Grid item xs={12}>
						<Typography variant="h3" sx={{ fontSize: '20px', mt: '20px' }}>
							The problem
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="body1" sx={{ fontSize: '20px', mt: '20px', mb: '20px' }}>
							The client needed a modern approach to receive and manage online pickup and delivery orders.
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="h3" sx={{ fontSize: '20px', mt: '20px' }}>
							Purpose
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="body1" sx={{ fontSize: '20px', mt: '20px' }}>
							Customers login with an one-time passcode via their emails and can place online food orders to the restaurant. The software recognizes the returning user by saving a JWT token after they have verified their emails so they don't have to retype their information.
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="body1" sx={{ fontSize: '20px' }}>
							New users can simply autocomplete their addresses with the Google Maps Address autocomplete.
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="body1" sx={{ fontSize: '20px', mb: '20px' }}>
							Restaurant staff can manage orders placed through the backend. They can create, edit, reorder, and remove menu categories, products and product options. They can choose the specific times each category will be displayed at. They can decide delivery fees, order minimum and delivery distance for their orders.
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="h3" sx={{ fontSize: '20px', mt: '20px' }}>
							Challenges faced
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="body1" sx={{ fontSize: '20px', mt: '20px' }}>
							I needed a way to authenticate and remember customers. I did not want users to have to create an account before they have placed an order because this interrupts the user flow and wastes system resources if the user doesn't place an order.
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="body1" sx={{ fontSize: '20px' }}>
							I opted for JSON web tokens to sign and verify authentication because it is a known secure standard. I remember the user with their email and confirm that they actually own the email with a one-time passcode system that issues time-sensitive passcodes to their email.
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="body1" sx={{ fontSize: '20px' }}>
							I needed a way to handle online payments, I decided to connect with the Paypal Payment API because it is a recognisable brand. I also opted for Stripe to handle credit card payments because credit card processing security compliance requires too much resources.
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="body1" sx={{ fontSize: '20px', mb: '20px' }}>
							I needed a way to nofify the staff backend of new incoming orders in realtime. I decided to send the order from the frontend React app to the backend NodeJS server via a POST request. The backend server then inserts the orders and payment details to the MySQL database and then sends the order to the staff React frontend with socket.io.
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Image src="https://msmtech.ca/wp-content/uploads/2022/04/3-6.jpg" alt="mealportal" direction="vertical" />
						<Image src="https://msmtech.ca/wp-content/uploads/2022/04/4-4.jpg" alt="meal portal" direction="vertical" />
					</Grid>
					<Grid item xs={12}>
						<Typography variant="body1" sx={{ fontSize: '20px', mt: '20px', mb: '20px' }}>
							Email one-time passcode authentication
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Image src="https://msmtech.ca/wp-content/uploads/2022/04/6-3.jpg" alt="mealportal" direction="vertical" />
						<Image src="https://msmtech.ca/wp-content/uploads/2022/04/5-3.jpg" alt="meal portal" direction="vertical" />
					</Grid>
					<Grid item xs={12}>
						<Typography variant="body1" sx={{ fontSize: '20px', mt: '20px', mb: '20px' }}>
							Order time selection and Google Maps API address autocomplete.
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Image src="https://msmtech.ca/wp-content/uploads/2022/04/11-2.jpg" alt="mealportal" direction="vertical" />
						<Image src="https://msmtech.ca/wp-content/uploads/2022/04/13.jpg" alt="meal portal" direction="vertical" />
					</Grid>
					<Grid item xs={12}>
						<Typography variant="body1" sx={{ fontSize: '20px', mt: '20px', mb: '20px' }}>
							Placing an order and paying for it.
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Image src="https://msmtech.ca/wp-content/uploads/2022/04/2-4.jpg" alt="message" />
					</Grid>
					<Grid item xs={12}>
						<Typography variant="body1" sx={{ fontSize: '20px', mt: '20px', mb: '20px' }}>
							Order management backend.
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Image src="https://msmtech.ca/wp-content/uploads/2022/04/5-2.jpg" alt="message" />
					</Grid>
					<Grid item xs={12}>
						<Typography variant="body1" sx={{ fontSize: '20px', mt: '20px', mb: '20px' }}>
							Menu customization dialog.
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Image src="https://msmtech.ca/wp-content/uploads/2022/04/8-2.jpg" alt="message" />
					</Grid>
					<Grid item xs={12}>
						<Typography variant="body1" sx={{ fontSize: '20px', mt: '20px', mb: '20px' }}>
							Menu schedule planning tool.
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Image src="https://msmtech.ca/wp-content/uploads/2022/04/9.jpg" alt="message" />
					</Grid>
					<Grid item xs={12}>
						<Typography variant="body1" sx={{ fontSize: '20px', mt: '20px', mb: '20px' }}>
							Restaurant delivery zone fees and distance planning tool.
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="h3" sx={{ fontSize: '20px', mt: '20px' }}>
							Technologies used
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="body1" sx={{ fontSize: '20px', mt: '20px', mb: '20px' }}>
							Javascript, React, Material UI, REST API, JSON web token authentication, Google Maps Javascript API, Paypal Payment SDK, Stripe Payment Gateway, NodeJS, MySQL, HTML, CSS, NGINX, Linux
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="h3" sx={{ fontSize: '20px', mt: '20px' }}>
							Features
						</Typography>
						<Typography variant="body1" sx={{ fontSize: '20px', mb: '20px'}}>
							<ul style={{ paddingTop: 0 }}>
								<li>Easy to use UI for customers and staff for order placement and order management.</li>
								<li>Secure and convenient user recognition and authentication with locally stored JWT tokens and one-time passcode system.</li>
								<li>Eliminate wrong delivery addresses for orders with Google Maps Address autocomplete.</li>
								<li>Realtime order management with socket.io technology.</li>
								<li>Fully customize your menu categories, products and product options.</li>
								<li>Control menu hours, delivery zones, delivery fees, and order minimums.</li>
							</ul>
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Link href="https://staging.2kfusion.com/app" underline="none" target="_blank">
							<Button className="btn" fullWidth={!desktopMode} disableRipple>
								See live demo
							</Button>
						</Link>
					</Grid>
					<Grid item xs={12}>
						<Link href="https://github.com/jasnlink/pickup_delivery_system" underline="none" target="_blank">
							<Button className="btn-outline" fullWidth={!desktopMode} disableRipple>
								View code on Github
							</Button>
						</Link>
					</Grid>
				</Grid>
			</Card>

	</>
	)

}
export default ProjectCard1;