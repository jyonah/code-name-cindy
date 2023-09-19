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

    // When incrementing ticket count up and then down again the state management above leaves the vestigial structure
    // for removed tickets. While inconsequential in the current context, an opportunity for optimization exists.

    const ticketSelections = ticketTypes.map((type) => {
        return(
            <div key={`${type.type}-picker`} className='ticket-picker'>

                <div className='ticket-columns'>
                    <div>
                        <h3 className='heading-light'>{type.name}</h3>
                        <p className='ticket-description'>{type.description}</p>
                        <p className='ticket-price'>${type.cost/100}</p>
                    </div>
                    <div className='num-container'>
                        <input
                            type='number'
                            className='num-tickets'
                            name={type.type}
                            value={formData.tickets[type.type]?.count ?? ''}
                            placeholder='0'
                            min='0'
                            data-cost={type.cost}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
        )
    })

    // I selected a number input to match the provided mockup, but the number input type is falling/has fallen out of
    // favor, due to increased complexity, improved usability with other inputs, and a relatively higher discrepancy in
    // implementation across chrome, firefox, safari, and other popular browsers.

    return(
        <form>
            <h2>Select Tickets</h2>
            {ticketSelections}
        </form>
    );
}