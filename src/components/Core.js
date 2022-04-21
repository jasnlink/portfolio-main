import React, { useState, useEffect } from 'react';

import { Grid } from '@mui/material'

import NavMenu from './NavMenu'
import Welcome from './Welcome'


function Core() {

	//Application step var
	const [step, setStep] = useState(0);


	switch(step) {

	  case 0:
	    return (
	    	<>
	    		<Grid container>
		    		<NavMenu
		    			step={step}
		    			setStep={step => setStep(step)}
		    		/>
		    		<Welcome />
		    	</Grid>
	    	</>
	      )
	}

}
export default Core;