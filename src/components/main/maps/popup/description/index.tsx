// App imports
import './styles.scss';

export const Description = ({ marker }: any) => {
	if (!marker) return <></>
	return (
		<div className="card-thumbnail-description">
			<div><strong>{marker.properties.nome}</strong></div>
			<div>{marker.properties.description}</div>
		</div>
	)
}

Description.displayName="Description";