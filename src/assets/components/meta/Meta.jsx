import React from 'react'
import favicon from "../../../../public/favicon.png"

import Helmet from 'react-helmet'

const Meta = ({title}) => {
  return <Helmet>

<title>{title}</title>
<link rel="shortcut icon" href={favicon} type="image/x-icon" />

  </Helmet>
}

export default Meta