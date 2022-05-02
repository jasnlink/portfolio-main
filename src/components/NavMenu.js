import React, { useState, useEffect, useRef } from 'react';


import { 	
	Grid,
	Paper,
	Typography,
	Container,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Divider,
	ButtonBase,
	Fade,
	SvgIcon,
	Link,
	useMediaQuery
 } from '@mui/material';

import { useTheme } from '@mui/material/styles';

import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

import '../index.css';


function NavMenu({ step, setStep }) {

	const theme = useTheme()
	const desktopMode = useMediaQuery(theme.breakpoints.up('md'))

	const [navOpen, setNavOpen] = useState(false)

	function handleNavSelect(sId) {
		setStep(sId)
		setNavOpen(false)
	}

	return (
	<>
		{desktopMode && (

			<Grid item xs={2} style={{ maxHeight: '100vh', overflow: 'none' }}>
				<Paper sx={{ minHeight: '100vh', backgroundColor: '#262626', borderRight: 'solid #c3c3c33d 1px', color: '#eeeeef' }} elevation={0} square>
					<List>
						<ListItem sx={{ borderBottom: 'solid #c3c3c33d 1px', cursor: 'default' }}>
							<ListItemText primary={<Typography variant="h5" style={{ color: '#eeeeef' }}>NAVIGATION</Typography>} />
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
												<Grid container spacing={1} alignItems="center">
													<Grid container item xs={10} lg={6} spacing={1} alignItems="center">
														<Grid item>
															<GitHubIcon style={{ verticalAlign: 'middle', marginBottom: '2px' }} />
														</Grid>
														<Grid item>
															<Typography>
																Github
															</Typography>
														</Grid>
													</Grid>
													<Grid item xs={2} lg={6}>
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
												<Grid container spacing={1} alignItems="center">
													<Grid container item xs={10} lg={6} spacing={1} alignItems="center">
														<Grid item>
															<LinkedInIcon style={{ verticalAlign: 'middle', marginBottom: '2px' }} />
														</Grid>
														<Grid item>
															<Typography>
																LinkedIn
															</Typography>
														</Grid>
													</Grid>
													<Grid item xs={2} lg={6}>
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
												<Grid container spacing={1} alignItems="center">
													<Grid container item xs={10} lg={6} spacing={1} alignItems="center">
														<Grid item>
															<TwitterIcon style={{ verticalAlign: 'middle', marginBottom: '2px' }} />
														</Grid>
														<Grid item>
															<Typography>
																Twitter
															</Typography>
														</Grid>
													</Grid>
													<Grid item xs={2} lg={6}>
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
					<Paper sx={{ position: 'absolute', zIndex: 10000, minHeight: '100vh', minWidth: '100vw', backgroundColor: '#141414', color: '#eeeeef' }} elevation={0} square>
						<List>
							<ListItem sx={{ borderBottom: 'solid #c3c3c33d 1px', cursor: 'default' }}>
								<ListItemText primary={
									<Grid container alignItems="center" justifyContent="space-between">
										<Grid item>
											<Typography variant="h4" style={{ color: '#eeeeef' }}>NAVIGATION</Typography>
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
														<Grid item xs={4} sm={2} container spacing={1} alignItems="center">
															<Grid item>
																<GitHubIcon style={{ verticalAlign: 'middle' }} />
															</Grid>
															<Grid item>
																<Typography>
																Github
															</Typography>
															</Grid>
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
														<Grid item xs={4} sm={2} container spacing={1} alignItems="center">
															<Grid item>
																<LinkedInIcon style={{ verticalAlign: 'middle' }} />
															</Grid>
															<Grid item>
																<Typography>
																	LinkedIn
																</Typography>
															</Grid>
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
														<Grid item xs={4} sm={2} container spacing={1} alignItems="center">
															<Grid item>
																<TwitterIcon style={{ verticalAlign: 'middle' }} />
															</Grid>
															<Grid item>
																<Typography>
																	Twitter
																</Typography>
															</Grid>
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