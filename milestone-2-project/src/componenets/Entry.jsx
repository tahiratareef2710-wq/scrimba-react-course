import fuji from "../hehe.png";
import marker from "../img.png";

export default function Entry(props) {
    return (
        <article className="journal-entry">
            <div className="main-image-container">
               <img
    className="main-image"
    src={props.img.src}
    alt={props.img.alt}
/>
            </div>

            <div className="info-container">
                <div className="location">
                    <img className="marker" src={marker} alt="marker" />
                    <span className="country">{props.country}</span>
                    <a
    href={props.google_maps_link}
    target="_blank"
    rel="noopener noreferrer"
>View on Google Maps</a>
                </div>

                <h2 className="entry-title">{props.title}</h2>

                <p className="trip-dates">
                    {props.dates}
                </p>

                <p className="entry-text">
                    {props.text}
                </p>
            </div>
        </article>
    );
}