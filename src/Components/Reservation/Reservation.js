import React, { useState } from 'react'
import './Reservation.css'
import emailjs from 'emailjs-com'
import { Link, Redirect } from 'react-router-dom'
import { makeStyles, TextField } from '@material-ui/core'
import { motion } from 'framer-motion'

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
  const [disabled, setDisabled] = useState(false)
  const [error, setError] = useState(false)
  const [done, setDone] = useState(false)
  const [value, setValue] = useState({
    name: '',
    date: `2020-12-12`,
    time: '11:00',
    phone: '+',
    count: 0,
    comments: '',
  })

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    })
  }

  const sendEmail = (e) => {
    e.preventDefault()
    setDisabled(true)
    console.log('pressed')
    emailjs
      .sendForm(
        'service_ot3o2rd',
        'template_y074ozf',
        e.target,
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
      <div style={{ display: 'none' }}>
        <Link to='/success'></Link>
      </div>
      <div className='reserve_title'>
        <h2>{props.text.reserve_title}</h2>
      </div>
      <form
        onSubmit={sendEmail}
        name='reservation'
        className={classes.root + ' reservation_form'}
      >
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
          value={value.date}
          placeholder={props.text.reserve_date}
          required
        />
        <TextField
          onChange={handleChange}
          variant='outlined'
          id='time'
          name='time'
          type='time'
          value={value.time}
          label={props.text.reserve_time}
          required
        />
        <TextField
          onChange={handleChange}
          variant='outlined'
          id='count'
          name='count'
          value={value.count}
          type='number'
          label={props.text.reserve_count}
          InputProps={{ inputProps: { min: 0, max: 15 } }}
          required
        />
        <TextField
          onChange={handleChange}
          variant='outlined'
          id='phone'
          name='phone'
          value={value.phone}
          type='text'
          label={props.text.reserve_phone}
          required
        />
        <TextField
          onChange={handleChange}
          variant='outlined'
          id='comments'
          multiline
          name='comments'
          value={value.comments}
          rows={4}
          label={props.text.reserve_comments}
        />
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.95 }}
          type='submit'
          disabled={disabled ? true : ''}
        >
          {props.text.res_button}
        </motion.button>
        {error && <p>Ir kluda</p>}
      </form>
    </div>
  )
}
export default Reservation
