import React, { useContext, useEffect, useState } from "react";
import classes from "./about.module.css";
import { Row, Col, Table, Button } from "react-bootstrap";
import { LoaderContext } from "../../components/context/LoaderContext";
import Resume from "../../assets/resume.pdf";

function About() {
  const skills = [
    { skill: "HTML5/CSS3", rating: 75 },
    { skill: "Javascript", rating: 50 },
    { skill: "React JS", rating: 25 },
    { skill: "Node JS", rating: 25 },
    { skill: "My SQL", rating: 50 },
  ];


  const { loading, setLoading } = useContext(LoaderContext);

  useEffect(() => {
    setLoading(true);
    const timeoutConst = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timeoutConst);
    };
  }, []);

  return (
    <>
      {!loading && (
        <div>
          <h1 className="header">About Me</h1>
          <div className="d-flex justify-content-center my-5">
            <div style={{ width: "90%" }}>
              <Row>
                <Col md={6} lg={7} xl={6} style={{ color: "#D4F1F4" }}>
                  <div>
                    <h1>A MERN Developer</h1>
                    <p>
                      With a year of Experience in working on Projects and being
                      a good team player. Proactive in learning new stuffs by
                      self
                    </p>

                    <Table
                      responsive
                      className="d-block d-lg-none"
                      style={{ paddingTop: "3%", color: "#D4F1F4" }}
                    >
                      <tr className="text-start">
                        <td>
                          <b>Name: </b>
                        </td>
                        <td style={{ width: "45%" }}>Madhan.C</td>
                      </tr>
                      <tr className="text-start">
                        <td>
                          <b>Date of Birth:</b>
                        </td>
                        <td>8th of March</td>
                      </tr>
                      <tr className="text-start">
                        <td>
                          <b>Email:</b>
                        </td>
                        <td>janakimadhan71@gmail.com</td>
                      </tr>
                      <tr className="text-start">
                        <td>
                          <b>Phone:</b>
                        </td>
                        <td>8667389491</td>
                      </tr>
                      <tr className="text-start">
                        <td>
                          <b>Address:</b>
                        </td>
                        <td>109, Sakthy main road, Erode</td>
                      </tr>
                      <tr className="text-start">
                        <td>
                          <b>Zip Code:</b>
                        </td>
                        <td>638004</td>
                      </tr>
                    </Table>

                    <Table
                      responsive
                      className="d-none d-lg-block"
                      style={{ paddingTop: "3%", color: "#D4F1F4" }}
                    >
                      <tr className="text-start">
                        <td>
                          <b>Name: </b>
                        </td>
                        <td style={{ width: "45%" }}>Madhan.C</td>
                        <td>
                          <b>Date of Birth:</b>
                        </td>
                        <td>8th of March</td>
                      </tr>
                      <tr className="text-start">
                        <td>
                          <b>Email:</b>
                        </td>
                        <td>janakimadhan71@gmail.com</td>
                        <td>
                          <b>Phone:</b>
                        </td>
                        <td>8667389491</td>
                      </tr>
                      <tr className="text-start">
                        <td>
                          <b>Address:</b>
                        </td>
                        <td>109, Sakthy main road, Erode</td>
                        <td>
                          <b>Zip Code:</b>
                        </td>
                        <td>638004</td>
                      </tr>
                    </Table>
                    <Button
                      style={{
                        backgroundColor: "#FAD02C",
                        borderColor: "#FAD02C",
                        color: "#13344C",
                        fontWeight: "600",
                        marginTop:"3%",
                      }}
                    >
                      <a href={Resume} download={"Resume_MadhanC"}>Download CV</a>
                    </Button>
                  </div>
                </Col>
                <Col md={6} lg={5} xl={6}>
                  <div className="mt-4">
                    <h1 style={{ color: "#050A30" }}>My Skills</h1>
                    <div className={classes.bar}>
                      {skills.map((sk) => {
                        return (
                          <div className="mb-3">
                            <p className="text-start m-0 mb-1">{sk.skill}</p>
                            <div class={"progress"}>
                              <div
                                class="progress-bar bg-primary"
                                role="progressbar"
                                aria-label={sk}
                                style={{ width: "0%" }}
                                aria-valuenow={sk.rating}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              >
                                {sk.rating}%
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <h1 className="header">Education</h1>
        </div>
      )}
    </>
  );
}

export default About;
