import React, { useContext, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import classes from "./home.module.css";
// import myPhoto from "../../assets/myphoto.svg";
import { useNavigate } from "react-router-dom";
import { LoaderContext } from "../../components/context/LoaderContext";

function Home() {
  const navigate = useNavigate();

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
        <div id="home" className={classes.homeContainer}>
          <Row className={classes.homeBody + " mt-4"}>
            <Col md={5} style={{ height: "100%" }} className={classes.homeCol}>
              {/* <img src={myPhoto} className={classes.homePhoto} /> */}
            </Col>

            <Col
              md={6}
              className="d-flex align-items-center justify-content-center mb-4"
            >
              <div className="text-start">
                <h4>MERN Developer</h4>
                <h1>I'm Madhan Chandrasekar</h1>
                <div className="mt-4">
                  <Button
                    style={{
                      backgroundColor: "#13344C",
                      borderColor: "#13344C",
                    }}
                    className="me-3"
                    onClick={() => {
                      navigate("/about");
                    }}
                  >
                    More About Me →
                  </Button>
                  <Button variant="outline-dark">HIRE ME</Button>
                </div>
              </div>
            </Col>
            <Col></Col>
          </Row>
        </div>
      )}
    </>
  );
}

export default Home;
