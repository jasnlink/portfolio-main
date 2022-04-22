import React from 'react';

import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';


function Image({ src, alt }) {

	const theme = useTheme()
	const desktopMode = useMediaQuery(theme.breakpoints.up('sm'))

	return (
	<>
		{desktopMode && (
			<img style={{ position: 'relative', width: '80%' }} src={src} alt={alt} />
		)}
		{!desktopMode && (
			<img style={{ position: 'relative', width: '114%', marginLeft: '-7%' }} src={src} alt={alt} />
		)}
	</>
	)
}
export default Image;