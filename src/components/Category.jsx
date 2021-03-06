import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiFoodTruck, GiNoodles } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import React from "react";

const Category = () => {
  return (
    <List>
      <SLink to={`/cuisine/Italian`}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SLink>
      <SLink to={"/cuisine/American"}>
        <FaHamburger />
        <h4>American</h4>
      </SLink>
      <SLink to={"/cuisine/Thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </SLink>
      <SLink to={"/cuisine/German"}>
        <GiFoodTruck />
        <h4>German</h4>
      </SLink>
    </List>
  );
};

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(
    to right,
    rgba(73, 73, 73, 1) 0%,
    rgba(49, 49, 49, 1) 100%
  );
  width: 6rem;
  height: 6 rem;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: white;
    font-size: 0.8rem;
  }
  svg {
    color: white;
    font-size: 1.5rem;
  }
  &.active {
    background: linear-gradient(
      to right,
      rgba(242, 113, 33, 1) 0%,
      rgba(233, 64, 87, 1) 100%
    );
  }
  svg {
    color: white;
  }
  h4 {
    color: white;
  }
`;

export default Category;
