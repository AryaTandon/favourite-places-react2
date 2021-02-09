interface PlaceProps {
    name: string;
    country: string;
    image: string;
    mapLocation: string;
    explanation: string;
  }
  
  // function Character(props: CharacterProps) {
    function Place({name, country, image, mapLocation, explanation}: PlaceProps) {
    return (
      <div className="Place-card">
        <br></br>
        <h1>{name.toUpperCase()}</h1>
        <h3>{country}</h3><br></br>
        <img src={image} alt="Blah" width="500"></img>
        <p>
          <b>Location on Google Maps:</b> <a href={mapLocation}>here!</a>
        </p>
        <p>
          <b>Why I like this place:</b> {explanation}
        </p>
        <br></br>
      </div>
    );
  }
  
  export default Place;
  