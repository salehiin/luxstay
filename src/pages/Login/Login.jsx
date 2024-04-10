import { Link } from "react-router-dom";

const Login = () => {

  const handleLogin = e => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    console.log(form.get('password'));
  }

  return (
    <div>
       
      <div className="hero bg-base-200">
      
        <div className="hero-content flex-col">
          <div><h1 className="text-5xl font-bold py-2">Login now!</h1></div>
          {/* <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div> */}
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 pb-8">
            <form onSubmit={handleLogin} className="card-body pb-2">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className="text-center">Don't have an account?<Link to="/register" className="text-primary font-bold"> Register</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;



