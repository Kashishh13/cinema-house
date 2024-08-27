export const Message  = ({placeholder}) =>
{
    return(
        <div className="text-sm w-full">
            <textarea className="w-full h-40 mt-2 bg-black p-6 border border-white rounded "
            placeholder={placeholder}
            ></textarea>
        </div>
    )
};
