// App imports
import './styles.scss';

// Third-party imports
import { Marker } from 'react-map-gl';

export const CustomMarker = ({ filterProperties, propertyInfo, setCurrentId, setPropertyInfo, setPropertyHoverInfo }: any) => {
  const onClick = (e: any, marker: any) => {
    e.stopPropagation();
    setCurrentId(marker.codigo);
    setPropertyHoverInfo(marker);
    propertyInfo && setPropertyInfo(marker); 
  }

  return (
    <>
      {
        filterProperties && filterProperties[0].map((marker: any, index: number) => {
          const coordinates = marker.geom.coordinates;

          const longitude = coordinates[0];
          const latitude = coordinates[1];

          const construtora = marker.construtora;
          const logoConstrutora = `${process.env.PUBLIC_URL}/static/icons/beach.svg`;

          return (
            <Marker key={index} longitude={longitude} latitude={latitude}>
                <div style={{width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "rgba(122, 122, 222, 1)"}} onClick={(e: any) => onClick(e, marker)}>
                </div>
            </Marker>
        )})
      }
    </>
  );
}

CustomMarker.displayName="CustomMarker";