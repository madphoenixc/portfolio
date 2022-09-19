import React from 'react';
import {Row,Col} from 'react-bootstrap'
import classes from './home.module.css'
import myPhoto from "../../assets/myphoto.png";

function Home() {
    return (
        <div id="home" className={classes.homeContainer}>
            <Row className={classes.homeBody}>
                <Col md={5} style={{height: "100%"}}>
                    <img src={myPhoto} className={classes.homePhoto}/>
                </Col>
                
                <Col md={6} className="d-flex align-items-center justify-content-center">
                    <div>
                        <h4 className='text-start'>MERN Developer</h4>
                        <h1>I'm Madhan Chandrasekar</h1>
                    </div>
                </Col>
                <Col></Col>
            </Row>
        </div>
    );
}

export default Home;