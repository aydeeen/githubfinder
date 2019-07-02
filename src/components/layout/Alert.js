import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const element = <FontAwesomeIcon icon={faInfoCircle} />;

const Alert = () => {
const alertContext = useContext(AlertContext)

const { alert } = alertContext;

  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        {element} {alert.msg}
      </div>
    )
  );
};

export default Alert;
