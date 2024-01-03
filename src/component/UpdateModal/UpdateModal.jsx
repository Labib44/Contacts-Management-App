/* eslint-disable react/prop-types */

// import toast from "react-hot-toast";


const UpdateModal = ({ title, closeModal, modalData, }) => {

    // const {imageUrl, name, email, number, address}=modalData;

    console.log('update modal', modalData)

    return (
        <div>
            <input type="checkbox" id="update-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label onClick={closeModal} htmlFor="update-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <h3 className="text-lg font-bold">{title}</h3>

                    <div className="flex justify-center p-10">
                        <div>
                            <img alt="" className="w-28 h-28 rounded-full ri ri dark:bg-gray-500 ri ri" src={modalData?.imageUrl} />
                            <h3 className="text-lg font-bold p-2">{modalData?.name}</h3>
                        </div>
                    </div>

                    <form className='grid grid-cols-1 gap-5 p-5'>
                        <input name='email' type="email" placeholder="Email" readOnly className="input input-bordered input-info w-full"/>
                        <input name='phnNumber' type="text" placeholder="Phone number" className="input input-bordered input-info w-full "/>
                        <input name='phnNumber' type="text" placeholder="Address" className="input input-bordered input-info w-full "/>

                        <label htmlFor="update-modal" className="btn btn-info text-white">Update</label>

                    </form>
                </div>

            </div>
        </div>
    );
};

export default UpdateModal;