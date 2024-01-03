/* eslint-disable no-empty */
import AllContactCard from "./AllContactCard";
import { useQuery } from "@tanstack/react-query";

const AllContacts = () => {


    const { data: contacts, isLoading, refetch } = useQuery({
        queryKey: ['contacts'],
        queryFn: async () => {
            try {
                const res = await fetch(`${import.meta.env.VITE_SERVER_URI}/contact`, {
                   
                });
                const data = await res.json();
                return data;
            }
            catch (error) {
                
            }
        }
    });


    if (isLoading) {
        return <progress className="progress w-56"></progress>
    }

    return (
        <div className="m-5">
            <div className='grid mt-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-10'>
                {
                    contacts?.map(contact => <AllContactCard
                        key={contact._id}
                        contact={contact}
                        refetch={refetch}
                    ></AllContactCard>)
                }
            </div>
        </div>
    );
};

export default AllContacts;