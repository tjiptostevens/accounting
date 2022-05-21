import React, { useState } from "react";

const site = window.location.hostname;
const apiSite =
  site === "localhost"
    ? "http://localhost/accounting/public/php/"
    : `http://${window.location.hostname}/accounting/public/php/`;

const urlLink = {
  url: apiSite,
};

export default urlLink;
