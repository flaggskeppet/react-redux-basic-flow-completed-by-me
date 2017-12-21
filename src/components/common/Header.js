import React from 'react';
import {Link, IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
    return (
        <nav>{loading}
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
            {" | "}
            <Link to="/courses" activeClassName="active">Courses</Link>
            {" | "}
            <Link to="/about" activeClassName="active">About</Link>
        {loading && <LoadingDots interval={50} dots={20} />}
        </nav>
    );
};

export default Header