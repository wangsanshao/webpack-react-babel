import React, { useEffect } from "react";
import { Link } from 'react-router-dom'
import './index.scss'
import asyncWidget from "../../router/asyncWidget";
import Home from "../Home";

export default () => {
  useEffect(() => {
    getCompenent()
  }, [])
  
  const getCompenent = async() => {
    const widget = () => import('../Home/index')
    const data = await widget()
    console.log(data)
    const ad = await asyncWidget(() => <Home />)
    console.log(ad)
  }

  return <>
    <h1 className="about-title">This is About</h1>
    <Link to="/">go to Home</Link>
  </>
}