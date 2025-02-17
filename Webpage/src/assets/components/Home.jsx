import React from 'react'

function Home() {
    const styleHome = {display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"};
  return (
    <div className='home' style={styleHome}>
      <h1>BALAJI SEA <span>FOODS</span></h1>
      <p>We are the fish importer & exporter from all over india</p>
      <div className='box-btn'>
        <button>Our product</button>
        <button> Order now </button>
      </div>
    </div>
  )
}

export default Home;
