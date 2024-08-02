// Third party imports
import { Source, Layer, LayerProps } from 'react-map-gl';

export const Points = ({ beachData }: any) => {
	const unclusteredPointLayer: LayerProps = {
	  id: 'unclustered-point',
	  type: 'circle',
	  source: 'beach-point',
	  paint: {
	    'circle-color': "rgba(122, 122, 222, 1)",
	    'circle-radius': 5,
	  }
	};
	
	const geojsonPoints: any = beachData && beachData[0].reduce((total: any, item: any) => {
		const { geom, ...properties } = item;
		const coord = geom.coordinates;
		total.push({
			type: "Feature",
		    geometry: { 
		    	type: "Point", 
		    	coordinates: [ 
		    		coord[0], 
		    		coord[1] 
		    	] 
		    },
			properties: {...properties,}
		});
		return total
	}, []);

	const geojsonWrapper: any = geojsonPoints && {
		"type": "FeatureCollection",
		"features": geojsonPoints
	}

	return (
		<Source
		  id="beach-point"
		  type="geojson"
		  data={geojsonWrapper}
		>
		  <Layer {...unclusteredPointLayer}/>
		</Source>
	)
}

Points.displayName="Points";