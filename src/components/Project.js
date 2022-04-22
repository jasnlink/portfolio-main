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
import ProjectCard5 from './Forms/ProjectCard5'

function Project({ id }) {

	return (
	<>

			<Grid item sm={12} md={10} style={{ maxHeight: '100vh', overflow: 'auto', backgroundColor: '#141414' }}>
				<Container maxWidth="lg" sx={{ pt: '12vh', pb: '12vh' }}>
					<Paper sx={{ minHeight: '100vh', backgroundColor: '#141414' }} elevation={0} square>
						{id === 5 && (

							<ProjectCard5 />

						)}
					</Paper>
				</Container>
			</Grid>

	</>
	)

}
export default Project;