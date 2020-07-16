import React from 'react';

const Project = () => {
    return (
        <div className="project_wrapper">
            <div className="thumbnail_container">
            <div onClick={()=>window.location.href="https://github.com"}className="thumbnail">
                <iframe  src="https://covid-9ja-watch.herokuapp.com/" title="thumbnail" frameBorder="0">
                </iframe>
                </div>
                </div>
                <div className="thumbnail_container">
                <div onClick={()=>window.location.href="https://github.com"}className="thumbnail">
                <iframe  src="https://okadaban-mailing-list.herokuapp.com/" title="thumbnail" frameBorder="0">
                </iframe>
                </div>
                </div>
        </div>
    );
};

export default Project;