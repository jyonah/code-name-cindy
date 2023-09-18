import {useBandFormContext} from "../BandFormContext";

export function TicketsPicker({ticketTypes}) {
    const {formData, setFormData} = useBandFormContext()

    function handleChange(e) {
        const {name, value} = e.target
        const cost = e.target.dataset.cost

        setFormData(prevState => ({
            ...prevState,
            tickets: {
                ...prevState.tickets,
                [name]: {
                    count: value,
                    cost: cost * value
                }
            }
        }))
    }

    const ticketSelections = ticketTypes.map((type) => {
        return(
            <div key={`${type.type}-picker`} className='ticket-picker'>
                <div>
                    <h3 className='heading-light'>{type.name}</h3>
                    <p className='ticket-description'>{type.description}</p>
                    <p className='ticket-price'>${type.cost/100}</p>
                </div>
                <div>
                    <input
                        type='number'
                        name={type.type}
                        value={formData.tickets[type.type]?.count ?? ''}
                        placeholder='0'
                        min='0'
                        data-cost={type.cost}
                        onChange={handleChange}
                    />
                </div>
            </div>
        )
    })

    return(
        <form>
            <h2>Select Tickets</h2>
            {ticketSelections}
        </form>
    );
}