import Estate from "./Estate";
import Slider from "./Slider";
import { useLoaderData } from "react-router-dom";


const Home = () => {

    const estates = useLoaderData();
    console.log(estates)

    return (
        <div>
            <Slider></Slider>
            <div className="flex flex-wrap gap-4">
                {
                    estates.map(aEstates => <Estate
                    
                        key = {aEstates._id}
                        estates = {aEstates}

                    ></Estate>)
                }
            </div>
        </div>
    );
};

export default Home;

// v- 52_5.5