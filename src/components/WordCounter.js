import React, { useState } from "react";
import {
  Container,
  Form,
  Button,
  Message,
  Input,
  Segment,
  Header
} from "semantic-ui-react";

export default function WordCounter() {
  const [wordCount, setWordCount] = useState(0);
  const [showResult, setShowResult] = useState(true);
  const [currentText, setCurrentText] = useState("");

  const handleChange = event => {
    //setShowResult(false);
    setCurrentText(event.target.value);

    const data = event.target.value.toLowerCase().split(" ");
    let map = new Map();
    for (let word of data) {
      map.set(word, 1);
    }
    setWordCount(map.size);

    //const data = event.target.value.replace(/\s/g, "");
    // const data = event.target.value.split(' ');
    // setWordCount(data.length);
  };

  const handleFormSubmit = event => {
    setShowResult(true);
    const data = currentText.toLowerCase().split(" ");

    let map = new Map();
    for (let word of data) {
      map.set(word, 1);
    }
    setWordCount(map.size);
  };

  return (
    <div>
      <Container textAlign="center">
        <br />
        <br />
        <Header as="h2" attached="top">
          Word Counter
        </Header>
        <Segment attached>
          <Form onSubmit={handleFormSubmit}>
            <Form.Field>
              <Input
                focus
                size="huge"
                placeholder="Enter text"
                required
                onChange={handleChange}
              />
            </Form.Field>
            <Button type="submit">Submit</Button>
          </Form>
        </Segment>
        {showResult ? (
          <Message>
            <Message.Header>Word count is:</Message.Header>
            <p> {wordCount} </p>
          </Message>
        ) : (
          ""
        )}
      </Container>
    </div>
  );
}
