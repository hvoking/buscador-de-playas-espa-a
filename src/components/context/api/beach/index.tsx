// React imports
import { useState, useEffect, useContext, createContext } from 'react';

const BeachApiContext: React.Context<any> = createContext(null)

export const useBeachApi = () => {
	return (
		useContext(BeachApiContext)
	)
}

export const BeachApiProvider = ({children}: any) => {
	const [ currentId, setCurrentId ] = useState<any>(null);
	const [ beachData, setBeachData ] = useState<any>(null);
	
	useEffect(() => {
		const fetchData = async () => {
		  	const tempUrl = `
		    	${process.env.REACT_APP_API_URL}/
		    	beach_api
		    `
		    const url = tempUrl.replace(/\s/g, '');
		    const res = await fetch(url);
		  	const receivedData = await res.json();
		  	setBeachData(receivedData);
		}
		fetchData();
	}, []);

	return (
		<BeachApiContext.Provider value={{ beachData, currentId, setCurrentId }}>
			{children}
		</BeachApiContext.Provider>
	)
}

BeachApiContext.displayName = "BeachApiContext";