import React from 'react'
import { Helmet } from 'react-helmet-async'

function HelmetHelper({meta, title}: any) {
  return <Helmet>
    <title>{title}</title>
    <meta name='description' content={meta} />
  </Helmet>
}

export default HelmetHelper