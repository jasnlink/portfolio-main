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
	Avatar,
	Link
 } from '@mui/material';

import { LoadingButton } from '@mui/lab';

import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import '../index.css';


function Welcome() {

	return (
	<>

			<Grid item sm={12} md={10} style={{ maxHeight: '100vh', overflow: 'auto', backgroundColor: '#141414' }}>
				<Container maxWidth="sm" sx={{ pt: '12vh', pb: '12vh' }}>
					<Paper sx={{ minHeight: '100vh', backgroundColor: '#141414' }} elevation={0} square>
							<Card sx={{ backgroundColor: '#141414', border: 'solid #c3c3c33d 1px', color: '#eeeeef', p: '10% 10%' }} square>
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
											I am a <strong>full stack web developer</strong> with a specialization in <strong>Javascript and React</strong>.
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
										<Link href="https://msmtech.ca/wp-content/uploads/2022/04/Jason-Man-Xing-Che_CV-en-v8.pdf" underline="none" target="_blank">
											<Button className="btn" disableRipple fullWidth>
												See my resume
											</Button>
										</Link>
									</Grid>
								</Grid>
							</Card>
					</Paper>
				</Container>
			</Grid>

	</>
	)

}
export default Welcome;