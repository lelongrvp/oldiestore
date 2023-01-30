import styled from "styled-components";
import React from "react";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

/**
 * Announcement is a function that returns a Container component with the text 'Only for today!
 * Cyberpunk 2077 drops to .'
 */
const Announcement = () => {
  return <Container>Only for today! Cyberpunk 2077 drops to $5.</Container>;
};

export default Announcement;
