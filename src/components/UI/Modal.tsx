import ReactDOM from "react-dom";
import styled from "styled-components";

const Overlays = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
`

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