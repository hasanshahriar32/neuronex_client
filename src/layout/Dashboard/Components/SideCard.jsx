import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const SideCard = ({ sesstionData }) => {
  return (
    <>
      {sesstionData?.map((session) => (
        <Link key={session?._id}>
          <div className="h-[180px] my-2 max-h-[180px] min-h-[180px] lg:h-[200px] lg:max-h-[200px] lg:min-h-[200px] overflow-hidden flex items-center justify-center">
            <a href="" className="group relative block h-64  sm:h-80 lg:h-96">
              <span className="absolute inset-0 border-2 border-dashed border-black"></span>

              <div className="relative group-hover:ml-2 group-hover:mt-2 duration-100 flex h-full transform items-end border-2 border-black  transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0  lg:p-8">
                  {/* date and time  */}
                  <div className="flex items-center mt-3 lg:mt-5 justify-between">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                      <p className="text-sm font-medium">12/12/2021</p>
                    </div>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>

                      <p className="text-sm font-medium">12:00</p>
                    </div>
                  </div>
                  {/* title */}

                  <h2 className="mt-4 h-14 overflow-hidden text-xl font-medium ">
                    {session?.sessionTitle}
                  </h2>
                  <div className="flex mt-4  items-center justify-between flex-row flex-wrap">
                    <div className="flex  gap-1">
                      <span className="whitespace-nowrap rounded-full w-[120px] lg:w-[150px] overflow-hidden bg-success-content px-2 py-1 text-xs text-accent">
                        Subject Name Subject Name Subject Name Subject
                        NameSubject Name Subject NameSubject Name Subject Name
                      </span>
                    </div>
                    <button
                      type="button"
                      className="inline-flex  items-center justify-center rounded-lg border w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 group-hover:bg-base-100/40 lg:p-8">
                  <h3 className="text-xl font-medium ">Go around the world</h3>

                  <div className="flex mt-8 flex-row items-center justify-between">
                    <div className="flex flex-row items-center justify-start">
                      <p className="text-accent-focus font-bold">Restore </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mt-1 group-hover:translate-x-3 duration-1000 rotate-90 text-accent-focus"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 11l7-7 7 7M5 19l7-7 7 7"
                        />
                      </svg>
                    </div>
                    <button className="btn btn-error btn-outline text-lg">
                      <RiDeleteBinLine />
                    </button>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </Link>
      ))}
    </>
  );
};

export default SideCard;
