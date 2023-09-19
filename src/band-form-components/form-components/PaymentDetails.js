import {useBandFormContext} from "../BandFormContext";
import {set} from "react-hook-form";

export function PaymentDetails() {
    const {formData, setFormData} = useBandFormContext()

    function handleChange(e) {
        const {name, value} = e.target.valueOf()

        setFormData(prevState => ({
            ...prevState,
            card: {
                ...prevState.card,
                [name]: value
            }
        }))
    }
    return(
        <div className='form-section'>
            <h4 className='payment-details'>Payment Details</h4>
            <div>
                <input
                    type='tel'
                    id='creditCard'
                    name='creditCard'
                    placeholder='0000 0000 0000 0000'
                    pattern='\d{4} \d{4} \d{4} \d{4}'
                    maxLength='19'
                    value={formData.card?.creditCard ?? ''}
                    onChange={handleChange}
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
                    value={formData.card?.expDate ?? ''}
                    onChange={handleChange}
                    required
                />
                <input
                    type='tel'
                    id='cvv'
                    name='cvv'
                    placeholder='CVV'
                    pattern='\d{3,4}'
                    maxLength='4'
                    value={formData.card?.cvv ?? ''}
                    onChange={handleChange}
                    required
                />
            </div>
        </div>
    );
}


