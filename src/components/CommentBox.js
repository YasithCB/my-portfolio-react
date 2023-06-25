import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

export const CommentBox = () => {
  return (
    <>
      <FloatingLabel className="mx-2" controlId="msg" label="Your Message">
        <Form.Control
          as="textarea"
          className="bg-dark text-light border border-primary border-2"
          style={{ height: '100px' }}
        />
      </FloatingLabel>
    </>
  );
}