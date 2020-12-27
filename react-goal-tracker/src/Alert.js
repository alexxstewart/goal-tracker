import React, { useEffect } from 'react';

function Alert({alert, removeAlert, goalList}) {
  
    useEffect(() => {
        const timeout = setTimeout(() => {
            removeAlert()
        }, 3000)
        return () => {
            clearTimeout(timeout);
        }
    })

  if(alert.show){
    return (
    <div className={`alert alert-${alert.state}`} role='alert'>{alert.msg}</div>
  );
    }
    return <></>
}

export default Alert;
