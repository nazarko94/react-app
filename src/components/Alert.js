import React, {useContext} from 'react'
import {CSSTransition} from 'react-transition-group'
import {AlertContext} from '../context/alert/alertContext'

export const Alert = () => {
    const {alert, hide} = useContext(AlertContext)

    return (
        <CSSTransition
        in={alert.visiable}
        timeout={{
            enter: 500,
            exit: 350
        }}
        classNames={'alert'}
        mountOnEnter
        unmountOnExit
        >
    <div className={`alert alert-${alert.type || 'warning'} alert-dismissible`}>
        <strong>Увага!</strong> You should check in on some of those fields below.
        &nbsp;{alert.text}
        <button onClick={hide} type="button" className="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>  
        </button>
    </div>
        </CSSTransition>
    )
}
