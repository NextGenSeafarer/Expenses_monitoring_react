import './Modal.css'

const Modal = (props) => {
    return <div className={'modal'} onClick={props.onModalActive}>
        <div className={'modal__content'} onClick={(e) => e.stopPropagation()}>
            <div className={'modal__header'}>{props.modalHeader}</div>
            <div className={'modal__body'}>
                <div className={'modal__body-text'}>{props.modalText}</div>
                <div className={'modal__body-buttons'}>
                    <button onClick={props.onDeleteConfirmation} className={'modal__body-button'}>{props.modalFirstButton}</button>
                    <button onClick={props.onModalActive} className={'modal__body-button'}>{props.modalSecondButton}</button>
                </div>
            </div>
        </div>
    </div>
}
export default Modal;