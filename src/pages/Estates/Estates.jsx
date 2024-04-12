import { useParams } from "react-router-dom";

const Estates = () => {

    const {id} = useParams();

    return (
        <div>
            <div className="">
                <h2 className="text-5xl">Estate Details</h2>
                <p>{id}</p>
            </div>
        </div>
    );
};

export default Estates;