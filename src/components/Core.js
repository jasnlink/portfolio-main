import React, { useState, useEffect } from 'react';

import Welcome from './Welcome'


function Core() {

	//Application step var
	const [step, setStep] = useState(0);


	switch(step) {

	  case 0:
	    return (
	    		<Welcome />
	      )
	}

}
export default Core;