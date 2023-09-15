import PropTypes from 'prop-types';

const Cart = ({added, credit}) => {
    const remainingHour = 20 - credit;
    
    const clearCart = () => {
        localStorage.setItem("courseName", "[]");
        localStorage.setItem("totalHour", "0");
        location.reload();
    }

    return (
        <div className="md:w-1/4">
            <div className="bg-white w-80 rounded-xl mt-10 px-4 h-96">
                <h1 className="py-4 font-semibold text-blue-500 text-sm">Credit Hour Remaining: {remainingHour} hr</h1>
                <hr />
                <h1 className="py-3 font-bold text-lg">Course Name</h1>
                <ul className='pb-2 h-40'>
                    {
                        added.map((cart, idx) => <li className='text-gray-600 font-light text-sm list-decimal ml-4 py-1' key={idx}>{cart}</li>)
                    }
                </ul>
                <hr />
                <h1 className="text-sm text-gray-500 py-4">Total Credit Hour: {credit} hr</h1>
                <button onClick={clearCart} className='hover:bg-blue-500 bg-gray-200 hover:text-white w-full rounded-md mb-2 mt-3 py-1'>Clear</button>
            </div>
        </div>
    );
};

Cart.propTypes = {
    added: PropTypes.array,
    credit: PropTypes.number,
    remainingHour: PropTypes.number
}

export default Cart;