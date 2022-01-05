import { initialBetError } from "@src/context";
import { useApp } from "@src/hooks/useapp";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Article = styled.article<{color: string}>`
  background-color: ${props => props.color};
  border-radius: 5px;
  padding: 15px;
  position: fixed;
  bottom: 40px;
  right: 30px;
  color: #FFFFFF;
  font-style: normal;

  & span {
    margin-left: 10px;
  }
`

const FeedbackMessage: React.FC = () => {
  const { betError, setBetError } = useApp()

  useEffect(() => {
    if (betError.isError) {
      setTimeout(() => {
        setBetError(initialBetError)
      }, 4000);
    }
  }, [betError]);

  return (
    <>
      {betError.isError && <Article color={betError.color}>
      <i className={`bi bi-${betError.icon}-circle-fill`}/>
      <span>{betError.message}</span>
    </Article>}
    </>
  );
};

export default FeedbackMessage;