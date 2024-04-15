import Estate from "./Estate";
import Slider from "./Slider";
import { useLoaderData } from "react-router-dom";


const Home = () => {

    const estates = useLoaderData();
    console.log(estates)

    return (
        <div>
            <Slider></Slider>
            <div class="p-0 lg:px-56 text-center mt-12">
                <h2 class="text-4xl font-bold">Our Properties</h2>
                <p class="m-6">From booking to boarding, our hassle-free ticketing ensures your journey begins smoothly. Experience convenience, reliability, and comfort every step of the way.</p>
            </div>
            <div className="flex flex-wrap gap-4 text-center">
            
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