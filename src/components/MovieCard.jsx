import React from "react";
import {
  FaAddressCard,
  FaRegCalendarCheck,
  FaRegComments,
} from "react-icons/fa";
import { Col, Button } from "react-bootstrap";
import styles from "../styles/movie_card_styles.module.css";

const MovieCard = () => {
  return (
    <>
      <div>
        <h3 className={styles.title}>MovieCards</h3>
      </div>
      <Col className="mb-3 mb-lg-0 px-1">
        <div className={styles.striveCard + " position-relative"}>
          <img
            fluid
            rounded
            className="w-100"
            src="./assets/src/movieimg/1-1.jpg"
          />
          <div className={styles.infosContainer}>
            <div className={styles.infosContent}>
              <div className="d-flex align-items-center mb-3">
                <div className={styles.playBtn + " " + styles.gradient}></div>
                <h6 className="mb-0 ml-2">Play S1 E2</h6>
                <span className={styles.plus + " ml-auto"}></span>
              </div>
              <h6>The Great Escapist</h6>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed
                mollitia nulla atque corrupti iure quae perspiciatis, odit
                laborum. Iusto id earum pariatur voluptatem eaque voluptas,
                labore reprehenderit ad quis vel.
              </p>
              <div className={styles.movieFooter}>
                <span className="mr-2">2018</span>
                <FaAddressCard className={styles.materialIcons + " mr-2"} />
                <FaRegCalendarCheck className={styles.materialIcons} />
                <span className="ml-4">
                  <Button
                    className={styles.commentBtn + " " + styles.gradient}
                    size="sm"
                  >
                    Add Comment{" "}
                    <FaRegComments className={styles.materialIcons} />
                  </Button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </>
  );
};

export default MovieCard;
