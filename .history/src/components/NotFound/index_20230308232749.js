import React from 'react';
import './notfound.css';
function NotFound(props) {

    return (
        <div className="notfound">
            <div>Page Not Found</div>
            <div>
                Return to&nbsp;
                <Link to="/">Home</Link>
            </div>
        </div>
    );
}

export default NotFound;
