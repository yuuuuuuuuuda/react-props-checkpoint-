import players from '../data/players.json';
import PlayerName from './PlayerName'
import HobbyList from './HobbyList'

function Player () {
    return <div style={{
        display: 'flex',
        gap: '5px',
    }}>
       {
        players.players.map(player => (
            <div style={{
                border: '2px solid black',
            }}>
                <img src={player.image} alt="" width="200" />
              <PlayerName firstName={player.firstName} lastName={player.lastName} />
                <p>team:{player.team}</p>
                <p>nationality:{player.nationality}</p>
                <p>age:{player.age}</p>
                <HobbyList player={player} />
            </div>
        ))
       }
    </div>
}
export default Player;