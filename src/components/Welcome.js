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

import '../index.css';


function Welcome() {

	return (
	<>

		<Grid container>
			<Grid item xs={2} style={{ maxHeight: '100vh', overflow: 'auto' }}>
				<Paper sx={{ minHeight: '100vh', backgroundColor: '#141414', borderRight: 'solid #c3c3c33d 1px' }} elevation={0} square>
					<List>
						<ListItem sx={{ borderBottom: 'solid #c3c3c33d 1px' }}>
							<ListItemText primary={<Typography variant="h6" style={{ fontWeight: '500', color: '#eeeeef' }}>Navigation</Typography>} />
						</ListItem>
						<ListItemButton>
							<ListItemText primary={<Typography variant="h6" style={{ fontWeight: '200', color: '#eeeeef' }}>Navigation</Typography>} />
						</ListItemButton>
						<ListItemButton>
							<ListItemText primary={<Typography variant="h6" style={{ fontWeight: '200', color: '#eeeeef' }}>Navigation</Typography>} />
						</ListItemButton>
						<ListItemButton>
							<ListItemText primary={<Typography variant="h6" style={{ fontWeight: '200', color: '#eeeeef' }}>Navigation</Typography>} />
						</ListItemButton>
						<ListItemButton>
							<ListItemText primary={<Typography variant="h6" style={{ fontWeight: '200', color: '#eeeeef' }}>Navigation</Typography>} />
						</ListItemButton>
						<ListItemButton>
							<ListItemText primary={<Typography variant="h6" style={{ fontWeight: '200', color: '#eeeeef' }}>Navigation</Typography>} />
						</ListItemButton>
						<ListItemButton>
							<ListItemText primary={<Typography variant="h6" style={{ fontWeight: '200', color: '#eeeeef' }}>Navigation</Typography>} />
						</ListItemButton>
					</List>
				</Paper>
			</Grid>
			<Grid item xs={10} style={{ maxHeight: '100vh', overflow: 'auto' }}>
				<Container sx={{ backgroundColor: '#141414', pt: '12vh' }}>
					<Paper sx={{ minHeight: '100vh', backgroundColor: '#141414' }} elevation={0} square>
						<Stack spacing={4}>
							<Card sx={{ backgroundColor: '#141414', border: 'solid #c3c3c33d 1px', color: '#eeeeef', p: '18px' }} square>
								<Typography variant="h4">
									About me
								</Typography>
								<Typography variant="body1">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non lacus id massa fermentum luctus. Quisque dictum ante nisi. Aliquam ut ante vitae nisl convallis volutpat sit amet nec justo. Nulla gravida luctus justo a consectetur. Duis rutrum, elit sit amet aliquet ullamcorper, mauris nulla tincidunt dui, fermentum eleifend sapien leo ac justo. Praesent tincidunt blandit dignissim. Nullam id egestas libero, non hendrerit augue. Ut quis tempor justo. Nullam nisl elit, suscipit a varius ut, imperdiet vitae odio. Sed viverra ligula in eros cursus scelerisque.
								</Typography>
							</Card>
							<Card sx={{ backgroundColor: '#141414', border: 'solid #c3c3c33d 1px', color: '#eeeeef', p: '18px' }} square>
								<Typography variant="h4">
									Projects
								</Typography>
								<Typography variant="body1">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non lacus id massa fermentum luctus. Quisque dictum ante nisi. Aliquam ut ante vitae nisl convallis volutpat sit amet nec justo. Nulla gravida luctus justo a consectetur. Duis rutrum, elit sit amet aliquet ullamcorper, mauris nulla tincidunt dui, fermentum eleifend sapien leo ac justo. Praesent tincidunt blandit dignissim. Nullam id egestas libero, non hendrerit augue. Ut quis tempor justo. Nullam nisl elit, suscipit a varius ut, imperdiet vitae odio. Sed viverra ligula in eros cursus scelerisque.
								</Typography>
							</Card>
						</Stack>
					</Paper>
				</Container>
			</Grid>
		</Grid>

	</>
	)

}
export default Welcome;