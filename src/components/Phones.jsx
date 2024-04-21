import { Link, useLoaderData } from "react-router-dom";

const Phones = () => {
    const phones = useLoaderData()
    console.log(phones);
    return (
        <div className="flex flex-col  items-center">
            <h1 className="text-4xl">All Phones : {phones.length} </h1>
            {
                phones.map(phone => <li key={phone.id}><Link to={`/phones/${phone.id}`}>{phone.name}</Link></li>)
            }
        </div>
    );
};

export default Phones;