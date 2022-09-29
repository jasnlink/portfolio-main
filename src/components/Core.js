import React, { useState, useEffect } from 'react';

import { Grid } from '@mui/material'

import NavMenu from './NavMenu'
import Welcome from './Welcome'
import Project from './Project'


function Core() {

	//Application step var
	const [step, setStep] = useState(0);
	//navigation menu open/closed
	const [navOpen, setNavOpen] = useState(false)


	switch(step) {

	  case 0:
	    return (
	    	<>
	    		<Grid container>
		    		<NavMenu
		    			step={step}
		    			setStep={step => setStep(step)}
		    			navOpen={navOpen}
		    			setNavOpen={nav => setNavOpen(nav)}
		    		/>
		    		<Welcome
		    			navOpen={navOpen}
		    			setNavOpen={nav => setNavOpen(nav)}
		    		 />
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
		    			navOpen={navOpen}
		    			setNavOpen={nav => setNavOpen(nav)}
		    		/>
		    		<Project 
		    			id={1}
		    			navOpen={navOpen}
		    			setNavOpen={nav => setNavOpen(nav)}
		    		 />
		    	</Grid>
	    	</>
	      )
	  default:
	    return (
	    	<>
	    		<Grid container>
		    		<NavMenu
		    			step={step}
		    			setStep={step => setStep(step)}
		    			navOpen={navOpen}
		    			setNavOpen={nav => setNavOpen(nav)}
		    		/>
		    		<Project 
		    			id={step}
		    			navOpen={navOpen}
		    			setNavOpen={nav => setNavOpen(nav)}
		    		/>
		    	</Grid>
	    	</>
	      )

	}

}
export default Core;