// App imports
import './styles.scss';

// Third-party imports
import * as d3 from 'd3';

const siFormat = d3.format(",");

export const Description = ({ marker }: any) => {
	if (!marker) return <></>
	return (
		<div className="card-thumbnail-description">
			<div><strong>{marker.nome}</strong></div>
			<div>{marker.description}</div>
		</div>
	)
}

Description.displayName="Description";