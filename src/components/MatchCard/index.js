import './index.css'

const MatchCard = props => {
  const {recentMatchDetails} = props
  const {
    competingTeam,
    result,
    competingTeamLogo,
    manOfTheMatch,
    umpires,
    matchStatus,
  } = recentMatchDetails

  const txtColor = matchStatus === 'Lost' ? 'red-color' : 'green-color'

  return (
    <li className="recent-match-li-cont">
      <img src={competingTeamLogo} alt={`competing team ${competingTeam}`} />
      <p className="com-h1">{competingTeam}</p>
      <p>{result}</p>
      <p className={txtColor}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
