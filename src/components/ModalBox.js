import React from 'react'
import "./modalbox.css"

const ModalBox = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
    return (
        <>
            <div className="modal">
                <div className="modalBox">
                <div className="modal-content">
                    <span className="close" onClick={onClose}>&times;</span>
                    {children}
                </div>
                </div>
            </div>


        </>
    )
}

export default ModalBox