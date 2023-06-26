import React from 'react';
import Button from '../UI/Button';
import './Navigation.css';
import AuthContext from '../Store/Auth-context';

const Navigation = (props) => {
  return (
    <AuthContext.Consumer>
    {(ctx)=>{
      return <nav>
      <ul>
       
          <>
            <li>
              <a href="/">Users</a>
            </li>
            <li>
              <a href="/">Admin</a>
            </li>
            <li>
              <Button type="submit" onClick={ctx.onLogout} className="button">
                Logout
              </Button>
            </li>
          </>
      
      </ul>
    </nav>
    }} 
    </AuthContext.Consumer>
  );
};

export default Navigation;
