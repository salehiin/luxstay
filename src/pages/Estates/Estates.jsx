import { useLoaderData, useParams } from "react-router-dom";
import { LuMapPin } from "react-icons/lu";

const Estates = () => {
  const estates = useLoaderData();

  const { id } = useParams();

  const estate = estates.find((estate) => estate.id === id);
  console.log(estates, id);

  return (
    <div>
      <div
        className="hero min-h-screen relative"
        style={{
          backgroundImage: `url(${estate.image_url})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className=" ">
            <div className="absolute left-4 top-2 text-left">
              <p className="text-[#f0f3bd] text-xl font-bold ">
                {" "}
                {estate.segment_name}
              </p>
              <p className="text-accent text-xl font-bold">
                For {estate.status}
              </p>
            </div>

            <h1 className="mb-5 textwhite text-4xl absolute left-4 bottom-[96px]">
              {estate.estate_title}
            </h1>

            

            <p className="text-white text-xl absolute right-8 bottom-[104px]">{estate.price}</p>

            
            <p className="text-white text-xl font-bold flex items-center absolute left-4 bottom-[86px]">
              <LuMapPin />
              &nbsp;{estate.location}
            </p>
            

            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
        </div>
      </div>
      <ul className=" font-semibold list-disc ml-6 mt-2">
        <li className="text-[#2B3440]"> <span className="font-bold">Property ID-</span> {estate.id}</li>
        <li className="text-[#2B3440] my-1"> <span className="font-bold">Property Size-</span> {estate.area}</li>
        <li className="text-[#2B3440]"><span className="font-bold">Facilities-
        
        {estate.facilities.map((facility, index) => (<span className="ml-8" key={index}>{facility}.</span>))}

        
        
        
        </span>

        {/* <ol>
        {estate.facilities.map((facility, index) => (
            <span className="ml-8" key={index}>{facility},</span>
          ))}

        </ol> */}

        {/* {estate.facilities} */}
        
        </li>
      </ul>
      <div className="text-center m-0 md:m-4 p-8">
        <h3 className="font-semibold text-3xl mb-10">Description</h3>
        <p className="m-0 md:m-6">{estate.description} These prestigious properties transcend mere living spaces, embodying the epitome of architectural brilliance and lavish amenities. From sprawling mansions nestled in idyllic countryside settings to sleek penthouses gracing the skylines of vibrant cities, luxury real estate caters to the most refined tastes and extravagant lifestyles.</p>
        <p>These elite properties boast exquisite craftsmanship and meticulous attention to detail, featuring bespoke finishes and state-of-the-art technology. Beyond their awe-inspiring aesthetics, luxury residences often provide a plethora of indulgent amenities, such as private pools, home theaters, and expansive outdoor entertaining areas. Moreover, their prime locations offer breathtaking views of iconic landmarks or serene natural landscapes, elevating the living experience to unmatched heights. In essence, luxury real estate represents the ultimate expression of prestige and sophistication, where every aspect of living is curated to deliver an unparalleled sense of grandeur and refinement.</p>
      </div>
      {/* <div className="">
                <img src={estate.image_url} alt="" />
                <h2 className="text-5xl">Estate Details</h2>
                <p>{id}</p>
                <div>
                    {estate.area}
                </div>
                <p>{estate.description}</p>
                
            </div> */}
    </div>
  );
};

export default Estates;

// concep-5  05:00
// CHARGE USD 220.00.
// 159255 - 132635
// 26620 + 24200
// 50820
// 150125 - 132635
// 17490 + 24200
// 41690
