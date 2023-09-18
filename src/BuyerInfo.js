import {useState} from "react";
import {useBandFormContext} from "./BandFormContext";

export function BuyerInfo() {
    const {formData, setFormData} = useBandFormContext()

    function handleChange(e) {
        const {name, value} = e.target.valueOf()

        setFormData(prevState => ({
            ...prevState,
            buyer: {
                ...prevState.buyer,
                [name]: value
            }
        }))
    }

    return (
        <div className='form-section'>
            <div>
                <input
                    type='text'
                    id='firstName'
                    name='firstName'
                    placeholder='First Name'
                    value={formData.buyer?.firstName ?? ''}
                    onChange={handleChange}
                    required
                />
                <input
                    type='text'
                    id='lastName'
                    name='lastName'
                    placeholder='Last Name'
                    value={formData.buyer?.lastName ?? ""}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <input
                    type='text'
                    id='address'
                    name='address'
                    placeholder='Address'
                    value={formData.buyer?.address ?? ""}
                    onChange={handleChange}
                    required
                />
            </div>
        </div>
    );
}