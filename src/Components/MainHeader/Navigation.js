import React from 'react';
import Button from '../UI/Button';
import './Navigation.css';

const Navigation = (props) => {
  return (
    <nav>
      <ul>
       
          <>
            <li>
              <a href="/">Users</a>
            </li>
            <li>
              <a href="/">Admin</a>
            </li>
            <li>
              <Button type="submit" onClick={props.onLogout} className="button">
                Logout
              </Button>
            </li>
          </>
      
      </ul>
    </nav>
  );
};

export default Navigation;
