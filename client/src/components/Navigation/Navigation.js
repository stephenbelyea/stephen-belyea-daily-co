import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '../../constants';

export default function Navigation(props) {
  const { pathname } = useLocation();

  return (
    <nav>
      {pathname === ROUTES.START_CALL ? (
        <Link to={ROUTES.DASH_CALLS}>Go to dashboard</Link> 
      ) : (
        <Link to={ROUTES.START_CALL}>Back to home</Link>
      )} 
    </nav>
  )
}