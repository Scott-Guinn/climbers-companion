import styles from '../../styles/Home.module.css';
import Checkbox from '@material-ui/core/Checkbox';


const InputForm = () => {
  return (
    <div style={{backgroundColor: "grey", height: "30em"}}>TEST

    <Checkbox
        defaultChecked
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />

    </div>
  )
}

export default InputForm;