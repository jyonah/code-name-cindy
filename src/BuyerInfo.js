export function BuyerInfo() {
    return (
        <div className='form-section'>
            <div>
                <input
                    type='text'
                    id='firstName'
                    name='firstName'
                    placeholder='First Name'
                    required
                />
                <input
                    type='text'
                    id='lastName'
                    name='lastName'
                    placeholder='Last Name'
                    required
                />
            </div>
            <div>
                <input
                    type='text'
                    id='address'
                    name='address'
                    placeholder='Address'
                    required
                />
            </div>
        </div>
    );
}