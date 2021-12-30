export default function User({item, func}) {
    return(
        <div>
            {item.id} -
            {item.name} -
            {item.email};
            <button onClick={() => func(item.id)}>show me</button>
        </div>
    );
}