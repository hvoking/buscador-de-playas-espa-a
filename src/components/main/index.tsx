// App imports
import { MapContainer } from './maps';
import './styles.scss';

export const Main = () => {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);

	window.addEventListener('resize', () => {
	  let vh = window.innerHeight * 0.01;
	  document.documentElement.style.setProperty('--vh', `${vh}px`);
	});


	return (
		<div className="wrapper">
			<div className="sidebar-wrapper">
				<div className="sidebar-title-wrapper">
					<div className="sidebar-subtitle">{"My Location > My Summer"}</div>
					<div className="sidebar-title">
						Encuentra tu playa más cercana
					</div>
				</div>
				<div className="sidebar-search-wrapper">
					<div className="sidebar-subtitle">desde</div>
					<div className="sidebar-search-bar"></div>
					<div className="sidebar-search-button">Buscar</div>
				</div>
				<div className="sidebar-parameters-wrapper">
					<div className="sidebar-title">Tu playa ideal a:</div>
					<div className="sidebar-parameters">
						<div className="sidebar-parameter-item">1.3h</div>
						<div className="sidebar-parameter-item">13.9km</div>
					</div>
				</div>
			</div>
			<MapContainer/>
		</div>
	)
}

Main.displayName="Main";