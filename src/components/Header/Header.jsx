import { Header, Segment} from 'semantic-ui-react';
import './Header.css';
import{Link} from 'react-router-dom';
export default function PageHeader() {
    return (
        <div className="header">
            <button className="header-button">Story</button>
            <button className="header-button">Stories</button>
            <Link to="/new-story"><button className="header-button">New Story</button></Link>
            <Link to='nook-page'><button className="header-button">Nook</button></Link>
            <button className="header-button">Google</button>
        </div>
    );
}