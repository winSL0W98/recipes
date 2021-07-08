import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalStackThunk from "../redux/thunk/modalStackThunk";
import { isEmpty } from "../utils/commonUtils";

/**
 * Хук для работы с модальными окнами
 */
const useModal = () => {
  const dispatch = useDispatch();
  const modalStack = useSelector((state) => state.modalStack);
  const modal = isEmpty(modalStack) ? null : modalStack[modalStack.length - 1];
  const props = isEmpty(modal) ? null : modal.props;
  const component = isEmpty(modal) ? null : modal.component;

  /**
   * Открытие модального окна
   * @param {JSX.Element} componentModal - Компонент
   * @param {Object} propsModal - Реквизит модального окна
   * @return {function}
   */
  const openModal = (componentModal, propsModal = {}) =>
    dispatch(
      ModalStackThunk.open({ component: componentModal, props: propsModal })
    );

  /**
   * Изменение модельного окна
   * @param {Object} nextProps - Новый реквизит
   * @param {number} key - Порядковый номер
   * @return {function}
   */
  const editProps = (nextProps, key = modalStack.length - 1) =>
    dispatch(ModalStackThunk.editProps(nextProps, key));

  /**
   * Закрытие последнего модального окна
   * @return {function}
   */
  const closeLast = () => dispatch(ModalStackThunk.close());

  /**
   * Закрытие всех модальных окон
   * @return {function}
   */
  const closeAll = () => dispatch(ModalStackThunk.closeAll());

  /**
   * Геттер пропсов модального окна по ключу
   * @param {number} key - Порядковый номер
   * @return {Object}
   */
  const getPropByKey = (key) => modalStack[key].props;

  return {
    modalStack,
    modal,
    props,
    component,
    openModal,
    editProps,
    closeLast,
    closeAll,
    getPropByKey,
  };
};

export default useModal;
