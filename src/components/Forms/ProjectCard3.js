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
							AYCEHub - 2021
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Image src="https://msmtech.ca/wp-content/uploads/2022/04/AnimationFull1.gif" alt="foodhub" />
					</Grid>
					<Grid item xs={12}>
						<Typography variant="h3" sx={{ fontSize: '20px', mt: '20px' }}>
							The problem
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="body1" sx={{ fontSize: '20px', mt: '20px', mb: '20px' }}>
							All you can eat restaurants need a way for customers order food and send it directly to the kitchen.
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="h3" sx={{ fontSize: '20px', mt: '20px' }}>
							Purpose
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="body1" sx={{ fontSize: '20px', mt: '20px' }}>
							This app allows customers to scan a QR code at the table and start ordering. When the order is placed, the order is printed directly in the kitchen.
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="body1" sx={{ fontSize: '20px' }}>
							This solution removes the need to use paper checklists to capture orders and reduces the amount of staff needed to run the restaurant.
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="body1" sx={{ fontSize: '20px', mb: '20px' }}>
							This is a better and lower cost solution to using tablets at every table with the advent of COVID.
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="h3" sx={{ fontSize: '20px', mt: '20px' }}>
							Challenges faced
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="body1" sx={{ fontSize: '20px', mt: '20px' }}>
							I needed a way to bridge orders placed on the web app to local thermal printers.
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="body1" sx={{ fontSize: '20px', mb: '20px' }}>
							I used a local machine running a nodeJS server that listens for socket.io requests from the web app's backend. The local machine receives the orders placed and then sends them to be printed on thermal printers in the kitchen.
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Image src="https://msmtech.ca/wp-content/uploads/2022/04/4-2.jpg" alt="menu" direction="vertical" />
						<Image src="https://msmtech.ca/wp-content/uploads/2022/04/2-3.jpg" alt="menu" direction="vertical" />
					</Grid>
					<Grid item xs={12}>
						<Typography variant="body1" sx={{ fontSize: '20px', mt: '20px', mb: '20px' }}>
							Customer view after scanning the QR code.
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Image src="https://msmtech.ca/wp-content/uploads/2022/04/2-2.jpg" alt="order management" />
					</Grid>
					<Grid item xs={12}>
						<Typography variant="body1" sx={{ fontSize: '20px', mt: '20px', mb: '20px' }}>
							Order management screen to see what each table ordered.
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Image src="https://msmtech.ca/wp-content/uploads/2022/04/1-2.jpg" alt="table management" />
					</Grid>
					<Grid item xs={12}>
						<Typography variant="body1" sx={{ fontSize: '20px', mt: '20px', mb: '20px' }}>
							Table management system to manage orders and QR codes assigned.
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
								<li>Included QR code scanner on the web app.</li>
								<li>Conveniently assign QR codes and print them to each table with the table management system.</li>
								<li>Easily navigate the menu and place orders to be placed. </li>
								<li>Magically send orders straight to the kitchen, removing the need for paper checklists and reducing the number of staff needed.</li>
								<li>Create, edit, reorder and remove items with the management backend.</li>
							</ul>
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Link href="https://arandesign.ca/table/110/52" underline="none" target="_blank">
							<Button className="btn" fullWidth={!desktopMode} disableRipple>
								See live demo
							</Button>
						</Link>
					</Grid>
					<Grid item xs={12}>
						<Link href="https://github.com/jasnlink/qr_order" underline="none" target="_blank">
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