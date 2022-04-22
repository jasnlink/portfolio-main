import React from 'react';

import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';


function Image({ src, alt, direction='horizontal' }) {

	const theme = useTheme()
	const desktopMode = useMediaQuery(theme.breakpoints.up('sm'))

	return (
	<>
		{desktopMode && (
			<>
			{direction === 'horizontal' && (
				<img style={{ position: 'relative', width: '80%' }} src={src} alt={alt} />
			)}
			{direction === 'vertical' && (
				<img style={{ position: 'relative', width: '30%', paddingRight: '12px' }} src={src} alt={alt} />
			)}
			</>
		)}
		{!desktopMode && (
			<img style={{ position: 'relative', width: '114%', marginLeft: '-7%' }} src={src} alt={alt} />
		)}
	</>
	)
}
export default Image;