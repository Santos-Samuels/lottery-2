import { Modal, Cart } from '@components/index'
import { useState } from 'react';
import styled from 'styled-components';

const ModalContainer = styled.div`
  margin: 50px auto;
  max-width: 380px;
`

interface IProps {
  isOpen: boolean;
  closeModalHandler: () => void
}

const CartModal: React.FC<IProps> = (props) => {

  return (
    <Modal isOpen={props.isOpen}>
      <ModalContainer>
        <Cart closeModal={props.closeModalHandler} />
      </ModalContainer>
    </Modal>
  );
};

export default CartModal;