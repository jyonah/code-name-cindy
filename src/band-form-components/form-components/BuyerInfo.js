import {useState} from "react";
import {useBandFormContext} from "../BandFormContext";

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

    // The state update in handle change here is nearly identical to how state and handle change are updated in
    // 'payment details', presenting a refactoring opportunity if I were to work on this further.

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
            {/*  The address field here is a simple text input, though ideally it would be an autocomplete field
                  with a maps/places data lookup */}
            </div>
        </div>
    );
}