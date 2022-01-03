import { Form, FormControl, InputGroup, Button } from "react-bootstrap";
import { SendFill } from "react-bootstrap-icons";
export default function MessageForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Form className="p-3 pb-1 position-relative" onSubmit={handleSubmit}>
      <InputGroup className="mb-3">
        <FormControl
          className="border-0 bg-dark text-white"
          style={{ borderRadius: "100vh" }}
          placeholder="Type Your Message"
          aria-label="Type Your Message"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Text
          id="basic-addon2"
          className="position-absolute bg-transparent border-0 text-white"
          style={{
            right: "0.25rem",
            zIndex: "999",
            fontSize: "1.25rem",
            top: "calc(50% - 1.25rem + calc(1.25rem / 4))",
          }}
        >
          <SendFill role="button" />
        </InputGroup.Text>
      </InputGroup>
    </Form>
  );
}
