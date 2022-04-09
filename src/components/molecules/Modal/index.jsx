import React from 'react';
import { Container,ModalCard} from './style';

function Modal({children}) {
  return (
  <Container> 
    <ModalCard>
      {children}
    </ModalCard>
  </Container>
  );
}

export default Modal;