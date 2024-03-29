import { Header, Segment} from 'semantic-ui-react';
import './Header.css';
import{Link} from 'react-router-dom';
export default function PageHeader() {
    return (
        <div className="header">
            <button className="header-button">Story</button>
            <Link to="/stories"><button className="header-button">Stories</button></Link>
            <Link to="/new-story"><button className="header-button">New Story</button></Link>
            <Link to='/nook-page'><button className="header-button">Nook</button></Link>
            <Link to='/login'><button className="header-button">Google</button></Link>
        </div>
    );
}