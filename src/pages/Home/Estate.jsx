import { Link } from "react-router-dom";

const Estate = ({estates}) => {

  const {estate_title, image_url, id, segment_name, description, price, status} = estates;

  return (
    <div className="mx-auto">
      
      <div className="">

       
        
        <div className="card max-w-[372px] bg-base-100 shadow-xl">
          <figure>
            <img className="h-[252px] w-full"
              src={image_url}
              alt="Estates"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title flex justify-between">
              {estate_title}
              <div className="badge badge-secondary">{segment_name}</div>
            </h2>
            
            {
              description.length > 20
              ? <p>{description.slice(0,115)}...</p>
              : <p>{description}</p>
            }

            <div className="card-actions justify-between">
              <div className="badge badge-outline">{price}</div>
              
                
                    
                      {
                      
                      <Link to={`/estates/${id}`}><div className=" font-bold text-primary border-none">Details...</div></Link>
                      }
                    
                
              
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Estate;

// "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
