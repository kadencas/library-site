import React from "react";
import './Header.css'

export default function Header({ greeting }) {
    return (
      <div className="header">
        <h1>{greeting}</h1> 
      </div>
    );
  }