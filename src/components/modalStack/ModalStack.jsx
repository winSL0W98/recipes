import "./ModalStack.scss";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { useHistory } from "react-router";
import useModal from "../../hooks/useModal";
import { isEmpty } from "../../utils/commonUtils";

/**
 * Компонент стека модальных окон.
 * @return JSX.Element
 */
const ModalStack = () => {
  const { component, props, closeAll } = useModal();
  const history = useHistory();

  /**
   * Закрытие всех модальных окон при изменении роутинга
   */
  history.listen(() => {
    closeAll();
  });

  useEffect(() => {
    if (!isEmpty(component)) {
      document.body.classList.add("modal-stack__overflow-wrapper-class");
    } else {
      document.body.classList.remove("modal-stack__overflow-wrapper-class");
    }
  }, [component]);

  return (
    !isEmpty(component) &&
    ReactDOM.createPortal(
      <div className="modal-stack__wrapper">
        <div className="modal-stack__container">
          <div className="modal-stack__block">
            <div className="modal-stack">
              {React.cloneElement(component, { ...component.props, ...props })}
            </div>
          </div>
        </div>
      </div>,
      document.body
    )
  );
};

export default ModalStack;
