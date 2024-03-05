import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

export const CommentBox = () => {
  return (
    <>
      <FloatingLabel className="mx-2" controlId="msg" label="Your Message">
        <Form.Control
          as="textarea"
          className="bg-light border border-my-primary border-2"
          style={{ height: '100px' }}
        />
      </FloatingLabel>
    </>
  );
}