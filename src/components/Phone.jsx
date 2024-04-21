import { Link, useLoaderData } from "react-router-dom";

const Phone = () => {
    const phone = useLoaderData()
    console.log(phone);
    return (
        <div className="h-[90vh] max-w-[1600px] mx-auto">
            <div className="card  bg-base-500 shadow-xl">
                <figure><img src={phone.image} alt={phone.name} className="rounded-2xl" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{phone.name}</h2>
                    <p>{phone.description}</p>
                    <p>Price : {phone.price} $</p>
                    <Link to='/'><button className="btn" >Back to home</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Phone;