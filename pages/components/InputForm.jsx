import { useState } from 'react';

import styles from '../../styles/Home.module.css';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';


const InputForm = () => {
  const [state, setState] = useState({
    emergency: true,
    campground: true,
    map: false,
    gearShops: false,
    weather: false,
    bouldering: false,
    sport: false,
    trad: false
  });
  const handleChange = (e) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  }

  return (
    <div style={{ padding: "2%", border: 'solid', borderRadius: "25px", height: "30em" }}>

      <FormControl component="fieldset" >
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={state.emergency} onChange={handleChange} name="emergency" />}
            label="Emergency Response Contact Information"
          />
          <FormControlLabel
            control={<Checkbox checked={state.campground} onChange={handleChange} name="campground" />}
            label="Campground Information"
          />
          <FormControlLabel
            control={<Checkbox checked={state.map} onChange={handleChange} name="map" />}
            label="Area Map"
          />
          <FormControlLabel
            control={<Checkbox checked={state.gearShops} onChange={handleChange} name="gearShops" />}
            label="Local Gear Shops"
          />
          <FormControlLabel
            control={<Checkbox checked={state.weather} onChange={handleChange} name="weather" />}
            label="Historic Weather Data"
          />
        </FormGroup>
      </FormControl>
      <FormControl component="fieldset" >
        <FormLabel>Gear Checklists:</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={state.bouldering} onChange={handleChange} name="bouldering" />}
            label="Bouldering"
          />
          <FormControlLabel
            control={<Checkbox checked={state.sport} onChange={handleChange} name="sport" />}
            label="Sport"
          />
          <FormControlLabel
            control={<Checkbox checked={state.trad} onChange={handleChange} name="trad" />}
            label="Trad"
          />
        </FormGroup>
      </FormControl>

    </div>
  )
}

export default InputForm;