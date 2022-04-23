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
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import '../index.css';


function NavMenu({ step, setStep }) {

	const theme = useTheme()
	const desktopMode = useMediaQuery(theme.breakpoints.up('sm'))

	const [navOpen, setNavOpen] = useState(false)

	function handleNavSelect(sId) {
		setStep(sId)
		setNavOpen(false)
	}

	return (
	<>
		{desktopMode && (

			<Grid item xs={2} style={{ maxHeight: '100vh', overflow: 'auto' }}>
				<Paper sx={{ minHeight: '100vh', backgroundColor: '#141414', borderRight: 'solid #c3c3c33d 1px', color: '#eeeeef' }} elevation={0} square>
					<List>
						<ListItem sx={{ borderBottom: 'solid #c3c3c33d 1px', cursor: 'default' }}>
							<ListItemText primary={<Typography variant="h4">NAVIGATION</Typography>} />
						</ListItem>
						<ListItemButton
							selected={step === 0}
							onClick={() => setStep(0)}
							classes={step ===0 ? { selected: 'nav-selected' } : { root: 'nav-root', selected: 'nav-selected' }}
							sx={{ borderBottom: 'solid #c3c3c33d 1px' }}
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
								<ListItemText sx={{ color: 'inherit' }} primary={<Typography color="inherit"><strong>MealPortal</strong> - Online pickup, delivery ordering software</Typography>} />
							</ListItemButton>
							<ListItemButton 
								sx={{ pl: 3, color: '#c7c7c7'  }} 
								selected={step === 2}
								onClick={() => setStep(2)}
								classes={step ===2 ? { selected: 'nav-selected' } : { root: 'nav-root', selected: 'nav-selected' }}
								disableRipple 
							>
								<ListItemText sx={{ color: 'inherit' }} primary={<Typography color="inherit"><strong>AYCEHub</strong> - All you can eat restaurant tableside scan to order system</Typography>} />
							</ListItemButton>
							<ListItemButton 
								sx={{ pl: 3, color: '#c7c7c7'  }} 
								selected={step === 3}
								onClick={() => setStep(3)}
								classes={step ===3 ? { selected: 'nav-selected' } : { root: 'nav-root', selected: 'nav-selected' }}
								disableRipple 
							>
								<ListItemText sx={{ color: 'inherit' }} primary={<Typography color="inherit"><strong>SimpleMenu</strong> - Interactive menu with order management for pickups</Typography>} />
							</ListItemButton>
							<ListItemButton 
								sx={{ pl: 3, color: '#c7c7c7'  }} 
								selected={step === 4}
								onClick={() => setStep(4)}
								classes={step ===4 ? { selected: 'nav-selected' } : { root: 'nav-root', selected: 'nav-selected' }}
								disableRipple 
							>
								<ListItemText sx={{ color: 'inherit' }} primary={<Typography color="inherit"><strong>MSM Technologies</strong> - Web development company</Typography>} />
							</ListItemButton>
							<ListItemButton 
								sx={{ pl: 3, color: '#c7c7c7'  }} 
								selected={step === 5}
								onClick={() => setStep(5)}
								classes={step ===5 ? { selected: 'nav-selected' } : { root: 'nav-root', selected: 'nav-selected' }}
								disableRipple 
							>
								<ListItemText sx={{ color: 'inherit' }} primary={<Typography color="inherit"><strong>PrimeElo</strong> - Rank boosting service for League of Legends</Typography>} />
							</ListItemButton>

						<ListItem sx={{ borderTop: 'solid #c3c3c33d 1px', pb: 0, cursor: 'default' }}>
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

		)}
		{!desktopMode && (
		<>
			{!navOpen && (
				<ButtonBase onClick={open => setNavOpen(true)} disableRipple sx={{ position: 'absolute', right: 16, top: 16, width: '52px', height: '52px', color: '#eeeeef', background: 'none', zIndex: '100' }}>
					<MenuIcon sx={{ width: '36px', height: '36px' }} />
				</ButtonBase>
			)}
				<Fade in={navOpen} timeout={{ appear: 10, enter: 400, exit: 400 }} unmountOnExit>
					<Paper sx={{ position: 'absolute', zIndex: 10000, minHeight: '100vh', backgroundColor: '#141414', color: '#eeeeef' }} elevation={0} square>
						<List>
							<ListItem sx={{ borderBottom: 'solid #c3c3c33d 1px', cursor: 'default' }}>
								<ListItemText primary={
									<Grid container alignItems="center" justifyContent="space-between">
										<Grid item>
											<Typography variant="h4">NAVIGATION</Typography>
										</Grid>
										<Grid item>
											<ButtonBase onClick={open => setNavOpen(false)} disableRipple sx={{ width: '52px', height: '52px', color: '#eeeeef', background: 'none' }}>
												<CloseIcon sx={{ width: '36px', height: '36px' }} />
											</ButtonBase>
										</Grid>
									</Grid>
								} />
							</ListItem>
							<ListItemButton
								selected={step === 0}
								onClick={() => handleNavSelect(0)}
								sx={{ borderBottom: 'solid #c3c3c33d 1px', pl: 4 }}
								classes={step ===0 ? { selected: 'nav-selected' } : { root: 'nav-root', selected: 'nav-selected' }}
								disableRipple 
							>
								<ListItemText primary={<Typography variant="h6">Home</Typography>} />
							</ListItemButton>
							<ListItem sx={{ cursor: 'default', pl: 4 }}>
								<ListItemText primary={<Typography variant="h6" style={{ fontWeight: '500', color: '#eeeeef' }}>Projects</Typography>} />
							</ListItem>

								<ListItemButton 
									sx={{ pl: 6, pr: 6, color: '#c7c7c7'  }} 
									selected={step === 1}
									onClick={() => handleNavSelect(1)}
									classes={step ===1 ? { selected: 'nav-selected' } : { root: 'nav-root', selected: 'nav-selected' }}
									disableRipple 
								>
									<ListItemText sx={{ color: 'inherit' }} primary={<Typography color="inherit"><strong>MealPortal</strong> - Online pickup, delivery ordering software</Typography>} />
								</ListItemButton>
								<ListItemButton 
									sx={{ pl: 6, pr: 6, color: '#c7c7c7'  }} 
									selected={step === 2}
									onClick={() => handleNavSelect(2)}
									classes={step ===2 ? { selected: 'nav-selected' } : { root: 'nav-root', selected: 'nav-selected' }}
									disableRipple 
								>
									<ListItemText sx={{ color: 'inherit' }} primary={<Typography color="inherit"><strong>FoodHub</strong> - Restaurant tableside scan to order system</Typography>} />
								</ListItemButton>
								<ListItemButton 
									sx={{ pl: 6, pr: 6, color: '#c7c7c7'  }} 
									selected={step === 3}
									onClick={() => handleNavSelect(3)}
									classes={step ===3 ? { selected: 'nav-selected' } : { root: 'nav-root', selected: 'nav-selected' }}
									disableRipple 
								>
									<ListItemText sx={{ color: 'inherit' }} primary={<Typography color="inherit"><strong>SimpleMenu</strong> - Interactive menu with order management for pickups</Typography>} />
								</ListItemButton>
								<ListItemButton 
									sx={{ pl: 6, pr: 6, color: '#c7c7c7'  }} 
									selected={step === 4}
									onClick={() => handleNavSelect(4)}
									classes={step ===4 ? { selected: 'nav-selected' } : { root: 'nav-root', selected: 'nav-selected' }}
									disableRipple 
								>
									<ListItemText sx={{ color: 'inherit' }} primary={<Typography color="inherit"><strong>MSM Technologies</strong> - Web development company</Typography>} />
								</ListItemButton>
								<ListItemButton 
									sx={{ pl: 6, pr: 6, color: '#c7c7c7'  }} 
									selected={step === 5}
									onClick={() => handleNavSelect(5)}
									classes={step ===5 ? { selected: 'nav-selected' } : { root: 'nav-root', selected: 'nav-selected' }}
									disableRipple 
								>
									<ListItemText sx={{ color: 'inherit' }} primary={<Typography color="inherit"><strong>PrimeElo</strong> - Rank boosting service for League of Legends</Typography>} />
								</ListItemButton>

							<ListItem sx={{ borderTop: 'solid #c3c3c33d 1px', pl: 4, cursor: 'default' }}>
								<ListItemText primary={<Typography variant="h6" style={{ fontWeight: '500', color: '#eeeeef' }}>Connect with me</Typography>} />
							</ListItem>

								<Link href="https://github.com/jasnlink/" underline="none" target="_blank">
									<ListItemButton 
										sx={{ pl: 6 }}
										disableRipple 
										classes={{ root: 'nav-root' }}
									>
										<ListItemText primary={
												<>
													<Grid container spacing={1}>
														<Grid item>
															<Typography>
																Github
															</Typography>
														</Grid>
														<Grid item>
															<OpenInNewIcon style={{ verticalAlign: 'middle', marginBottom: '2px' }} fontSize="small" />
														</Grid>
													</Grid>
												</>
											} />

									</ListItemButton>
								</Link>
								<Link href="https://www.linkedin.com/in/jason-che-22612222a/" underline="none" target="_blank">
									<ListItemButton 
										sx={{ pl: 6 }}
										disableRipple 
										classes={{ root: 'nav-root' }}
									>
										<ListItemText primary={
												<>
													<Grid container spacing={1}>
														<Grid item>
															<Typography>
																LinkedIn
															</Typography>
														</Grid>
														<Grid item>
															<OpenInNewIcon style={{ verticalAlign: 'middle', marginBottom: '2px' }} fontSize="small" />
														</Grid>
													</Grid>
												</>
											} />
											
									</ListItemButton>
								</Link>
								<Link href="https://twitter.com/jasnlink" underline="none" target="_blank">
									<ListItemButton 
										sx={{ pl: 6 }}
										disableRipple 
										classes={{ root: 'nav-root' }}
									>
										<ListItemText primary={
												<>
													<Grid container spacing={1}>
														<Grid item>
															<Typography>
																Twitter
															</Typography>
														</Grid>
														<Grid item>
															<OpenInNewIcon style={{ verticalAlign: 'middle', marginBottom: '2px' }} fontSize="small" />
														</Grid>
													</Grid>
												</>
											} />
											
									</ListItemButton>
								</Link>

						</List>
					</Paper>
				</Fade>

		</>
		)}
		

	</>
	)

}
export default NavMenu