import React, { Component } from 'react'

const Beer = (props)=>{
    return(
        <div >
            {props.beer.map((item)=>{
                return(
                    <div style={{paddingLeft:"100px"}}>
                        <div style={{display:"flex"}}>

                        <img src={item.image_url} alt="beer" style={{width:"100px"}}/>
                        <div style={{display:"flex",flexDirection:"column",paddingLeft:"50px"}}>
                            <h2 style={{justifyContent:"center"}}>{item.name}</h2>
                            <p style={{fontWeight:"bold"}}>Description: {item.description}</p>
                            <p style={{fontWeight:"bold"}}>Tips:{item.brewers_tips}</p>
                            <ul style={{fontWeight:"bold"}}>Pair with
                                {item.food_pairing.map((stuff)=>{
                                    return(
                                        <li>{stuff}</li>
                                        )
                                    })}
                                    
                            </ul>
                        </div>
                    </div>
                    <hr style={{width:"100%"}}/>
                        
                    </div>
                )
            })}
        </div>
    )
}

export default Beer