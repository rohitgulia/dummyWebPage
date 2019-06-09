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
  const [showResult, setShowResult] = useState(false);

  const handleChange = event => {
    setShowResult(false);
    const data = event.target.value.replace(/\s/g, "");
    setWordCount(data.length);
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
          <Form onSubmit={() => setShowResult(true)}>
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
