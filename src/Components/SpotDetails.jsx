import { Link, useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";


const SpotDetails = () => {
    let details = useLoaderData()
    let { id } = useParams()
    let detail = details.find(detail => detail._id == id)
    let { name } = detail
    let handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/spots/${_id}`,{
                    method:'DELETE'
                }
                )
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    }
                    )
            }
        });
    }
    return (
        <div>
            <div>{name}</div>
            <Link to={`/updateSpot/${id}`}><button className="btn btn-primary">Update</button></Link>
            <button onClick={() => handleDelete(id)} className="btn btn-primary">Delete</button>
        </div>
    );
};

export default SpotDetails;