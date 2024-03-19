import { Header, Segment} from 'semantic-ui-react';
import './Header.css';

export default function PageHeader() {
    return (
        <div className="header">
            <button className="header-button">Story</button>
            <button className="header-button">Stories</button>
            <button className="header-button">New Story</button>
            <button className="header-button">Nook</button>
            <button className="header-button">Google</button>
        </div>
    );
}