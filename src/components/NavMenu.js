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
	Link
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
					<ListItem sx={{ borderBottom: 'solid #c3c3c33d 1px', cursor: 'default' }}>
						<ListItemText primary={<Typography variant="h5">Navigation</Typography>} />
					</ListItem>
					<ListItemButton
						selected={step === 0}
						onClick={() => setStep(0)}
						classes={step ===0 ? { selected: 'nav-selected' } : { root: 'nav-root', selected: 'nav-selected' }}
						disableRipple 
					>
						<ListItemText primary={<Typography variant="h6">Home</Typography>} />
					</ListItemButton>
					<ListItem sx={{ pb: 0, cursor: 'default' }}>
						<ListItemText primary={<Typography variant="h6" style={{ fontWeight: '500', color: '#eeeeef' }}>Projects</Typography>} />
					</ListItem>

						<ListItemButton 
							sx={{ pl: 3, color: '#c7c7c7'  }} 
							selected={step === 1}
							onClick={() => setStep(1)}
							classes={step ===1 ? { selected: 'nav-selected' } : { root: 'nav-root', selected: 'nav-selected' }}
							disableRipple 
						>
							<ListItemText sx={{ color: 'inherit' }} primary={<Typography color="inherit">Tableside scan to order</Typography>} />
						</ListItemButton>
						<ListItemButton 
							sx={{ pl: 3, color: '#c7c7c7'  }} 
							selected={step === 2}
							onClick={() => setStep(2)}
							classes={step ===2 ? { selected: 'nav-selected' } : { root: 'nav-root', selected: 'nav-selected' }}
							disableRipple 
						>
							<ListItemText sx={{ color: 'inherit' }} primary={<Typography color="inherit">Restaurant pickup and delivery</Typography>} />
						</ListItemButton>

					<ListItem sx={{ pb: 0, cursor: 'default' }}>
						<ListItemText primary={<Typography variant="h6" style={{ fontWeight: '500', color: '#eeeeef' }}>Connect with me</Typography>} />
					</ListItem>

						<Link href="https://github.com/jasnlink/" underline="none" target="_blank">
							<ListItemButton 
								sx={{ pl: 3 }}
								disableRipple 
								classes={{ root: 'nav-root' }}
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
						</Link>
						<Link href="https://www.linkedin.com/in/jason-che-22612222a/" underline="none" target="_blank">
							<ListItemButton 
								sx={{ pl: 3 }}
								disableRipple 
								classes={{ root: 'nav-root' }}
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
						</Link>
						<Link href="https://twitter.com/jasnlink" underline="none" target="_blank">
							<ListItemButton 
								sx={{ pl: 3 }}
								disableRipple 
								classes={{ root: 'nav-root' }}
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
						</Link>

				</List>
			</Paper>
		</Grid>

	</>
	)

}
export default NavMenu