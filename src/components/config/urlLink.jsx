import React, { useState } from "react";

const site = window.location.hostname;
const apiSite =
  site === "localhost"
    ? `http://${window.location.hostname}/accounting/public/php/`
    : `https://${window.location.hostname}/php/`;

const urlLink = {
  url: apiSite,
};

export default urlLink;
