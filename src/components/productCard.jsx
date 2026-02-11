import "./productCard.css"

export default function ProductCard(props) {

    return (
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition duration-300 w-64">

            {/* Product Image */}
            <img 
                src={props.image} 
                alt={props.name} 
                className="w-full h-48 object-cover"
            />

            {/* Product Content */}
            <div className="p-4">

                <h1 className="text-lg font-semibold text-gray-800 truncate">
                    {props.name}
                </h1>

                <p className="text-green-600 font-bold mt-2">
                    ${props.price}
                </p>

                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                    View More
                </button>

            </div>
        </div>
    )
}
