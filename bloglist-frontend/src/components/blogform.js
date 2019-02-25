import {useState} from '../hooks/index'

const Blogform = ({ onSubmit, handleChange, value,resetValue}) => {
    return (
      <div>
        <h2>Luo uusi blog</h2>
  
        <form onSubmit={onSubmit&&resetValue}>
          <input
            value={value}
            onChange={handleChange}
          />
          <button type="submit">tallenna</button>
        </form>
      </div>
    )
  }