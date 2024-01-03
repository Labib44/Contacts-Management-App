/* eslint-disable react/prop-types */


const ConfirmationModal = ({ title, message, closeModal, modalData, successAction }) => {
    return (
        <div>
            <input type="checkbox" id="confirm-modal" className="modal-toggle" />
            
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label onClick={() => successAction(modalData)} htmlFor="confirm-modal" className="btn btn-ghost">Delete</label>
                        <button onClick={closeModal} className='btn btn-ghost'>cancle</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;