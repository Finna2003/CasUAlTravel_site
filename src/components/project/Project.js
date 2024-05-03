import { NavLink } from 'react-router-dom';
import './style.css';

const Project = () => {
	return (
			<div>
				<video width="1000" height="600" controls>
					<source src={require('./../../img/video.mp4')} type="video/mp4" />
				</video>
			</div>
	);
};

export default Project;
