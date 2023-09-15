import PropTypes from 'prop-types';

const Cart = ({added}) => {
    return (
        <div className="md:w-1/4">
           <div className="bg-white w-80 rounded-xl mt-10 px-4">
           <h1 className="py-4 font-semibold text-blue-500">Credit Hour Remaining: $ hr</h1>
            <hr />
            <h1 className="py-3 font-bold text-lg">Course Name</h1>
            <ul>
                {
                    added.map(cart => cart)
                }
            </ul>
            <hr />
            <h1 className="text-sm text-gray-500 py-4">Total Credit Hour: $</h1>
           </div>
        </div>
    );
};

Cart.propTypes = {
    added: PropTypes.array,
}

export default Cart;