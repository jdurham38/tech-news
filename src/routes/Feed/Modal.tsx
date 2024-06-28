import React, { ReactNode, useEffect } from 'react';
import styled from '@emotion/styled';

type ModalProps = {
  show: boolean;
  onClose: () => void;
  children: ReactNode;
};

const Modal: React.FC<ModalProps> = ({ show, onClose, children }) => {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [show]);

  if (!show) return null;

  return (
    <Overlay>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <Content>{children}</Content>
      </ModalContent>
    </Overlay>
  );
};

export default Modal;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  overflow: auto;
`;

const ModalContent = styled.div`
  background: black;
  padding: 20px;
  border-radius: 8px;
  max-height: 90%;
  max-width: 500px;
  width: 90%;
  margin: 20px;
  position: relative;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden; /* Hide overflow initially */

  @media (max-width: 600px) {
    padding: 15px;
    width: 95%;
  }
`;

const Content = styled.div`
  max-height: calc(90vh - 60px); /* Adjust based on modal padding and margin */
  overflow-y: auto;
  padding-right: 10px; /* Space for scrollbar */
`;

const CloseButton = styled.button`
  background: red;
  border: none;
  font-size: 1.5rem;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;
