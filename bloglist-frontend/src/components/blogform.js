const Blogform = ({ onSubmit, handleChange, value}) => {
    return (
      <div>
        <h2>Luo uusi blog</h2>
  
        <form onSubmit={onSubmit}>
          <input
            value={value}
            onChange={handleChange}
          />
          <button type="submit">tallenna</button>
        </form>
      </div>
    )
  }