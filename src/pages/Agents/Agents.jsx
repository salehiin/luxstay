const Agents = () => {
  return (
    <div>
      <div
        className="hero min-h-80 max-h-96"
        style={{
          backgroundImage:
            "url(https://i.postimg.cc/4yJ55ZzB/sliderthree.jpg)",
            
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content ">
          <div className="max-w-6xl">
            <h1 className="mb-5 text-5xl font-bold leading-relaxed">
              Our local experts will guide you <br /> on your journey.
            </h1>
          </div>
        </div>
      </div>

      <div className="my-20">
        {/* SINGLE AGENTS 1 */}
        <div className="p-5 flex flex-col md:flex-row border-y-2 shadow-lg shadow-green-100 items-center justify-evenly m-3">
          <div className="flex items-center shadow-md shadow-green-200  w-80 mb-4 lg:mb-0">
            <img
              className="w-full"
              src="https://i.postimg.cc/mZnPth1j/aone.png"
              alt=""
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold">John Smith</h3>
            <h6 className="text[#2B3440] font-semibold py-3">
              REAL ESTATE PROFESSIONAL
            </h6>
            <hr className="w-20" />
            <h4 className="text-[#02c39a] font-semibold py-3">
              Elite Estates Realty
            </h4>
            <p>123 Main Street, Suite 100, Anytown, USA</p>
          </div>
          <div>
            <h5 className="text[#2B3440] font-semibold mb-1">Contact</h5>
            <p>M: +00 222 111 333</p>
            <p className="py-3">O: + 12 3 5555 4444</p>
            <a href="" className="font-semibold text-sm">
              SEND MESSAGE
            </a>
          </div>
        </div>
        {/* SINGLE AGENTS 2 */}
        <div className="p-5 flex flex-col md:flex-row border-y-2 shadow-lg shadow-green-100 items-center justify-evenly m-3">
          <div className="shadow-md shadow-green-200  w-80 mb-4 lg:mb-0">
            <img
              className="w-full"
              src="https://i.postimg.cc/kM6GSqmy/atwo.jpg"
              alt=""
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold">David Lee</h3>
            <h6 className="text[#2B3440] font-semibold py-3">
              REAL ESTATE PROFESSIONAL
            </h6>
            <hr className="w-20" />
            <h4 className="text-[#02c39a] font-semibold py-3">
            Prime Properties Group
            </h4>
            <p>456 Elm Avenue, Unit 200, Springfield, USA</p>
          </div>
          <div>
            <h5 className="text[#2B3440] font-semibold mb-1">Contact</h5>
            <p>M: +00 222 111 333</p>
            <p className="py-3">O: + 12 3 5555 4444</p>
            <a href="" className="font-semibold text-sm">
              SEND MESSAGE
            </a>
          </div>
        </div>
        {/* SINGLE AGENTS 3 */}
        <div className="p-5 flex flex-col md:flex-row border-y-2 shadow-lg shadow-green-100 items-center justify-evenly m-3">
          <div className="shadow-md shadow-green-200  w-80 mb-4 lg:mb-0">
            <img
              className="w-full"
              src="https://i.postimg.cc/7P2P693s/athree.jpg"
              alt=""
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Emily Johnson</h3>
            <h6 className="text[#2B3440] font-semibold py-3">
              REAL ESTATE PROFESSIONAL
            </h6>
            <hr className="w-20" />
            <h4 className="text-[#02c39a] font-semibold py-3">
            Metro Realty Solutions
            </h4>
            <p>789 Oak Boulevard, Building C, Cityville, USA</p>
          </div>
          <div>
            <h5 className="text[#2B3440] font-semibold mb-1">Contact</h5>
            <p>M: +00 222 111 333</p>
            <p className="py-3">O: + 12 3 5555 4444</p>
            <a href="" className="font-semibold text-sm">
              SEND MESSAGE
            </a>
          </div>
        </div>
        {/* SINGLE AGENTS 4 */}
        <div className="p-5 flex flex-col md:flex-row border-y-2 shadow-lg shadow-green-100 items-center justify-evenly m-3">
          <div className="shadow-md shadow-green-200  w-80 mb-4 lg:mb-0">
            <img
              className="w-full"
              src="https://i.postimg.cc/x1xVgNGN/afour.jpg"
              alt=""
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Michael Wang</h3>
            <h6 className="text[#2B3440] font-semibold py-3">
              REAL ESTATE PROFESSIONAL
            </h6>
            <hr className="w-20" />
            <h4 className="text-[#02c39a] font-semibold py-3">
            Coastal Living Real Estate
            </h4>
            <p>101 Ocean Drive, Suite 50, Beachtown, USA</p>
          </div>
          <div>
            <h5 className="text[#2B3440] font-semibold mb-1">Contact</h5>
            <p>M: +00 222 111 333</p>
            <p className="py-3">O: + 12 3 5555 4444</p>
            <a href="" className="font-semibold text-sm">
              SEND MESSAGE
            </a>
          </div>
        </div>
        {/* SINGLE AGENTS 5 */}
        <div className="p-5 flex flex-col md:flex-row border-y-2 shadow-lg shadow-green-100 items-center justify-evenly m-3">
          <div className="shadow-md shadow-green-200  w-80 mb-4 lg:mb-0">
            <img
              className="w-full"
              src="https://i.postimg.cc/FR0qtYSZ/afive.jpg"
              alt=""
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Sarin Martinez</h3>
            <h6 className="text[#2B3440] font-semibold py-3">
              REAL ESTATE PROFESSIONAL
            </h6>
            <hr className="w-20" />
            <h4 className="text-[#02c39a] font-semibold py-3">
            Summit Real Estate Associates
            </h4>
            <p>555 Mountain View Road, Floor 3, Hillside, USA</p>
          </div>
          <div>
            <h5 className="text[#2B3440] font-semibold mb-1">Contact</h5>
            <p>M: +00 222 111 333</p>
            <p className="py-3">O: + 12 3 5555 4444</p>
            <a href="" className="font-semibold text-sm">
              SEND MESSAGE
            </a>
          </div>
        </div>
        {/* SINGLE AGENTS */}
        <div className="p-5 flex flex-col md:flex-row border-y-2 shadow-lg shadow-green-100 items-center justify-evenly m-3">
          <div className="shadow-md shadow-green-200  w-80 mb-4 lg:mb-0">
            <img
              className="w-full"
              src="https://i.postimg.cc/3x6bdXC1/asix.jpg"
              alt=""
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Bob Brown</h3>
            <h6 className="text[#2B3440] font-semibold py-3">
              REAL ESTATE PROFESSIONAL
            </h6>
            <hr className="w-20" />
            <h4 className="text-[#02c39a] font-semibold py-3">
            Cityscape Realty Group
            </h4>
            <p>888 Urban Avenue, Tower 1, Metropolis, USA</p>
          </div>
          <div>
            <h5 className="text[#2B3440] font-semibold mb-1">Contact</h5>
            <p>M: +00 222 111 333</p>
            <p className="py-3">O: + 12 3 5555 4444</p>
            <a href="" className="font-semibold text-sm">
              SEND MESSAGE
            </a>
          </div>
        </div>
        {/* SINGLE AGENTS */}
      </div>
    </div>
  );
};

export default Agents;
