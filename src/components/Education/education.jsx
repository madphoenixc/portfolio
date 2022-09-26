import React from "react";
import school from "../../assets/school.svg";
import highSchool from "../../assets/highSchool.svg";
import college from "../../assets/college.svg";
import classes from "./education.module.css";
import { Col, Row } from "react-bootstrap";

function Education(props) {
  return (
    <div>
      <h1 className="header">Education</h1>
      <div className="m-4">
        <Row>
          <Col md={4} sm={12} className="mb-4">
            <img
              className="rounded-circle shadow-lg"
              src={school}
              height="120"
              width={"120"}
            />
            <p className="mt-2 mb-1">
               <b>Primary School</b> 
            </p>
            <p className="m-0"><b>SSLC</b></p>
            <p className="">Erode Hindu Kalvi Nilayam M.H.S.S</p>
          </Col>
          <Col md={4} sm={12}  className="mb-4">
            <img
              className="rounded-circle shadow-lg"
              src={highSchool}
              height="120"
              width={"120"}
            />
            <p className="mt-2 mb-1">
               <b>High School</b> 
            </p>
            <p className="m-0"><b>HSC</b></p>
            <p className="">Erode Hindu Kalvi Nilayam M.H.S.S</p>
          </Col>
          <Col md={4} sm={12}  className="mb-4">
            <img
              className="rounded-circle shadow-lg"
              src={college}
              height="120"
              width={"120"}
            />
            <p className="mt-2 mb-1">
               <b>Graduate</b> 
            </p>
            <p className="m-0"><b>B.E - CSE</b></p>
            <p className="">Sri Ramakrishna Engineering College</p>
          </Col>
            
        </Row>
      </div>
    </div>
  );
}

export default Education;
