import { BiSolidDollarCircle } from "react-icons/bi";
import { MdAccessTimeFilled } from "react-icons/md";
import { Link } from "react-router-dom";

const SpotCard = ({ spot, spots, setSpots }) => {
    let { name, email, country, spotName, location, cost, time, seasonality, visitors, description, photo,_id } = spot
    return (
        <div>
            <div className="card bg-base-100 w-96 h-[450px] shadow-xl">
                <figure>
                    <img src={photo} className="max-w-full m-0 p-0 overflow-hidden h-auto"/>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{spotName}</h2>
                    <div className="flex justify-between">
                        <div className="flex items-center gap-1">
                            <BiSolidDollarCircle />
                            <p>cost: {cost}</p>
                        </div>
                        <div>visitors(/year): {visitors}</div>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex items-center gap-1">
                            <MdAccessTimeFilled />
                            travel time: {time}
                        </div>
                        <div>seasonality: {seasonality}</div>
                    </div>
                    <div className="card-actions justify-end">
                        <Link to={`/spot/${_id}`}><button className="btn btn-primary">View Details</button></Link>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpotCard;