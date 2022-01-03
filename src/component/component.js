export default function Car(props) {
let {model, year, power} = props;
    return(
        <h1>
            {model} - {year} - {power}
        </h1>
    )
}