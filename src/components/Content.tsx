import Layout from "../assets/img/layout.gif";

const Content = () => {
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
              <div className="flex justify-end">
                <button
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

        
      </div>
    </section>
  );
};

export default Content;
