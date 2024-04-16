import { useParams } from "react-router-dom";

const Estates = () => {

    const {id, description, area, estate_title} = useParams();

    return (
        <div>
            <div className="">
                <h2 className="text-5xl">Estate Details</h2>
                <p>{id}</p>
                <div>
                    ${id.area}
                </div>
                
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