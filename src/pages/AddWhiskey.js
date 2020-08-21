import React, { useState } from "react";
import postWhiskey from "../api/postWhiskeys";
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
  margin: 2px;
  border-radius: 5px 2px 5px 2px;
`;

const Heading = styled.h2`
  text-align: center;
  font-family: "Lobster";
  font-size: 1em;
`;

function AddForm() {
  const [title, setTitle] = useState("");
  const [region, setRegion] = useState("");
  const [rating, setRating] = useState("");
  const [price, setPrice] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  function titleChange(title) {
    setTitle(title.target.value);
  }
  function regionChange(region) {
    setRegion(region.target.value);
  }
  function ratingChange(rating) {
    setRating(rating.target.valueAsNumber);
  }
  function priceChange(price) {
    setPrice(price.target.valueAsNumber);
  }
  function authorChange(author) {
    setAuthor(author.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setError(false);
    const whiskey = {
      title,
      region,
      rating,
      price,
      author,
      createdAt: Date.now(),
    };
    try {
      await postWhiskey(whiskey);
      setTitle("");
      setRegion("");
      setRating("");
      setPrice("");
      setAuthor("");
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
    }

    setLoading(false);
  }

  return (
    <AddWhiskeyContainer>
      <Form onSubmit={handleSubmit}>
        <Heading>Add a Whiskey to your Database</Heading>
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
        <Input
          type="submit"
          value="Add to your Database"
          disabled={!title || !price || !author || loading}
        />
        {error && <p>Something bad happened 🤣. Please try again.</p>}
      </Form>
    </AddWhiskeyContainer>
  );
}

export default AddForm;
