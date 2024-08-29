import React, { useState } from 'react';

const StateCityDropdown = () => {
  const stateCityData = {
    Tamilnadu: ["Coimbatore", "Chennai", "Salem"],
    Kerala: ["Kochi", "Palakkad", "Trivandrum"],
    Karnataka: ["Bangalore", "Mysore", "Chikmagalur"],
  };

  const [State, setState] = useState('');
  const [cities, setCities] = useState([]);

  const handleStateChange = (e) => {
    const State = e.target.value;
    setState(State);
    setCities(stateCityData[State]);
  };

  return (
    <div>
      <label>
        Select State:
        <select value={State} onChange={handleStateChange}>
          <option value>--Select State--</option>
          {Object.keys(stateCityData).map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </label>

      <label>
        Select City:
        <select disabled={!State}>
          <option value>--Select City--</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default StateCityDropdown;