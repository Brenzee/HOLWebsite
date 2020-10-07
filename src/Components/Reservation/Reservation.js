import React, { useState } from 'react'
import './Reservation.css'
import emailjs from 'emailjs-com'
import { Redirect } from 'react-router-dom'
import { makeStyles, TextField } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
}))

function Reservation(props) {
  const classes = useStyles()
  const [error, setError] = useState(false)
  const [done, setDone] = useState(false)
  const [value, setValue] = useState({
    name: '',
    date: '',
    time: '',
    count: 0,
    comments: '',
  })

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    })
    console.log(value)
  }

  const sendEmail = (e) => {
    e.preventDefault()
    console.log(value)
    emailjs
      .sendForm(
        'service_ot3o2rd',
        'template_y074ozf',
        value,
        'user_7iqekkJfyJwJas5mZO0ww'
      )
      .then(
        (result) => {
          setDone(true)
        },
        (err) => {
          setError(true)
        }
      )
  }

  return (
    <div className='reserve' id='reserve'>
      {done && <Redirect to='/success' />}
      <div className='reserve_title'>
        <h2>{props.text.reserve_title}</h2>
      </div>
      <form name='reservation' onSubmit={sendEmail} className={classes.root}>
        <input type='hidden' name='form-name' value='reservation' />
        <TextField
          variant='outlined'
          id='name'
          name='name'
          onChange={handleChange}
          label={props.text.reserve_name}
          required
        />
        <TextField
          variant='outlined'
          id='date'
          name='date'
          type='date'
          onChange={handleChange}
          label={props.text.reserve_date}
          defaultValue='2020-10-01'
          required
        />
        <TextField
          onChange={handleChange}
          variant='outlined'
          id='time'
          name='time'
          type='time'
          defaultValue='11:00'
          label={props.text.reserve_time}
          required
        />
        <TextField
          onChange={handleChange}
          variant='outlined'
          id='count'
          name='count'
          type='number'
          label={props.text.reserve_count}
          required
        />
        <TextField
          onChange={handleChange}
          variant='outlined'
          id='comments'
          multiline
          name='comments'
          rows={4}
          label={props.text.reserve_comments}
        />

        <button type='submit'>{props.text.res_button}</button>
        {error && <p>Ir kluda</p>}
      </form>
    </div>
  )
}
export default Reservation
