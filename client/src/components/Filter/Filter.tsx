import './Filter.scss'
import { SeasonId, Team } from '../../models'
import TeamsDropdown from './TeamsDropdown'
import SeasonsDropdown from './SeasonsDropdown'

interface FilterProps {
    season: SeasonId | null
    setSeason: React.Dispatch<React.SetStateAction<SeasonId | null>>
    team: Team | null
    setTeam: React.Dispatch<React.SetStateAction<Team | null>>
    width?: string | number
    padding?: string | number
    maxResultsHeight: string | number
}

const Filter: React.FC<FilterProps> = ({ width, padding, maxResultsHeight, season, setSeason, team, setTeam }) => {
    return (
        <div className="filter" style={{ width: width, padding: padding, gap: padding }}>
            <div style={{ flexGrow: 1 }}>
                <SeasonsDropdown selectedSeason={season} setSelectedSeason={setSeason} width="100%" resultsListMaxHeight={maxResultsHeight}/>
            </div>
            <div style={{ flexGrow: 1 }}>
                <TeamsDropdown selectedTeam={team} setSelectedTeam={setTeam} width="100%" resultsListMaxHeight={maxResultsHeight}/>
            </div>
        </div>
    )
}

export default Filter