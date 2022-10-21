import React, { Component } from 'react';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import Title from './Title';

class Missions extends Component {
  render() {
    const missionCards = missions.map(
      ({ name, year, country, destination }) => (
        <MissionCard
          key={ name }
          name={ name }
          year={ year }
          country={ country }
          destination={ destination }
        />
      ),
    );
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        { missionCards }
      </div>
    );
  }
}

export default Missions;
