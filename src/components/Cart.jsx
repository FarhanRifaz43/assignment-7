import PropTypes from 'prop-types';

const Cart = ({ added, credit }) => {
    return (
        <div className="md:w-1/4">
            <div className="bg-white w-80 rounded-xl mt-10 px-4">
                <h1 className="py-4 font-semibold text-blue-500">Credit Hour Remaining: $ hr</h1>
                <hr />
                <h1 className="py-3 font-bold text-lg">Course Name:</h1>
                <ul className='pb-2'>
                    {
                        added.map((cart, idx) => <li className='text-gray-600 font-light text-sm list-decimal ml-4 py-1' key={idx}>{cart}</li>)
                    }
                </ul>
                <hr />
                <h1 className="text-sm text-gray-500 py-4">Total Credit Hour: {credit} hr</h1>
            </div>
        </div>
    );
};

Cart.propTypes = {
    added: PropTypes.array,
    credit: PropTypes.number
}

export default Cart;