import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

export const InputField = (props) => {
  return (
    <>
      <FloatingLabel
        controlId="floatingInput"
        label={props.label}
        className="mb-3 mx-2 my-focus"
      >
        <Form.Control
          className="bg-light border border-my-primary border-2 my-small-text"
          type={props.type}
          placeholder={props.label}
        />
      </FloatingLabel>
    </>
  );
};
