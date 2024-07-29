import React from 'react'
import '../css/Widget.css'
import WidgetContent from './WidgetContent'

const Widget = () => {
  return (
    <div className='widget'>
      <div className='widget_header'>
        <h5>Spaces to follow</h5>
      </div>
      <WidgetContent/>
    </div>
  )
}

export default Widget
