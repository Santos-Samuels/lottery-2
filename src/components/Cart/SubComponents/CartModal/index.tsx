import { Modal, Cart } from '@components/index'
import { IPropsCartModal } from './interface';
import { ModalContainer } from './style';

const CartModal: React.FC<IPropsCartModal> = (props) => {

  return (
    <Modal isOpen={props.isOpen}>
      <ModalContainer>
        <Cart closeModal={props.closeModalHandler} />
      </ModalContainer>
    </Modal>
  );
};

export default CartModal;