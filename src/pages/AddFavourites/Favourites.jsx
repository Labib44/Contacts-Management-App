/* eslint-disable no-empty */
import { useQuery } from "@tanstack/react-query";


const Favourites = () => {
    const { data: favourites, isLoading } = useQuery({
        queryKey: ['favourites'],
        queryFn: async () => {
            try {
                const res = await fetch(`${import.meta.env.VITE_SERVER_URI}/favourite`, {

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
        <div className="p-5">
            <h2 className='text-2xl'>All Favourite</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avater</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Number</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            favourites.map((favourite, i) => <tr
                                key={favourite._id}
                            >
                                <th>{i + 1}</th>
                                <th>
                                    <div className="avatar">
                                        <div className="w-24 rounded-full">
                                            <img src={favourite.imageUrl} alt="" />
                                        </div>
                                    </div>
                                </th>
                                <td>{favourite.name}</td>
                                <td>{favourite.email}</td>
                                <td>{favourite.number}</td>
                                <td>{favourite.address}</td>


                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Favourites;