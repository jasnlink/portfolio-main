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
	SvgIcon
 } from '@mui/material';

import { LoadingButton } from '@mui/lab';

import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import '../index.css';


function NavMenu({ step, setStep }) {

	return (
	<>
		<Grid item xs={2} style={{ maxHeight: '100vh', overflow: 'auto' }}>
			<Paper sx={{ minHeight: '100vh', backgroundColor: '#141414', borderRight: 'solid #c3c3c33d 1px', color: '#eeeeef' }} elevation={0} square>
				<List>
					<ListItem sx={{ borderBottom: 'solid #c3c3c33d 1px' }}>
						<ListItemText primary={<Typography variant="h5">Navigation</Typography>} />
					</ListItem>
					<ListItemButton
						selected={step === 0}
						classes={{ selected: 'nav-selected' }}
					>
						<ListItemText primary={<Typography variant="h6">Home</Typography>} />
					</ListItemButton>
					<ListItem sx={{ pb: 0 }}>
						<ListItemText primary={<Typography variant="h6" style={{ fontWeight: '500', color: '#eeeeef' }}>Projects</Typography>} />
					</ListItem>

						<ListItemButton 
							sx={{ pl: 3 }} 
						>
							<ListItemText primary="Tableside scan to order system" />
						</ListItemButton>
						<ListItemButton 
							sx={{ pl: 3 }} 
						>
							<ListItemText primary="Pickup and delivery ordering system" />
						</ListItemButton>

					<ListItem sx={{ pb: 0 }}>
						<ListItemText primary={<Typography variant="h6" style={{ fontWeight: '500', color: '#eeeeef' }}>Connect with me</Typography>} />
					</ListItem>

						<ListItemButton 
							sx={{ pl: 3 }}
						>
							<ListItemText primary={
									<>
										<Grid container spacing={1}>
											<Grid item xs={6}>
												<Typography>
													Github
												</Typography>
											</Grid>
											<Grid item xs={6}>
												<OpenInNewIcon style={{ verticalAlign: 'middle', marginBottom: '2px' }} fontSize="small" />
											</Grid>
										</Grid>
									</>
								} />

						</ListItemButton>
						<ListItemButton 
							sx={{ pl: 3 }}
						>
							<ListItemText primary={
									<>
										<Grid container spacing={1}>
											<Grid item xs={6}>
												<Typography>
													LinkedIn
												</Typography>
											</Grid>
											<Grid item xs={6}>
												<OpenInNewIcon style={{ verticalAlign: 'middle', marginBottom: '2px' }} fontSize="small" />
											</Grid>
										</Grid>
									</>
								} />
								
						</ListItemButton>
						<ListItemButton 
							sx={{ pl: 3 }}
						>
							<ListItemText primary={
									<>
										<Grid container spacing={1}>
											<Grid item xs={6}>
												<Typography>
													Twitter
												</Typography>
											</Grid>
											<Grid item xs={6}>
												<OpenInNewIcon style={{ verticalAlign: 'middle', marginBottom: '2px' }} fontSize="small" />
											</Grid>
										</Grid>
									</>
								} />
								
						</ListItemButton>

				</List>
			</Paper>
		</Grid>

	</>
	)

}
export default NavMenu