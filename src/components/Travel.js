import location from '../images/location.svg';
export default function Travel (props) {
    return (
        <section className="travel">
            <img src={props.imageUrl} alt="Destination" className='travel--image'/>
            <div>
                <img src={location} alt="Location" />
                <span className="travel--country">{props.location.toUpperCase()}</span>
                <a href={props.googleMapsUrl} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
                <h2 className="travel--location">{props.title}</h2>
                <h5 className="travel--dates">{`${props.startDate} - ${props.endDate}`}</h5>
                <p className="travel--desc">{props.description}</p>
            </div>

        </section>
    )
}