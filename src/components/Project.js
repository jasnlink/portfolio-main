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


function Project({ id }) {

	return (
	<>

			<Grid item xs={10} style={{ maxHeight: '100vh', overflow: 'auto', backgroundColor: '#141414' }}>
				<Container sx={{ pt: '12vh' }}>
					<Paper sx={{ minHeight: '100vh', backgroundColor: '#141414' }} elevation={0} square>
						<Stack spacing={4}>
							<Card sx={{ backgroundColor: '#141414', border: 'solid #c3c3c33d 1px', color: '#eeeeef', p: '18px' }} square>
								<Typography variant="h4">
									Project {id}
								</Typography>
								<Typography variant="body1">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non lacus id massa fermentum luctus. Quisque dictum ante nisi. Aliquam ut ante vitae nisl convallis volutpat sit amet nec justo. Nulla gravida luctus justo a consectetur. Duis rutrum, elit sit amet aliquet ullamcorper, mauris nulla tincidunt dui, fermentum eleifend sapien leo ac justo. Praesent tincidunt blandit dignissim. Nullam id egestas libero, non hendrerit augue. Ut quis tempor justo. Nullam nisl elit, suscipit a varius ut, imperdiet vitae odio. Sed viverra ligula in eros cursus scelerisque.
								</Typography>
							</Card>
						</Stack>
					</Paper>
				</Container>
			</Grid>

	</>
	)

}
export default Project;