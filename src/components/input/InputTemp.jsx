
const InputTemp = ({ ref, filed }) => {
    console.log();
    return (
        <div>
            <div className="sm:col-span-2">
                <label
                    htmlFor={ref}
                    className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                >
                    <input
                        type="text"
                        name="name"
                        id={ref}
                        placeholder={ref}
                        className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                    />
                    <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                        {filed}
                    </span>
                </label>
            </div>
        </div>
    );
};

export default InputTemp;