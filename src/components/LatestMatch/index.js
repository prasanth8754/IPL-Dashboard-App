import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = latestMatchDetails
  return (
    <div className="latest-match-cont">
      <div className="cont-1">
        <div>
          <p className="comp-h1">{competingTeam}</p>
          <p className="comp-h1">{date}</p>
          <p className="comp-h1">{venue}</p>
          <p>{result}</p>
        </div>
        <img src={competingTeamLogo} alt={`latest match ${competingTeam}`} />
      </div>
      <div className="cont-2">
        <h1>First Innings</h1>
        <p>{firstInnings}</p>
        <h1>Second Innings</h1>
        <p>{secondInnings}</p>
        <h1>Man Of The Match</h1>
        <p>{manOfTheMatch}</p>
        <h1>Umpires</h1>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
