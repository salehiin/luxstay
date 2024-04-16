import { useLoaderData, useParams } from "react-router-dom";

const Estates = () => {

    const estates = useLoaderData();

    const {id} = useParams();

    const estate = estates.find(estate => estate.id === id)
    console.log(estates, id)

    return (
        <div>
            <div className="">
                <img src={estate.image_url} alt="" />
                <h2 className="text-5xl">Estate Details</h2>
                <p>{id}</p>
                <div>
                    {estate.area}
                </div>
                <p>{estate.description}</p>
                
            </div>
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