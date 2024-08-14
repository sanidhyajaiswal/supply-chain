import images from "../Images/index";
import Image from "next/image";
import { Shipped, Ship_Info, Start_Ship, User_Profile, Update_Info, Add_pack } from "../Components/index";

export default ({
  setOpenProfile,
  setCompleteModal,
  setGetModel,
  setStartModal,
  setCreateShipmentModel,
  setUpdateModal
}) => {
  const team = [
    {
      avatar: images.compShipment,
      text: "Complete Shipment",
      info: "To pay and deliver the shipment.",
      tag: <Shipped />
    },
    {
      text: "Shipment Info",
      info: "Information about specific shipment.",
      tag: <Ship_Info />
    },
    {

      text: "Start Shipment",
      info: "Start the Shipment Process.",
      tag: <Start_Ship />
    },
    {
      text: "User Profile",
      info: "Detailed user profile.",
      tag: <User_Profile />
    },
    {
      text: "Update Shipment",
      info: "Update the Location of the Shipment.",
      tag: <Update_Info />
    },
    {
      text: "Add Shipment",
      info: "Add the package information to ship.",
      tag: <Add_pack />
    },
  ];

  const openModelBox = (text) => {
    if (text === 1) {
      setCompleteModal(true);
    } else if (text === 2) {
      setGetModel(true);
    } else if (text === 3) {
      setStartModal(true);
    } else if (text === 4) {
      setOpenProfile(true);
    } else if (text === 5) {
      setUpdateModal(true);
    } else if (text === 6) {
      setCreateShipmentModel(true);
    }
  };
  return (
    <section className="py-0 pb-14">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-lg">
          <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
            Shipment Services
          </h3>
          <p className="text-gray-600 mt-2">
            All shipment data and traacking realted functions and queries.
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {team.map((item, i) => (
              <li key={i}>
                <div class="relative flex flex-col mt-6 text-neutral-100 bg-indigo-700 shadow-md bg-clip-border rounded-xl w-96  hover:shadow-lg hover:shadow-gray-400">
                  <div class="p-6">
                    {item.tag}
                    <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                      {item.text}
                    </h5>
                    <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                      {item.info}
                    </p>
                  </div>
                  <div class="p-6 pt-0">
                    <a href="#" class="inline-block">
                      <button
                        class="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-neutral-100 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-50 hover:text-gray-800 active:bg-gray-900/20"
                        type="button" onClick={() => openModelBox(i + 1)}>
                        {item.text}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                          stroke="currentColor" class="w-4 h-4">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                        </svg>
                      </button>
                    </a>
                  </div>
                </div>

              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
