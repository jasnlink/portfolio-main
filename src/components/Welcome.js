import React, { useState, useEffect, useRef } from 'react';


import { 	
	Typography,
	Container,
	List,
	ListItem,
	Divider,
	Button,
	Grid,
	Paper,
	Card,
	Avatar,
	Link,
	useMediaQuery
 } from '@mui/material';

import { LoadingButton } from '@mui/lab';

import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import { useTheme } from '@mui/material/styles';

import '../index.css';


function Welcome() {

	const theme = useTheme()
	const desktopMode = useMediaQuery(theme.breakpoints.up('md'))

	return (
	<>
	
			<Grid item xs={12} md={10} style={desktopMode ? { maxHeight: '100vh', overflow: 'auto', backgroundColor: '#141414' } : { maxHeight: '100vh', overflow: 'auto', backgroundColor: '#141414' } }>
				<Container maxWidth="sm" sx={desktopMode ? { mt: '12vh', mb: '12vh', minHeight: '76vh' } : { mt: '12vh', mb: '24vh', minHeight: '64vh' }}>
					<Card sx={{ backgroundColor: '#262626', border: 'solid #c3c3c33d 1px', color: '#eeeeef', p: '10% 10%' }} square>
						<Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
							<Grid item xs={12}>
								<Avatar
									alt="Jason Che"
									src="https://msmtech.ca/wp-content/uploads/2022/02/IMG_9236.jpg"
									sx={{ width: 128, height: 128 }}
								/>
							</Grid>
							<Grid item xs={12} sx={{ mt: 2 }}>
								<Typography variant="h3">
									Jason Che
								</Typography>
							</Grid>
							<Grid item xs={12}>
								<Typography variant="body1" sx={{ fontSize: '20px', mt: '20px' }}>
									I am a <strong className="p-strong">full stack web software developer</strong> with a specialization in <strong className="p-strong">Javascript and React</strong>.
								</Typography>
							</Grid>
							<Grid item xs={12}>
								<Typography variant="body1" sx={{ fontSize: '20px', mt: '20px' }}>
									My focus is on product vision, connecting frontend with backend technologies, and UI/UX design.
								</Typography>
							</Grid>
							<Grid item xs={12}>
								<List>
									<ListItem>
										<Typography variant="body1" sx={{ fontSize: '20px'}}>
											Frontend: 10 years
										</Typography>
									</ListItem>
									<ListItem>
										<Typography variant="body1" sx={{ fontSize: '20px'}}>
											Full Stack: 9 years
										</Typography>
									</ListItem>
								</List>
							</Grid>
							<Grid item xs={12} sx={{ mt: 2 }}>
								<Link href="https://msmtech.ca/wp-content/uploads/2022/09/Jason-Che_CV-en-v13.pdf" underline="none" target="_blank">
									<Button className="btn" disableRipple fullWidth>
										See my resume
									</Button>
								</Link>
							</Grid>
						</Grid>
					</Card>
				</Container>
			</Grid>

	</>
	)

}
export default Welcome;