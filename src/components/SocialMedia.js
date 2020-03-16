import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";

const SocialMedia = props => {
  return (
    <section className="social-media">
      <Button className="social-media__button" variant="default" href="#">
        <FontAwesomeIcon icon={["fab", "facebook"]} />
      </Button>
      <Button className="social-media__button" variant="default" href="#">
        <FontAwesomeIcon icon={["fab", "twitter"]} />
      </Button>
      <Button className="social-media__button" variant="default" href="#">
        <FontAwesomeIcon icon={["fab", "linkedin"]} />
      </Button>
      <Button className="social-media__button" variant="default" href="#">
        <FontAwesomeIcon icon={["fab", "google"]} />
      </Button>
      <Button className="social-media__button" variant="default" href="#">
        <FontAwesomeIcon icon={["fab", "instagram"]} />
      </Button>
      <Button className="social-media__button" variant="default" href="#">
        <FontAwesomeIcon icon={["fab", "youtube"]} />
      </Button>
    </section>
  );
};

export default SocialMedia;
