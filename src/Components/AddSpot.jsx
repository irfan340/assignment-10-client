

const AddSpot = () => {
    let handleAddSpot = e => {
        e.preventDefault()
        let form = e.target

        let name = form.name.value
        let location = form.location.value
        let photo = form.photo.value

        let newSpot = { name, location, photo }
        console.log(newSpot)
    }
    return (
        <div className="bg-slate-400 p-24">
            <h2 className="text-3xl font-extrabold">Add Spot</h2>
            <form onSubmit={handleAddSpot}>
                {/*name and quantity form*/}
                <div className="md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Spot Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Coffee Name" name="name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="location" placeholder="Available Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* Photo URL form */}
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* <input type="submit" value="Add Coffee" className="btn btn-block bg-gray-900 text-white"/> */}
                {/* button */}
                <input type="submit" value="Add Spot" className="btn btn-block mt-2" />
            </form>
        </div>
    );
};

export default AddSpot;