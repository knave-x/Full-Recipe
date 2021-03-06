import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Searched from "../pages/Searched";

const Search = () => {
  const [input, setInput] = useState("");
  const [startSearch, setStartSearch] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (startSearch) {
      if (!input) {
        navigate(`/`);
      }
    } else {
      setStartSearch(true);
    }
  }, [input]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("hey");
    navigate(`/searched/` + input);
  };

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch></FaSearch>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Search.."
          value={input}
        />
      </div>
    </FormStyle>
  );
};

const FormStyle = styled.form`
  margin: 0rem 20rem;

  div {
    width: 100%;
    position: relative;
  }
  input {
    border: none;
    background: linear-gradient(
      to right,
      rgba(73, 73, 73, 1) 0%,
      rgba(49, 49, 49, 1) 100%
    );
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 100%;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }
`;

export default Search;
