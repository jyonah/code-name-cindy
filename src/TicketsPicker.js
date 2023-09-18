export function TicketsPicker({ticketTypes}) {
    console.log("TicketsPicker Loaded")

    const ticketSelections = ticketTypes.map((type) => {
        return(
            <div key={`${type.type}-picker`} className='ticket-picker'>
                <div>
                    <h3 className='heading-light'>{type.name}</h3>
                    <p className='ticket-description'>{type.description}</p>
                    <p className='ticket-price'>${type.cost/100}</p>
                </div>
                <div>
                    <input type='number' min='0'/>
                </div>
            </div>
        )
    })
    console.log(ticketSelections)
    return(
        <form>
            <h2>Select Tickets</h2>
            {ticketSelections}
        </form>
    );
}