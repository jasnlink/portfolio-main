import React, { useState, useEffect } from 'react';

import { Grid } from '@mui/material'

import NavMenu from './NavMenu'
import Welcome from './Welcome'
import Project from './Project'


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
	  case 1:
	    return (
	    	<>
	    		<Grid container>
		    		<NavMenu
		    			step={step}
		    			setStep={step => setStep(step)}
		    		/>
		    		<Project id={1} />
		    	</Grid>
	    	</>
	      )
	  case 2:
	    return (
	    	<>
	    		<Grid container>
		    		<NavMenu
		    			step={step}
		    			setStep={step => setStep(step)}
		    		/>
		    		<Project id={2} />
		    	</Grid>
	    	</>
	      )
	}

}
export default Core;