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
	  case 2:
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
		    			id={2}
		    			navOpen={navOpen}
		    			setNavOpen={nav => setNavOpen(nav)}
		    		/>
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
		    			navOpen={navOpen}
		    			setNavOpen={nav => setNavOpen(nav)}
		    		/>
		    		<Project 
		    			id={3}
		    			navOpen={navOpen}
		    			setNavOpen={nav => setNavOpen(nav)}
		    		/>
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
		    			navOpen={navOpen}
		    			setNavOpen={nav => setNavOpen(nav)}
		    		/>
		    		<Project 
		    			id={4}
		    			navOpen={navOpen}
		    			setNavOpen={nav => setNavOpen(nav)}
		    		/>
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
		    			navOpen={navOpen}
		    			setNavOpen={nav => setNavOpen(nav)}
		    		/>
		    		<Project 
		    			id={5}
		    			navOpen={navOpen}
		    			setNavOpen={nav => setNavOpen(nav)}
		    		/>
		    	</Grid>
	    	</>
	      )
	}

}
export default Core;