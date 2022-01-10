import { initialBetError } from "@src/context";
import { useApp } from "@src/hooks/useapp";
import { useEffect } from "react";
import { Article } from "./style";


const FeedbackMessage: React.FC = () => {
  const { betError, setBetError } = useApp()

  useEffect(() => {
    if (betError.isError) {
      setTimeout(() => {
        setBetError(initialBetError)
        localStorage.removeItem('isPurchaseSuccessful')
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