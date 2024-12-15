import React from "react"

const Header = ({ money, totalStrength, totalAgility }) => {
  return (
    <header>
      <h1>Zombie Apocalypse Team Builder</h1>
      <h2>Budget: ${money}</h2>
      <h3>Total Team Strength: {totalStrength}</h3>
      <h3>Total Team Agility: {totalAgility}</h3>
    </header>
  )
}

export default Header
