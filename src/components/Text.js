import React from 'react'
import PropType from 'prop-types'
import { align, caps, px } from './utils'

const Text = ({
  m = 0,
  ml = 0,
  mr = 0,
  mt = 0,
  mb = 0,
  p = 0,
  pl = 0,
  pr = 0,
  pt = 0,
  pb = 0,
  lh = 1.25,
  bold = null,
  ...props
}) => {
  let inlineStyles = {
    fontFamily: 'inherit',
    fontSize: 'inherit',
    fontWeight: 'inherit',
    lineHeight: lh,
    margin: parseInt(m),
    marginLeft: parseInt(ml),
    marginRight: parseInt(mr),
    marginTop: parseInt(mt),
    marginBottom: parseInt(mb),
    padding: parseInt(p),
    paddingLeft: parseInt(pl),
    paddingRight: parseInt(pr),
    paddingTop: parseInt(pt),
    paddingBottom: parseInt(pb),
    fontWeight: bold,
  };

  inlineStyles = Object.assign(inlineStyles,
    align(props),
    caps(props),
    props.styles
  )

  return <p {...props} style={inlineStyles}>{ props.children }</p>
}

Text.propTypes = {
  caps: PropType.bool,
  center: PropType.bool,
  left: PropType.bool,
  right: PropType.bool,
  top: PropType.bool,
  bottom: PropType.bool
}

export default Text