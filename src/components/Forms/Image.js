import React, { useState, useEffect, useRef } from 'react';

import { 	
	Fade,
	ButtonBase,
	useMediaQuery
 } from '@mui/material';

import { useTheme } from '@mui/material/styles';

import CloseIcon from '@mui/icons-material/Close';


import '../../index.css'

function Image({ src, alt, direction='horizontal' }) {

	const theme = useTheme()
	const desktopMode = useMediaQuery(theme.breakpoints.up('md'))

	const [lightboxOpen, setLightboxOpen] = useState(false)

	return (
	<>
		{desktopMode && (
			<>
			{direction === 'horizontal' && (
			<>
				<img style={{ position: 'relative', width: '80%', cursor: 'pointer' }} src={src} alt={alt} onClick={() => setLightboxOpen(true)} />

				<Fade in={lightboxOpen} unmountOnExit>
						<div style={{ 
										backgroundColor: '#000000d9', 
										zIndex: 9998, 
										height: '100%', 
										width: '100%', 
										position: 'absolute', 
										top: 0, 
										left: 0 
									}} 
									>
							<div style={{ 
										zIndex: 9999, 
										height: '100%', 
										width: '100%', 
										position: 'absolute', 
										top: 0, 
										left: 0 
									}} 
								onClick={() => setLightboxOpen(false)}>
							</div>
							<img style={{ 
											position: 'absolute', 
											height: '80%', 
											width: 'auto', 
											zIndex: 10000, 
											top: '10%', 
											left: '0', 
											right: '0', 
											marginRight: 'auto', 
											marginLeft: 'auto' 
										}} 
								src={src} 
								alt={alt} />
								<ButtonBase style={{ position: 'absolute', right: 0, top: 0, marginRight: '2%', marginTop: '1%', zIndex: 10001 }} onClick={() => setLightboxOpen(false)} disableRipple>
									<CloseIcon style={{ height: '42px', width: '42px' }}  />
								</ButtonBase>
						</div>
					</Fade>
			</>
			)}
			{direction === 'vertical' && (
			<>
				<img style={{ position: 'relative', width: '30%', paddingRight: '12px', cursor: 'pointer' }} src={src} alt={alt} onClick={() => setLightboxOpen(true)} />

				<Fade in={lightboxOpen} unmountOnExit>
					<div style={{ 
									backgroundColor: '#000000d9', 
									zIndex: 9998, 
									height: '100%', 
									width: '100%', 
									position: 'absolute', 
									top: 0, 
									left: 0 
								}} 
								>
						<div style={{ 
									zIndex: 9999, 
									height: '100%', 
									width: '100%', 
									position: 'absolute', 
									top: 0, 
									left: 0 
								}} 
							onClick={() => setLightboxOpen(false)}>
						</div>
						<img style={{ 
										position: 'absolute', 
										height: '100%', 
										width: 'auto', 
										zIndex: 10000, 
										top: '0', 
										left: '0', 
										right: '0', 
										marginRight: 'auto', 
										marginLeft: 'auto' 
									}} 
							src={src} 
							alt={alt} />
							<ButtonBase style={{ position: 'absolute', right: 0, top: 0, marginRight: '2%', marginTop: '1%', zIndex: 10001 }} onClick={() => setLightboxOpen(false)} disableRipple>
								<CloseIcon style={{ height: '42px', width: '42px' }}  />
							</ButtonBase>
					</div>
				</Fade>
			</>
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