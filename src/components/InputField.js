import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

export const InputField = (props) => {
  return (
    <>
      <FloatingLabel
        controlId="floatingInput"
        label={props.label}
        className="mb-3 mx-2"
      >
        <Form.Control
          className="bg-dark text-light border border-primary border-2"
          type={props.type}
          placeholder={props.label}
        />
      </FloatingLabel>
    </>
  );
};
