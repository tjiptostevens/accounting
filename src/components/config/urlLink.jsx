import React, { useState } from "react";

const site = window.location.hostname;
const apiSite =
  site === "localhost"
    ? "https://njajal.sekolahmusik.co.id/"
    : "https://sister.sekolahmusik.co.id/";

const urlLink = {
  url: apiSite,
};

export default urlLink;
