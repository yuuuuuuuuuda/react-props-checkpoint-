function HobbyList({player}) {
    return <ul>
    {player.hobbies.map((hobby)=>(
        <li>{hobby} </li>
    ))}
</ul>
}
HobbyList.defaultProps = {
    player: {
        hobbies: ['walking'],
    }
}
export default HobbyList;
