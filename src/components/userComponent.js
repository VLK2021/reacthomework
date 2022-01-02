export default function UserComponent({item, chooseUser}) {

    return (
        <div>
            <h2>{item.id} - {item.name} - {item.username}</h2>

            <button onClick={() => {
                chooseUser(item.id);
            }}>details</button>

        </div>
    )
}