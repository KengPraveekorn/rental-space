import Layout from "../assets/img/layout.gif";
import Modal from "./Modal";

const Content = () => {
  // Modal();
  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:px-6">
        <div className="text-center mb-8 lg:mb-16">
          <div className="grid grid-cols-3 gap-4">
            <div className="col-start-2">
              <h2 className="mb-8 text-xl tracking-tight font-extrabold text-gray-900">
                ชื่อสาขา: 1234
              </h2>
            </div>
            <div className="col-start-3 ">
              <div className="flex justify-end block space-y-4 md:flex md:space-y-0 md:space-x-4 rtl:space-x-reverse">
                <button
                  data-modal-target="medium-modal"
                  data-modal-toggle="medium-modal"
                  type="button"
                  className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                >
                  เลือกรายการ
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img src={Layout} alt="layout" />
          </div>
        </div>

        <div
          id="medium-modal"
          tabIndex={-1}
          className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div className="relative w-full max-w-lg max-h-full">
            {/* Modal content */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              {/* Modal header */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                  Default modal
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="medium-modal"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* Modal body */}
              <div className="p-4 md:p-5 space-y-4">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  With less than a month to go before the European Union enacts
                  new consumer privacy laws for its citizens, companies around
                  the world are updating their terms of service agreements to
                  comply.
                </p>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  The European Union’s General Data Protection Regulation
                  (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
                  common set of data rights in the European Union. It requires
                  organizations to notify users as soon as possible of high-risk
                  data breaches that could personally affect them.
                </p>
              </div>
              {/* Modal footer */}
              <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  data-modal-hide="medium-modal"
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  I accept
                </button>
                <button
                  data-modal-hide="medium-modal"
                  type="button"
                  className="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                >
                  Decline
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-row-3 grid-cols-1 md:grid-cols-3 gap-10 justify-items-center">
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700">
            <div className="px-5 pb-5 flex justify-center items-center">
              <a href="#">
                <h1 className="pb-5 pt-5 text-2xl text-center tracking-tight text-gray-900 dark:text-white">
                  ล็อค
                </h1>
                <h1 className="pb-8 text-5xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
                  SL
                </h1>
                <span className="bg-green-100 text-green-800 text-lg font-semibold px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-800 ms-1">
                  ว่าง
                </span>
              </a>
            </div>
          </div>
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700">
            <div className="px-5 pb-5 flex justify-center items-center">
              <a href="#">
                <h1 className="pb-5 pt-5 text-2xl text-center tracking-tight text-gray-900 dark:text-white">
                  ล็อค
                </h1>
                <h1 className="pb-8 text-5xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
                  SR
                </h1>
                <span className="bg-green-100 text-green-800 text-lg font-semibold px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-800 ms-1">
                  ว่าง
                </span>
              </a>
            </div>
          </div>
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700">
            <div className="px-5 pb-5 flex justify-center items-center">
              <a href="#">
                <h1 className="pb-5 pt-5 text-2xl text-center tracking-tight text-gray-900 dark:text-white">
                  ล็อค
                </h1>
                <h1 className="pb-8 text-5xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
                  A1
                </h1>
                <span className="bg-red-100 text-red-800 text-lg font-semibold px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-800 ms-1">
                  ไม่ว่าง
                </span>
              </a>
            </div>
          </div>
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700">
            <div className="px-5 pb-5 flex justify-center items-center">
              <a href="#">
                <h1 className="pb-5 pt-5 text-2xl text-center tracking-tight text-gray-900 dark:text-white">
                  ล็อค
                </h1>
                <h1 className="pb-8 text-5xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
                  A2
                </h1>
                <span className="bg-green-100 text-green-800 text-lg font-semibold px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-800 ms-1">
                  ว่าง
                </span>
              </a>
            </div>
          </div>
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700">
            <div className="px-5 pb-5 flex justify-center items-center">
              <a href="#">
                <h1 className="pb-5 pt-5 text-2xl text-center tracking-tight text-gray-900 dark:text-white">
                  ล็อค
                </h1>
                <h1 className="pb-8 text-5xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
                  A3
                </h1>
                <span className="bg-green-100 text-green-800 text-lg font-semibold px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-800 ms-1">
                  ว่าง
                </span>
              </a>
            </div>
          </div>
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700">
            <div className="px-5 pb-5 flex justify-center items-center">
              <a href="#">
                <h1 className="pb-5 pt-5 text-2xl text-center tracking-tight text-gray-900 dark:text-white">
                  ล็อค
                </h1>
                <h1 className="pb-8 text-5xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
                  A4
                </h1>
                <span className="bg-red-100 text-red-800 text-lg font-semibold px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-800 ms-1">
                  ไม่ว่าง
                </span>
              </a>
            </div>
          </div>
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700">
            <div className="px-5 pb-5 flex justify-center items-center">
              <a href="#">
                <h1 className="pb-5 pt-5 text-2xl text-center tracking-tight text-gray-900 dark:text-white">
                  ล็อค
                </h1>
                <h1 className="pb-8 text-5xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
                  B1
                </h1>
                <span className="bg-green-100 text-green-800 text-lg font-semibold px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-800 ms-1">
                  ว่าง
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
