import React, { Component } from 'react';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import Title from './Title';

class SolarSystem extends Component {
  render() {
    const solarSystem = planets.map(({ name, image }) => (
      <PlanetCard key={ name } planetName={ name } planetImage={ image } />
    ));
    return (
      <div data-testid="solar-system">
        <Title headline="planetas" />
        { solarSystem }
      </div>
    );
  }
}

export default SolarSystem;
