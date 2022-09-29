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

function ProjectCard1() {

	const theme = useTheme()
	const desktopMode = useMediaQuery(theme.breakpoints.up('md'))


	return (
	<>

				<Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
					<Grid item xs={12}>
						<Typography variant="h3" sx={{ mb: '20px' }}>
							realPOS - 2022
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Image src="https://msmtech.ca/wp-content/uploads/2022/09/4.png" alt="realpos" direction="horizontal" />
						<Image src="https://msmtech.ca/wp-content/uploads/2022/09/4.png" alt="realpos" direction="horizontal" />
					</Grid>
					<Grid item xs={12}>
						<Typography variant="h3" sx={{ fontSize: '20px', mt: '20px' }}>
							Purpose
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="body1" sx={{ fontSize: '20px', mt: '20px' }}>
							This is intended to be used as a standalone, centralised, offline POS software system. It is operating system agnostic thanks to the Election.js wrapper. It is made with web technologies so it is very quick and easy to make modifications to its functionality and layout.
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="body1" sx={{ fontSize: '20px', mt: '20px' }}>
							It is made to be offline and system agnostic so that it can be used on any system available be completely secure and reliable.
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="body1" sx={{ fontSize: '20px' }}>
							It uses a simple and intuitive button bar layout at the bottom to easily manage billing, customers and tables with a touch screen.
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="h3" sx={{ fontSize: '20px', mt: '20px' }}>
							Challenges faced
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="body1" sx={{ fontSize: '20px', mt: '20px' }}>
							It is not easy to adapt web technologies into a native desktop environment. Electron.js combined with SQLite is not easy to setup out of the box.
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="body1" sx={{ fontSize: '20px' }}>
							Data structures start to get more complex as the functionality started to expand.
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Image src="https://msmtech.ca/wp-content/uploads/2022/09/1.png" alt="realpos" direction="horizontal" />
						<Image src="https://msmtech.ca/wp-content/uploads/2022/09/2.png" alt="realpos" direction="horizontal" />
					</Grid>
					<Grid item xs={12}>
						<Typography variant="body1" sx={{ fontSize: '20px', mt: '20px', mb: '20px' }}>
							Uses a keypad system to quickly punch in tables.
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Image src="https://msmtech.ca/wp-content/uploads/2022/09/5.png" alt="realpos" direction="horizontal" />
					</Grid>
					<Grid item xs={12}>
						<Typography variant="body1" sx={{ fontSize: '20px', mt: '20px', mb: '20px' }}>
							Intuitive bill splitting screen.
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="h3" sx={{ fontSize: '20px', mt: '20px' }}>
							Technologies used
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="body1" sx={{ fontSize: '20px', mt: '20px', mb: '20px' }}>
							Javascript, React, Bootstrap, Electron.js, SQLite
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="h3" sx={{ fontSize: '20px', mt: '20px' }}>
							Features
						</Typography>
						<Typography variant="body1" sx={{ fontSize: '20px', mb: '20px'}}>
							<ul style={{ paddingTop: 0 }}>
								<li>Centralised and offline system for maximum security and reliability.</li>
								<li>Operating system agnostic, it will work on any system.</li>
								<li>Intuitive interface adapted for touchscreens.</li>
								<li>Easily manage orders, customers and tables with multiple staff members.</li>
								<li>Full customization to the menu.</li>
							</ul>
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Link href="https://github.com/jasnlink/pos-system-b" underline="none" target="_blank">
							<Button className="btn" fullWidth={!desktopMode} disableRipple>
								View code on Github
							</Button>
						</Link>
					</Grid>
				</Grid>

	</>
	)

}
export default ProjectCard1;