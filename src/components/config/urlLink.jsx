import React, { useState } from 'react'

const site = window.location.hostname
const apiSite = `https://pehape.tjip.work/api/`
// site === 'localhost'
//   ? `http://${window.location.hostname}/accounting/public/php/`
//   : `https://${window.location.hostname}/php/`

// const apiSite = `https://pitaramulia.tjip.work/php/`;

const urlLink = {
  url: apiSite,
}

export default urlLink
