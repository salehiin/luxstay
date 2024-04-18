import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div>
      <div
        className="hero min-h-screen "
        style={{
          backgroundImage:
            "url(https://i.postimg.cc/XJSnLYX9/404.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold text-[#f0f3bd]">Oops!!!</h1>


            <p>{error.statusText || error.message}</p>
            {

                error.status === 404 && <div>

                    <h3 className="text-9xl text-accent font-bold text-[#02c39a">404</h3>
                    <p className="text-6xl mb-6">Page not found</p>
                    
                    <Link to="/"><button className="btn btn-accent">Home</button></Link>

                </div>

            }



            
          </div>
        </div>
      </div>

      {/* DEFAULT */}
      {/* <h2>Oops!!!</h2>
            <p>{error.statusText || error.message}</p>
            {

                error.status === 404 && <div>

                    <h3>404- Page not found</h3>
                    <p>Go back where you from</p>
                    <Link to="/"><button>Home</button></Link>

                </div>

            } */}
      {/* DEFAULT */}
    </div>
  );
};

export default ErrorPage;
