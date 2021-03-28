import React from "react";
import { Modal, Button, Card, ListGroup } from "react-bootstrap";
import { GET_COMMENT_BY_ID } from "../services/comments.service";

class CommentsModal extends React.Component {
  state = {};

  render() {
    return (
      <Modal {...this.props} size="lg" aria-labelledby="movie-reviews" centered>
        <Modal.Header className="bg-dark" closeButton>
          <Modal.Title id="movie-reviews">Movie reviews</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark">
          <Card bg="ligth" text="dark" border="dark">
            <Card.Header>
              <h4 className="text-center">Last reviews...</h4>
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
          </Card>
          <p>
            {this.props.movieID}
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer className="bg-dark">
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default CommentsModal;
