import { Link } from "react-router-dom";

const AboutSction = () => {
  return (
    <div>
      <section className="flex items-center bg-stone-100 lg:h-screen font-poppins dark:bg-gray-800 ">
        <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
          <div className="px-4 mb-10 md:text-center md:mb-20">
            <p className="mb-2 md:text-4xl  font-semibold text-blue-500 dark:text-gray-400">
              About Us
            </p>
            <h2 className="pb-2 text-2xl font-bold text-gray-800 md:text-4xl dark:text-gray-300">
              What we do
            </h2>
            <div className="flex w-32 mt-1 mb-6 overflow-hidden rounded md:mx-auto md:mb-14">
              <div className="flex-1 h-2 bg-blue-200"></div>
              <div className="flex-1 h-2 bg-blue-400"></div>
              <div className="flex-1 h-2 bg-blue-300"></div>
            </div>
          </div>
          <div className="flex flex-wrap items-center">
            <div className="w-full px-4 mb-10 md:w-1/2 lg:mb-0 ">
              <h2 className="mb-4 text-2xl font-bold text-gray-700 dark:text-gray-300">
                We are providing a better facility
              </h2>
              <p className="mb-4 text-base leading-7 text-gray-500 dark:text-gray-400">
                Indulge in opulence with our exquisite facility—where
                sophistication meets comfort. Elevate your experience in our
                lavish rooms, meticulously designed for unparalleled luxury.
                Your haven awaits, a sanctuary of style and tranquility
              </p>
              <ul className="mb-10">
                <li className="flex items-center mb-4 text-base text-gray-600 dark:text-gray-400">
                  <span className="mr-3 text-blue-500 dark:text-blue-400 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="w-5 h-5 bi bi-arrow-right-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                    </svg>
                  </span>
                  Sumptuous Serenity Suite
                </li>
                <li className="flex items-center mb-4 text-base text-gray-600 dark:text-gray-400">
                  <span className="mr-3 text-blue-500 dark:text-blue-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="w-5 h-5 bi bi-arrow-right-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                    </svg>
                  </span>
                  Elegant Escape Retreat
                </li>
                <li className="flex items-center mb-4 text-base text-gray-600 dark:text-gray-400">
                  <span className="mr-3 text-blue-500 dark:text-blue-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="w-5 h-5 bi bi-arrow-right-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                    </svg>
                  </span>
                  Luxury Haven Hideaway
                </li>
                <li className="flex items-center mb-4 text-base text-gray-600 dark:text-gray-400">
                  <span className="mr-3 text-blue-500 dark:text-blue-400 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="w-5 h-5 bi bi-arrow-right-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                    </svg>
                  </span>
                  Chic Comfort Chambers
                </li>
                <li className="flex items-center mb-4 text-base text-gray-600 dark:text-gray-400">
                  <span className="mr-3 text-blue-500 dark:text-blue-400 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="w-5 h-5 bi bi-arrow-right-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                    </svg>
                  </span>
                  Opulent Oasis Dwelling
                </li>
              </ul>
         <Link to="/apartment" className="px-4 py-2 text-gray-100 bg-blue-500 rounded-md dark:bg-blue-400 dark:hover:bg-blue-500 hover:bg-blue-600">
             See All Apartment
         </Link>
            </div>
            <div className="relative w-full px-4 mb-10 md:w-1/2 lg:mb-0 ">
              <img
                src="https://i.ibb.co/L86NPjN/Basic-Bluebell-01-scaled.jpg"
                alt=""
                className="relative z-40 object-cover w-full rounded-md md:h-96 h-44 "
              />
              <div className="absolute top-0 right-0 items-center justify-center hidden -mt-16 lg:inline-flex"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSction;
