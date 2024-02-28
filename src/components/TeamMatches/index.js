import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {teamMatchDetails: {}, isLoading: true, teamId: 'CSK'}

  componentDidMount() {
    this.getLatestAndRecentMatches()
  }

  getLatestAndRecentMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/ipl/${id}`

    const response = await fetch(url)
    const data = await response.json()

    const teamBannerUrl = data.team_banner_url

    const latestMatchDetails = {
      umpires: data.latest_match_details.umpires,
      result: data.latest_match_details.result,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      id: data.latest_match_details.id,
      date: data.latest_match_details.date,
      venue: data.latest_match_details.venue,
      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      firstInnings: data.latest_match_details.first_innings,
      secondInnings: data.latest_match_details.second_innings,
      matchStatus: data.latest_match_details.match_status,
    }

    const recentMatches = data.recent_matches.map(eachItem => ({
      umpires: eachItem.umpires,
      result: eachItem.result,
      manOfTheMatch: eachItem.man_of_the_match,
      id: eachItem.id,
      date: eachItem.date,
      venue: eachItem.venue,
      competingTeam: eachItem.competing_team,
      competingTeamLogo: eachItem.competing_team_logo,
      firstInnings: eachItem.first_innings,
      secondInnings: eachItem.second_innings,
      matchStatus: eachItem.match_status,
    }))

    const formatedMatchDetails = {
      teamBannerUrl,
      latestMatchDetails,
      recentMatches,
    }

    this.setState({
      teamMatchDetails: formatedMatchDetails,
      isLoading: false,
      teamId: id,
    })
  }

  render() {
    const {teamMatchDetails, isLoading, teamId} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamMatchDetails
    const bgClassName = teamId
    return (
      <div className={`match-bg-cont ${bgClassName}`}>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="match-app-cont">
            <img className="banner-img" src={teamBannerUrl} alt="team banner" />
            <h1 className="lat-heading">Latest Matches</h1>
            <LatestMatch latestMatchDetails={latestMatchDetails} />
            <ul className="recent-match-ul-cont">
              {recentMatches.map(eachItem => (
                <MatchCard recentMatchDetails={eachItem} key={eachItem.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
