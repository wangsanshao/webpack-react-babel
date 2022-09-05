import React, { Component, useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';
import route from './router/config'
import Home from '@/views/Home'
import asyncWidget from './router/asyncWidget'

const Bundle = (props) => {
  const [component, setComponent] = useState(null)

  useEffect(() => {
    getWidget()
    console.log(props.children)
  }, [props.component])

  const getWidget = () => {
    // const widget = await asyncWidget(props.component)
    // console.log('widget', widget)
    props.component().then(widget => {
      console.log('====', widget)
      setComponent(widget.default ? widget.default : widget)
    })
  }

  return <>{ component ? props.children(component) : null }</>
}

const getCompenent = (component) => (props) => (
  <Bundle component={component}>
    {
      (Component) => {
        return <Component />
      }
    }
  </Bundle>
)

export default () => {
  return <div>
    <h1>welcome to React Router! </h1>
    <Routes>
      {
        route.map(item => <Route path={item.path} element={item.component}/>)
      }
    </Routes>
  </div>
}