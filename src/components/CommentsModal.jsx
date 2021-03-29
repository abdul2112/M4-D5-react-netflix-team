import React from "react";
import { Modal, Button, Card, ListGroup } from "react-bootstrap";

class CommentsModal extends React.Component {
  state = {};

  render() {
    console.log(this.props.commentslist);
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
              {this.props.commentslist.length > 0 ? (
                this.props.commentslist.map((comment) => (
                  <ListGroup.Item key={comment._id}>
                    {comment.comment}
                  </ListGroup.Item>
                ))
              ) : (
                <ListGroup.Item>
                  Not comments yet! Be the first...
                </ListGroup.Item>
              )}
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
