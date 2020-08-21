import React, { useState } from "react";
import styled from "@emotion/styled";

const AddWhiskeyContainer = styled.div`
  background: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: center;
  height: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Label = styled.label`
  color: black;
`;
const Input = styled.input`
  display: flex;
  justify-content: space-between;
  align-items: space-between;
`;

const Heading = styled.h2`
  text-align: center;
`;

function AddForm({ children }) {
  const [title, setTitle] = useState("");
  const [region, setRegion] = useState("");
  const [rating, setRating] = useState(0);
  const [price, setPrice] = useState(0);
  const [author, setAuthor] = useState("");

  function titleChange(title) {
    setTitle(title.target.value);
  }
  function regionChange(region) {
    setRegion(region.target.value);
  }
  function ratingChange(rating) {
    setRating(rating.target.value);
  }
  function priceChange(price) {
    setPrice(price.target.value);
  }
  function authorChange(author) {
    setAuthor(author.target.value);
  }
  const todo = { title, region, rating, price, createdAt: Date.now() };
  return (
    <AddWhiskeyContainer>
      <Form>
        <Heading>Add a Whiskey to the Database</Heading>
        <Label>
          <Input placeholder="Name" value={title} onChange={titleChange} />
        </Label>
        <Label>
          <Input placeholder="Region" value={region} onChange={regionChange} />
        </Label>
        <Label>
          <Input
            placeholder="Rating x of 100"
            type="number"
            value={rating}
            onChange={ratingChange}
          />
        </Label>
        <Label>
          <Input
            placeholder="Price in $"
            type="number"
            value={price}
            onChange={priceChange}
          />
        </Label>
        <Label>
          <Input placeholder="Author" value={author} onChange={authorChange} />
        </Label>
        <Input type="submit" value="Submit" disabled={!title || !price} />
      </Form>
    </AddWhiskeyContainer>
  );
}

export default AddForm;
