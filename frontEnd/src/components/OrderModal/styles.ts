import styled from 'styled-components';

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;

  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(3px);
  position: fixed;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.div`
  background: #fff;
  width: 480px;
  border-radius: 8px;
  padding: 32px;

  header {
    display: flex;
    align-items: center;
    padding: 0;
    justify-content: space-between;

    button {
      line-height: 0;
    }

    strong {
      font-size: 24px;
    }
  }

  .status-container {
    margin-top: 32px;

    small {
      opacity: 0.8px;
    }

    div {
      display: flex;
      gap: 8px;
      align-items: center;
      margin-top: 8px;
    }
  }
`;

export const OrderDetails = styled.div`
  margin-top: 32px;

  > strong {
    font-weight: 500;
    font-size: 14px;
    opacity: 0.8px;
  }
`;
