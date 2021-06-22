import Head from 'next/head'
import Image from 'next/image'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Search from './components/Search';
import InputForm from './components/InputForm';
import Details from './components/Details';
import styles from '../styles/Home.module.css'

export default function App() {
  return (
    <>
      {/* HEADER BAR */}
      <AppBar position="static" color="secondary">
        <Toolbar style={{justifyContent: "space-between"}}>
          <Typography variant="h6" style={{display: "flex"}}>
            iRock
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
        <img style={{height: "25px", width: "25px", display: "flex"}} src='./climb_icon.png' />
        </Toolbar>
      </AppBar>

      <Search />
      <InputForm />
      <Details />
    </>
  )
}