import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const shimmer = keyframes`
0% { background-position: 0% 50%; }
50% { background-position: 100% 50%; }
100% { background-position: 0% 50%; }
`;

const Bar = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.6rem 3rem 0.6rem 1rem;

  background: linear-gradient(90deg, #000000, #2b2b2b, #000000);
  background-size: 200% 200%;
  animation: ${shimmer} 6s ease infinite;

  color: #fcf6f4;
  font-family: "Ubuntu Mono", monospace;
  font-size: calc(0.6rem + 0.4vw);
  letter-spacing: 0.5px;
  text-align: center;

  span.dot {
    display: inline-block;
    width: 8px;
    height: 8px;
    margin-right: 0.6rem;
    border-radius: 50%;
    background-color: #4ade80;
    box-shadow: 0 0 8px #4ade80;
  }

  strong {
    margin: 0 0.35rem;
    text-transform: uppercase;
  }
`;

const Close = styled.button`
  position: absolute;
  right: 0.8rem;
  top: 50%;
  transform: translateY(-50%);

  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  color: #fcf6f4;
  font-size: 1rem;
  line-height: 1;
  opacity: 0.6;

  &:hover {
    opacity: 1;
  }
`;

const Banner = () => {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <Bar
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", duration: 1, delay: 0.3 }}
    >
      <span className="dot" />
      <span>
        A brand new portfolio is <strong>building</strong> — going live on
        <strong>Oct 19, 2026</strong>. Stay tuned!
      </span>
      <Close onClick={() => setShow(false)} aria-label="Dismiss banner">
        &times;
      </Close>
    </Bar>
  );
};

export default Banner;
