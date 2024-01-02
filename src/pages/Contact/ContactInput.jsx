/* eslint-disable react/prop-types */


const ContactInput = ({ typeName, placeholderName, register, error, errorMessagePattern, name, value }) => {
    return (
        <div>
            <input
                id="blogTitle"
                {...register(name, errorMessagePattern)}
                type={typeName}
                placeholder={placeholderName}
                className="w-full text-gray-600 placeholder:text-gray-400 h-full outline-none rounded-md border border-info p-4 my-4 "
                defaultValue={value ? value : undefined}
            />
            {error && <p className="text-red-500 -mt-3">{error.message}</p>}

        </div >
    );
};

export default ContactInput;