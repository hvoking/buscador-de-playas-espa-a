// App imports
import { Search } from './search';
import './styles.scss';

export const Sidebar = () => {
	return (
		<div className="sidebar-wrapper">
			<div className="sidebar-title-wrapper">
				<div className="sidebar-subtitle">{"My Location > My Summer"}</div>
				<div className="sidebar-title">
					Encuentra tu playa más cercana
				</div>
			</div>
			<div className="sidebar-search-wrapper">
				<div className="sidebar-subtitle">desde</div>
				<Search/>
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
	)
}

Sidebar.displayName="Sidebar";