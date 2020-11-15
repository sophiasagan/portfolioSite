import React from 'react'
import  IconExternal from './external'
import  IconGitHub  from './github'

const FormattedIcon = ({ name }) => {
  switch (name) {
    case 'External':
      return <IconExternal />
    case 'GitHub':
      return <IconGitHub />
    default:
      return <IconExternal />
  }
}

export default FormattedIcon
