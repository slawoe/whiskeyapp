import React, { useState } from "react";
import styled from "@emotion/styled";
import { useQuery } from "react-query";

const AddMyWhiskey = async (whiskey) => {
  const response = await fetch("http://localhost:3000/mywhiskies", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(whiskey),
  });
  return response.json();
};

function AddForm({ children }) {
  const [title, setTitle] = useState("");
  const [region, setRegion] = useState("");
  const [rating, setRating] = useState(null);
  const [price, setPrice] = useState(null);
  const [author, setAuthor] = useState("");

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
          disabled={!title || !price || !author}
        />
      </Form>
    </AddWhiskeyContainer>
  );
}

export default AddForm;
