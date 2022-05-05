import React from 'react';


import { 	
	Grid,
	Container,
	Paper,
	Card,
	useMediaQuery
 } from '@mui/material';

import { LoadingButton } from '@mui/lab';

import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import { useTheme } from '@mui/material/styles';

import '../index.css';
import ProjectCard1 from './Forms/ProjectCard1'
import ProjectCard2 from './Forms/ProjectCard2'
import ProjectCard3 from './Forms/ProjectCard3'
import ProjectCard4 from './Forms/ProjectCard4'
import ProjectCard5 from './Forms/ProjectCard5'

function Project({ id, navOpen, setNavOpen }) {

	const theme = useTheme()
	const desktopMode = useMediaQuery(theme.breakpoints.up('md'))

	return (
	<>

			<Grid item xs={12} md={10} style={desktopMode ? { minHeight: '100vh', height: '100vh', maxHeight: '100vh', overflow: 'auto', backgroundColor: '#161616' } : { minHeight: '100vh', height: '100vh', maxHeight: '100vh', overflow: 'auto', backgroundColor: '#161616' }}>
				<Container maxWidth="lg" sx={desktopMode ? { mt: '12vh', mb: '12vh', minHeight: '76vh', overflow: 'hidden' } : { mt: '12vh', mb: '24vh', minHeight: '64vh', overflow: 'hidden' }}>
					<Card sx={{ backgroundColor: '#262626', border: 'solid #c3c3c33d 1px', color: '#eeeeef', p: '10% 6%' }} square>
					{id === 1 && (

						<ProjectCard1 />

					)}
					{id === 2 && (

						<ProjectCard2 />

					)}
					{id === 3 && (

						<ProjectCard3 />

					)}
					{id === 4 && (

						<ProjectCard4 />

					)}
					{id === 5 && (

						<ProjectCard5 />

					)}
					</Card>
				</Container>
			</Grid>

	</>
	)

}
export default Project;