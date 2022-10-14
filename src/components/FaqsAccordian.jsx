import Accordion from "react-bootstrap/Accordion";

function FaqsAccordian({ data }) {
  return (
    <Accordion defaultActiveKey={["0"]} alwaysOpen>
      {data.map((item, ind) => (
        <Accordion.Item eventKey={ind}>
          <Accordion.Header>{item.title}</Accordion.Header>
          <Accordion.Body>{item.desc}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

export default FaqsAccordian;
