import React, { useContext } from 'react';
import Card from '../UI/Card';
import classes from './Home.module.css';
import AuthContext from '../Store/Auth-context';
import Button from '../UI/Button';
import '../UI/Button.css'
const Home = (props) => {
  const Authctx = useContext(AuthContext);
  return (
    <>
        <Card className={classes.home}>
          <h1>Welcome back!</h1>
          <Button onClick = {Authctx.onLogout} className="button">Logout</Button>
        </Card>
    </>
  );
  
};

export default Home;
