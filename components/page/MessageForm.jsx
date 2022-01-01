import { Form, FormControl, InputGroup } from "react-bootstrap";
import { SendFill } from "react-bootstrap-icons";
export default function MessageForm() {
  return (
    <Form className="p-3 pb-1 position-relative">
      <InputGroup className="mb-3">
        <FormControl
          className="border-0 bg-light"
          style={{ borderRadius: "100vh" }}
          placeholder="Type Your Message"
          aria-label="Type Your Message"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Text
          id="basic-addon2"
          className="position-absolute bg-transparent border-0 text-primary"
          style={{
            right: "0.25rem",
            zIndex: "999",
            fontSize: "1.25rem",
            top: "calc(50% - 1.25rem + calc(1.25rem / 4))",
          }}
        >
          <SendFill />
        </InputGroup.Text>
      </InputGroup>
    </Form>
  );
}
