import React from 'react';

import { 	
	Grid,
	Typography,
	Button,
	Link,
	useMediaQuery
 } from '@mui/material';

import { useTheme } from '@mui/material/styles';

import '../../index.css';

import Image from './Image'

function ProjectCard3() {

	const theme = useTheme()
	const desktopMode = useMediaQuery(theme.breakpoints.up('md'))

	return (
	<>

				<Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
					<Grid item xs={12}>
						<Typography variant="h3" sx={{ mb: '20px' }}>
							SimpleMenu - 2020
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Image src="https://msmtech.ca/wp-content/uploads/2022/04/3-2.jpg" alt="menu" direction="vertical" />
						<Image src="https://msmtech.ca/wp-content/uploads/2022/04/4.jpg" alt="menu" direction="vertical" />
					</Grid>
					<Grid item xs={12}>
						<Typography variant="h3" sx={{ fontSize: '20px', mt: '20px' }}>
							The problem
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="body1" sx={{ fontSize: '20px', mt: '20px', mb: '20px' }}>
							The client needed a way to let their customers browse their menu online.
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="h3" sx={{ fontSize: '20px', mt: '20px' }}>
							Purpose
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="body1" sx={{ fontSize: '20px', mt: '20px', mb: '20px' }}>
							This app lets customers browse through the restaurant's menu and see what they have.
							When customers place an order, a QR code is generated on their phone screen. They can then show the code to the cashier to let them know what they ordered.
							This works well when the customer wants to start an order but the cashier is busy while also not letting the customer directly place an order either.
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="h3" sx={{ fontSize: '20px', mt: '20px' }}>
							Challenges faced
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="body1" sx={{ fontSize: '20px', mt: '20px' }}>
							I needed to host the frontend and the backend on the same VPS.
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="body1" sx={{ fontSize: '20px' }}>
							I served the frontend on an NGINX web server with built static React files. The backend is a nodeJS server with Express middleware listening on a different port. The problem is that NGINX would interfere with API requests made to this port. I resolved this by setting up a proxy pass for API requests in the NGINX settings.
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="body1" sx={{ fontSize: '20px' }}>
							I needed way to let users manage their menu via an easy to use interface.
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="body1" sx={{ fontSize: '20px', mb: '20px' }}>
							I created a CRUD interface to interact with the MySQL database. It also needed to be secured with a login authentication.
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Image src="https://msmtech.ca/wp-content/uploads/2022/04/5.jpg" alt="menu" direction="vertical" />
						<Image src="https://msmtech.ca/wp-content/uploads/2022/04/6-1.jpg" alt="menu" direction="vertical" />
					</Grid>
					<Grid item xs={12}>
						<Typography variant="body1" sx={{ fontSize: '20px', mt: '20px', mb: '20px' }}>
							Customers get an order summary and a QR code that they present to the cashier. 
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Image src="https://msmtech.ca/wp-content/uploads/2022/04/11.jpg" alt="message" />
					</Grid>
					<Grid item xs={12}>
						<Typography variant="body1" sx={{ fontSize: '20px', mt: '20px', mb: '20px' }}>
							Management backend to allow the staff to make changes to the menu.
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="h3" sx={{ fontSize: '20px', mt: '20px' }}>
							Technologies used
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="body1" sx={{ fontSize: '20px', mt: '20px', mb: '20px' }}>
							Javascript, React, Material UI, nodeJS, Express, MySQL, HTML, CSS, NGINX, Git, Linux
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="h3" sx={{ fontSize: '20px', mt: '20px' }}>
							Features
						</Typography>
						<Typography variant="body1" sx={{ fontSize: '20px', mb: '20px'}}>
							<ul style={{ paddingTop: 0 }}>
								<li>Easy to navigate interactive menu, select and zoom to get more information on each product.</li>
								<li>Cart system with order summary to easily summarize what we want to order.</li>
								<li>Easily generate a QR code with order information to let staff know what you ordered.</li>
								<li>Create, edit, reorder and remove items with the secured management backend.</li>
							</ul>
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Link href="https://mitsuki.qbmenu.ca" underline="none" target="_blank">
							<Button className="btn" fullWidth={!desktopMode} disableRipple>
								See live demo
							</Button>
						</Link>
					</Grid>
					<Grid item xs={12}>
						<Link href="https://github.com/jasnlink/interactive_menu" underline="none" target="_blank">
							<Button className="btn-outline" fullWidth={!desktopMode} disableRipple>
								View code on Github
							</Button>
						</Link>
					</Grid>
				</Grid>

	</>
	)

}
export default ProjectCard3;