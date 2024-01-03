/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Icon } from '@iconify/react';
import { useState } from 'react';
import ConfirmationModal from '../../component/ConfirmationModal/ConfirmationModal';
import axios from 'axios';
import toast from 'react-hot-toast';
import UpdateModal from '../../component/UpdateModal/UpdateModal';
import { Link } from 'react-router-dom';

const AllContactCard = ({ contact, refetch }) => {
    const { _id, imageUrl, name, email, number, address } = contact;

    const [deletingContact, setDeletingContact] = useState(null);
    const [updateContact, setUpdateContact] = useState(null);

    const closeModal = () => {
        setDeletingContact(null);
    }

    // Delate contact from list
    const handleDelete = () => {
        axios.delete(`${import.meta.env.VITE_SERVER_URI}/contact/${_id}`)
            .then((res) => {
                console.log('Delete', res);
                if (res.data.deletedCount > 0) {
                    refetch();
                    toast.success(`Doctor ${name} deleted Successfully`)
                }
            })
    }

    // Add favourites contact
    const handleFavourites = (data) => {
        console.log('favourites data', data)

        fetch(`${import.meta.env.VITE_SERVER_URI}/favourite`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then(() => {
                toast.success("Contact Added Successfully!");
               
            });
    }

    // Update contact details from list.
    //   const handleUpdate = () => {
    //     console.log(_id);
    //     fetch(`${import.meta.env.VITE_SERVER_URI}/contact/${_id}`, {
    //         method: 'PUT',

    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             // console.log(data);
    //             if (data.modifiedCount > 0) {
    //                 toast.success('Update successful.')
    //                 refetch()
    //             }
    //         })
    // }



    return (
        <div className="flex flex-col justify-center max-w-sm p-6 shadow-md rounded-xl sm:px-12">
            <img src={imageUrl} alt="" className="w-32 h-32 mx-auto rounded-full aspect-square" />
            <div className="space-y-4 text-center divide-y ">
                <div className="my-2 space-y-1">
                    <h2 className="text-xl font-semibold sm:text-2xl">{name}</h2>
                    <span className='flex justify-center items-center'><Icon icon="fontisto:email" className='text-xl text-red-700' /><p className="px-2 text-xs sm:text-base ">{email}</p></span>
                    <span className='flex justify-center items-center'><Icon icon="ph:phone" className='text-xl' /><p className="px-2 text-xs sm:text-base ">{number}</p></span>
                    <span className='flex justify-center items-center'><Icon icon="entypo:address" className='text-xl text-green-700' /><p className="px-2 text-xs sm:text-base ">{address}</p></span>

                </div>
                <div className="flex justify-center pt-2 space-x-4 align-center">
                    <label  htmlFor="update-modal" className="btn btn-ghost btn-xs">Update</label>
                    <label onClick={() => setDeletingContact(contact)} htmlFor="confirm-modal" className="btn btn-ghost btn-xs">Delete</label>
                    <label onClick={() => handleFavourites(contact)} htmlFor="confirm-modal" className="btn btn-ghost btn-xs"><Icon icon="uil:heart" className='text-2xl text-red-600' /></label>
                </div>
            </div>

            {/* update modal */}
            {
                updateContact && <UpdateModal
                    title={`Are you sure you want to Update`}
                    // successAction={handleUpdate}
                    modalData={updateContact}
                    closeModal={closeModal}
                >

                </UpdateModal>
            }


            {/* delete modal */}

            {
                deletingContact && <ConfirmationModal
                    title={`Are you sure you want to delete`}
                    message={`If you want delete ${deletingContact?.name}. It can't be undo`}
                    successAction={handleDelete}
                    modalData={deletingContact}
                    closeModal={closeModal}

                >

                </ConfirmationModal>
            }
        </div>
    );
};

export default AllContactCard;