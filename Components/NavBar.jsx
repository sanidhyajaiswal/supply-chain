import { useEffect, useState, useContext } from "react";

import { TrackingContext } from "../Conetxt/TrackingContext";
import { Nav1, Nav2, Nav3 } from "../Components/index";
export default () => {
  const [state, setState] = useState(false);
  const { currentUser, connectWallet } = useContext(TrackingContext);

  const navigation = [
    { title: "Home ", path: "#" },
    { title: "Services", path: "#" },
    { title: "Contact Us", path: "#" },
  ];

  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (!target.closest(".menu-btn")) setState(false);
    };
  }, []);

  return (
    <nav
      className={`bg-white pb-5 md:text-sm ${state
        ? "shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-2 md:mt-0"
        : ""
        }`}
    >
      <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
        <div className="flex items-center justify-between py-5 md:block">
          <a href="javascript:void(0)">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.0" preserveAspectRatio="xMidYMid meet" viewBox="65 168 222.11 137.92" className="w-20 h-20 ">

              <g transform="translate(0.000000,502.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                <path d="M1857 3319 c-32 -11 -76 -31 -98 -45 -41 -26 -111 -93 -136 -131 -10 -14 -33 -26 -69 -34 -29 -7 -80 -26 -111 -44 -62 -34 -98 -75 -269 -314 -89 -123 -90 -124 -144 -138 -171 -43 -286 -167 -308 -330 -7 -51 -14 -67 -40 -91 -28 -27 -32 -36 -32 -84 0 -44 4 -59 23 -76 23 -22 30 -22 213 -20 l189 3 0 25 0 25 -172 3 c-158 2 -173 4 -183 22 -13 24 -5 45 24 58 19 9 24 20 29 74 10 107 41 174 112 245 52 51 73 65 130 82 37 12 75 21 85 21 13 0 57 53 132 156 176 244 186 255 262 294 67 34 73 35 210 40 l141 5 3 28 c3 26 2 27 -42 27 -59 0 -76 8 -76 35 0 29 83 87 157 111 82 26 83 25 83 -124 0 -106 3 -132 16 -143 11 -9 20 -10 32 -2 13 7 18 28 20 82 l3 71 213 0 c173 0 216 3 225 14 9 11 10 20 1 35 -10 20 -19 21 -225 21 l-215 0 0 30 0 30 344 0 c296 0 345 2 350 15 3 8 3 22 0 30 -5 13 -60 15 -413 15 -380 -1 -410 -2 -464 -21z" />
                <path d="M1377 2726 c-155 -71 -177 -313 -38 -411 35 -25 54 -30 115 -33 76 -4 141 14 152 42 4 11 -26 77 -52 114 -1 2 -17 -4 -34 -13 -99 -51 -196 74 -117 152 21 22 36 27 68 27 22 -1 46 -7 52 -13 19 -19 26 -13 57 49 l30 59 -32 17 c-42 22 -163 28 -201 10z" />
                <path d="M1640 2510 l0 -220 65 0 65 0 0 220 0 220 -65 0 -65 0 0 -220z" />
                <path d="M1800 2675 l0 -55 40 0 40 0 0 -165 0 -165 65 0 65 0 0 165 0 165 40 0 40 0 0 55 0 55 -145 0 -145 0 0 -55z" />
                <path d="M2110 2725 c0 -3 27 -59 60 -125 l60 -120 0 -95 0 -95 65 0 65 0 0 98 c0 54 4 102 9 108 10 9 121 221 121 229 0 3 -33 5 -73 5 l-74 0 -18 -40 c-10 -23 -22 -43 -27 -46 -4 -3 -17 15 -28 40 l-19 46 -71 0 c-38 0 -70 -2 -70 -5z" />
                <path d="M1360 2035 l0 -65 40 0 c22 0 40 5 40 10 0 6 -13 10 -30 10 -30 0 -30 1 -30 55 0 30 -4 55 -10 55 -6 0 -10 -28 -10 -65z" />
                <path d="M1547 2088 c-9 -7 -20 -27 -23 -45 -5 -26 -1 -37 19 -57 30 -30 53 -33 85 -10 27 18 31 84 6 108 -19 19 -64 21 -87 4z m71 -20 c18 -18 14 -53 -7 -72 -29 -26 -61 -6 -61 38 0 18 3 36 7 39 11 11 48 8 61 -5z" />
                <path d="M1768 2090 c-25 -15 -33 -66 -14 -95 33 -51 106 -40 106 15 0 27 -3 30 -30 30 -16 0 -30 -4 -30 -10 0 -5 9 -10 20 -10 24 0 27 -25 4 -34 -26 -10 -54 12 -54 43 0 39 21 54 62 46 29 -7 31 -6 19 9 -15 18 -57 21 -83 6z" />
                <path d="M1960 2035 c0 -37 4 -65 10 -65 6 0 10 28 10 65 0 37 -4 65 -10 65 -6 0 -10 -28 -10 -65z" />
                <path d="M2084 2086 c-11 -29 1 -50 34 -60 33 -9 43 -32 18 -42 -8 -3 -24 -1 -35 5 -13 7 -22 8 -26 1 -3 -6 6 -15 22 -21 69 -26 106 48 38 77 -43 18 -46 37 -5 32 16 -1 31 2 32 7 5 17 -71 18 -78 1z" />
                <path d="M2260 2090 c0 -5 9 -10 20 -10 18 0 20 -7 20 -55 0 -30 5 -55 10 -55 6 0 10 25 10 55 0 48 2 55 20 55 11 0 20 5 20 10 0 6 -22 10 -50 10 -27 0 -50 -4 -50 -10z" />
                <path d="M2450 2035 c0 -37 4 -65 10 -65 6 0 10 28 10 65 0 37 -4 65 -10 65 -6 0 -10 -28 -10 -65z" />
                <path d="M2587 2082 c-26 -29 -22 -77 9 -101 33 -26 46 -26 75 -1 18 14 20 19 9 20 -9 0 -21 -5 -27 -11 -8 -8 -17 -8 -31 0 -27 14 -36 45 -22 72 10 18 18 20 52 15 36 -6 40 -5 28 9 -17 21 -73 19 -93 -3z" />
                <path d="M2784 2086 c-11 -29 1 -50 34 -60 33 -9 43 -32 18 -42 -8 -3 -24 -1 -35 5 -13 7 -22 8 -26 1 -3 -6 6 -15 22 -21 69 -26 106 48 38 77 -43 18 -46 37 -5 32 16 -1 31 2 32 7 5 17 -71 18 -78 1z" />
              </g>
            </svg>
          </a>
          <div className="md:hidden">
            <button
              className="menu-btn text-gray-500 hover:text-gray-800"
              onClick={() => setState(!state)}
            >
              {state ? <Nav1 /> : <Nav2 />}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 items-center mt-8 md:mt-0 md:flex ${state ? "block" : "hidden"
            } `}
        >
          <ul className="justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <li key={idx} className="text-gray-700 hover:text-gray-900">
                  <a href={item.path} className="block">
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="flex-1 gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">
            {currentUser ? (
              <p className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex">
                {currentUser.slice(0, 25)}..
              </p>
            ) : (
              <button
                onClick={() => connectWallet()}
                className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex"
              >
                Connect Wallet
                <Nav3 />
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
