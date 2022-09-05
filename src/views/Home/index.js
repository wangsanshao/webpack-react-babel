import React from "react";
import { Link } from 'react-router-dom'
import './index.scss'

export default () => {
  return <>
    <h1 className="home-title">This is Home</h1>
    <Link to="/about">go to About</Link>
  </>
}