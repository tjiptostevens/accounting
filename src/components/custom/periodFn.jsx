import urlLink from "../config/urlLink";

const abortCtr = new AbortController();
const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": window.location.origin,
};
const loginUser = localStorage.getItem("loginUser");
const company = localStorage.getItem("company");

const AddPeriodFn = async (
  input = {
    name: "",
    description: "",
    start: "",
    end: "",
    status: 1,
    created_by: loginUser,
    company: company,
  }
) => {
  console.log(input);
  try {
    let res = await fetch(`${urlLink.url}addperiod.php`, {
      signal: abortCtr.signal,
      method: "POST",
      body: JSON.stringify(input),
      headers: headers,
    });
    res = await res.json();
    console.log(res);
    if (res.error) {
      throw res;
    } else {
      return res;
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};

const EditPeriodFn = async (
  input = {
    id: "",
    name: "",
    mobile: "",
    email: "",
    address: "",
    modified_by: loginUser,
  }
) => {
  try {
    let res = await fetch(`${urlLink.url}editperiod.php`, {
      signal: abortCtr.signal,
      method: "POST",
      body: JSON.stringify(input),
      headers: headers,
    });
    res = await res.json();
    console.log(res);
    if (res.error) {
      throw res;
    } else {
      return res;
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};
const DeletePeriodFn = async (input) => {
  try {
    let res = await fetch(`${urlLink.url}deletecustomer.php`, {
      signal: abortCtr.signal,
      method: "POST",
      body: JSON.stringify(input),
      headers: headers,
    });
    res = await res.json();
    console.log(res);
    if (res.error) {
      throw res;
    } else {
      return res;
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};

export { AddPeriodFn, EditPeriodFn, DeletePeriodFn };
