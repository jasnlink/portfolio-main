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
	  case 3:
	    return (
	    	<>
	    		<Grid container>
		    		<NavMenu
		    			step={step}
		    			setStep={step => setStep(step)}
		    		/>
		    		<Project id={3} />
		    	</Grid>
	    	</>
	      )
	  case 4:
	    return (
	    	<>
	    		<Grid container>
		    		<NavMenu
		    			step={step}
		    			setStep={step => setStep(step)}
		    		/>
		    		<Project id={4} />
		    	</Grid>
	    	</>
	      )
	  case 5:
	    return (
	    	<>
	    		<Grid container>
		    		<NavMenu
		    			step={step}
		    			setStep={step => setStep(step)}
		    		/>
		    		<Project id={5} />
		    	</Grid>
	    	</>
	      )
	}

}
export default Core;