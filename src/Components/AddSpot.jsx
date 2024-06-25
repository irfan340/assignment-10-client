

const AddSpot = () => {
    return (
        <div className="bg-slate-400 p-24">
            <h2 className="text-3xl font-extrabold">Add Spot</h2>
            {/*name and quantity form*/}
            <form>
                <div className="flex gap-4">
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Name</span>
                        </div>
                        <input name='name' type="text" placeholder="Type here" className="input input-bordered w-full" />
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Quantity</span>
                        </div>
                        <input name="quantity" type="text" placeholder="Available Quantity" className="input input-bordered w-full" />
                    </label>
                </div>
            </form>
            {/* Photo URL form */}
            <form>
                <div className="flex gap-4">
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Name</span>
                        </div>
                        <input name='name' type="text" placeholder="Type here" className="input input-bordered w-full" />
                    </label>
                </div>
            </form>
            {/* button */}
            <input type="Submit" value="Add Spot" className="btn btn-block mt-2"/>
        </div>
    );
};

export default AddSpot;