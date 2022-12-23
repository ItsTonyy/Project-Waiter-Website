import closeIcon from '../../assets/images/close-icon.svg';
import { Order } from '../../types/order';
import { Overlay, ModalBody, OrderDetails } from './styles';


interface OrderModalProps {
  visible: boolean;
  order: Order
}

export function OrderModal({visible, order}: OrderModalProps) {
  if (!visible || !order) {
    return null;
  }

  return (
    <Overlay>
      <ModalBody>
        <header>
          <strong>Mesa {order.table}</strong>

          <button type='button'>
            <img src={closeIcon} alt="botão-fechar" />
          </button>
        </header>

        <div className="status-container">
          <small>Status do Pedido</small>
          <div>

            <span>
              {order.status === 'WAITING' && '🕒'}
              {order.status === 'IN_PRODUCTION' && '👨🏻‍🍳'}
              {order.status === 'DONE' && '✅'}
            </span>

            <strong>
              {order.status === 'WAITING' && 'Fila de Espera'}
              {order.status === 'IN_PRODUCTION' && 'Em Preparação'}
              {order.status === 'DONE' && 'Pronto'}
            </strong>
          </div>
        </div>

        <OrderDetails>
          <strong>Itens</strong>

        </OrderDetails>
      </ModalBody>
    </Overlay>
  );
}
