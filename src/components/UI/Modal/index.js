import PropTypes from 'prop-types';
import React from "react";
import ReactDOM from "react-dom";
import { BackdropStyle, ModalStyle } from "./styles";

const portalElement = document.getElementById("modal-root");

export const Modal = (props) => {
  return ReactDOM.createPortal(
    <BackdropStyle onClick={props.onClick}>
      <ModalStyle>{props.children}</ModalStyle>
    </BackdropStyle>,
    portalElement
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
}
