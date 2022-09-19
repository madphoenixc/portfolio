import React from 'react';
import {Row,Col, Button} from 'react-bootstrap'
import classes from './home.module.css'
import myPhoto from "../../assets/myphoto.png";

function Home() {
    return (
        <div id="home" className={classes.homeContainer}>
            <Row className={classes.homeBody+" mt-4"}>
                <Col md={5} style={{height: "100%"}} className={classes.homeCol}>
                    <img src={myPhoto} className={classes.homePhoto}/>
                </Col>
                
                <Col md={6} className="d-flex align-items-center justify-content-center">
                    <div className='text-start'>
                        <h4>MERN Developer</h4>
                        <h1>I'm Madhan Chandrasekar</h1>
                        <div className='mt-4'> 
                          <Button variant='warning' className='me-3'>More About Me →</Button>
                          <Button variant='outline-dark'>HIRE ME</Button>
                        </div>
                    </div>
                </Col>
                <Col></Col>
            </Row>
        </div>
    );
}

export default Home;