import '../styles/statsStyles.css'

export const Stats = ({ baseStats }) => {

    const percent = (value, max) => {
        return (value * 100 / max)
    }

    const stats = [
        {
            name: "HP",
            value: baseStats[0].base_stat,
            percent: percent(baseStats[0].base_stat, 255)
        },
        {
            name: "ATK",
            value: baseStats[1].base_stat,
            percent: percent(baseStats[1].base_stat, 255)
        },
        {
            name: "DEF",
            value: baseStats[2].base_stat,
            percent: percent(baseStats[2].base_stat, 255)
        },
        {
            name: "S-ATK",
            value: baseStats[3].base_stat,
            percent: percent(baseStats[3].base_stat, 255)
        },
        {
            name: "S-DEF",
            value: baseStats[4].base_stat,
            percent: percent(baseStats[4].base_stat, 255)
        },
        {
            name: "SPD",
            value: baseStats[5].base_stat,
            percent: percent(baseStats[5].base_stat, 255)
        }
    ];

    return (
        <div className="stats">
            <h3>BASE STATS</h3>
            <div className="baseStats">
                {stats.map((value) =>
                    <div className='statsDetails' key={value.name}>
                        <h4>{value.name}</h4>
                        <div className='linearStats'>
                            <div className='overlayDiv' style={{ width: `${value.percent}%` }}>
                                <span className="value1">{value.value > 30 ? value.value : ""}</span>
                            </div>
                            <span className="value2" style={{ paddingLeft: `${value.percent + 1}%` }}>{value.value <= 30 ? value.value : ""}</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

