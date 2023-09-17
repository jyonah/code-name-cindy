function BandForm({ band }) {
  const { ticketTypes, ...concertInfoProps } = band

  return (
      <div>
        <ConcertInfo ConcertInfo= {...concertInfoProps} />
        <TicketsForm ticketTypes=ticketTypes />
      </div>
  )
}

export default BandForm;
