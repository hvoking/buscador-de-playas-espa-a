// React imports
import { useState, useEffect, useContext, createContext } from 'react';

// App imports
import * as Locations from './locations';
import { cities } from './cities';

const GeoContext: React.Context<any> = createContext(null)

export const useGeo = () => {
	return (
		useContext(GeoContext)
	)
}

export const GeoProvider = ({children}: any) => {
	const [ cityName, setCityName ] = useState("barcelona");
	const [ viewport, setViewport ] = useState(Locations.barcelona);
	const [ placeCoordinates, setPlaceCoordinates ] = useState<any>(null);

	useEffect(() => {
		setViewport({...viewport, ...placeCoordinates});
	}, [ placeCoordinates ])

	return (
		<GeoContext.Provider value={{
			cityName, setCityName, 
			placeCoordinates, setPlaceCoordinates,
			viewport, setViewport,
			Locations, cities
		}}>
			{children}
		</GeoContext.Provider>
	)
}

GeoContext.displayName = "GeoContext";