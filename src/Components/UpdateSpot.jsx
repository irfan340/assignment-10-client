import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateSpot = () => {
    let spot = useLoaderData()
    let { name, email, country, spotName, location, cost, time, seasonality, visitors, description, photo, _id } = spot

    let handleUpdateSpot = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const spotName = form.spotName.value
        const country = form.country.value
        const location = form.location.value
        const cost = form.cost.value
        const time = form.time.value
        const seasonality = form.seasonality.value
        const visitors = form.visitors.value
        const description = form.description.value
        const photo = form.photo.value

        const updatedSpot = { name, email, spotName, country, location, cost, time, seasonality, visitors, description, photo }
        console.log(updatedSpot)

        fetch(`http://localhost:3000/spots/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedSpot)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount>0) {
                    Swal.fire({
                        title: 'Submitted!',
                        text: 'Spot updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <div className="bg-slate-400 p-24">
            <h2 className="text-3xl font-extrabold">Update Spot:{name}</h2>
            <form onSubmit={handleUpdateSpot}>
                {/* User name and email */}
                <div className="md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">User Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={name} placeholder="User Name" name="name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <label className="input-group">
                            <input type="email" name="email" defaultValue={email} placeholder="Email" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/*Spot, Country name and location form*/}
                <div className="md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Spot Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={spotName} placeholder="Spot Name" name="spotName" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Country</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="country" defaultValue={country} placeholder="Country" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="location" defaultValue={location} placeholder="Location" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* average cost,travel time, seasonality, total visitor */}
                <div className="md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">average cost</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={cost} placeholder="Average cost" name="cost" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">travel time</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="time" defaultValue={time} placeholder="Travel Time" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">seasonality</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="seasonality" defaultValue={seasonality}  placeholder="Seasonality" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Total visitor(/year)</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="visitors" defaultValue={visitors}  placeholder="Total visitors" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* short description */}
                <label className="form-control">
                    <div className="label">
                        <span className="label-text">Short description</span>
                    </div>
                    <textarea name="description" defaultValue={description} className="textarea textarea-bordered h-24"></textarea>
                </label>
                {/* Photo URL form */}
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Photo URL" name="photo" defaultValue={photo} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* <input type="submit" value="Add Coffee" className="btn btn-block bg-gray-900 text-white"/> */}
                {/* button */}
                <input type="submit" value="Update Spot" className="btn btn-block mt-2" />
            </form>
        </div>
    );
};

export default UpdateSpot;