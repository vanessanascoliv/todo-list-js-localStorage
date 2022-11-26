import PropTypes from 'prop-types';
import React from 'react';
import { Container } from './styles';

export const Button = (props) => {
  
  return(
    <Container className={props.className} onClick={props.onClick}>
        {props.children}
    </Container>
  );   
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
}