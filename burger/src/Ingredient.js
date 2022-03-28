import React, { useState } from "react";

export default function Ingredient (props) {
    
      const {name, color} = props.ingredient
      
    return (
      <h5 style={{backgroundColor: color}}>{name}</h5>
    )
  }
