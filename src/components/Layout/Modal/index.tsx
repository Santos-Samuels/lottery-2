import ReactDOM from "react-dom";
import { Overlays } from "./style";

const Modal: React.FC<{isOpen: boolean}> = (props) => {
  if (!props.isOpen) {
    return null
  }

  return ReactDOM.createPortal(
    <Overlays>
      {props.children}
    </Overlays>,
    document.getElementById('modal-root')!
  );
};

export default Modal;