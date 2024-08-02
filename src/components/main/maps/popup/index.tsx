// App imports
import { Description } from './description';
import './styles.scss';

// Third-party imports
import { Popup } from 'react-map-gl';

export const CustomPopup: any = ({ marker, setPropertyInfo, setPropertyHoverInfo }: any) => {
  const coordinates = marker.geometry.coordinates;

  const longitude = coordinates[0];
  const latitude = coordinates[1];

  const onClick = () => setPropertyInfo(marker);
  const onClose = () => setPropertyHoverInfo(null);

  return (
      <Popup
        longitude={longitude}
        latitude={latitude}
        closeOnClick={false}
        onClose={onClose}
        offset={20}
      >
        <div className="tooltip-wrapper" onClick={onClick}>
          <img className="card-thumbnail" src={`${process.env.PUBLIC_URL}/static/icons/beach.svg`} alt="beach"/>
          <Description marker={marker}/>
        </div>
      </Popup>
    )
}

CustomPopup.diplayName="CustomPopup";