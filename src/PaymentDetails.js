export function PaymentDetails() {
    return(
        <div className='form-section'>
            <h3>Payment Details</h3>
            <div>
                <input
                    type='tel'
                    id='creditCard'
                    name='creditCard'
                    placeholder='0000 0000 0000 0000'
                    pattern='\d{4} \d{4} \d{4} \d{4}'
                    maxLength='19'
                    required
                />
            </div>
            <div>
                <input
                    type='tel'
                    id='expDate'
                    name='expDate'
                    placeholder='MM/YY'
                    pattern='(0[1-9]|1[0-2])\/\d{2}'
                    required
                />
                <input
                    type='tel'
                    id='cvv'
                    name='cvv'
                    placeholder='CVV'
                    pattern='\d{3,4}'
                    maxLength='4'
                    required
                />
            </div>
        </div>
    );
}


