const useDate = () => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthShort = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const monthNum = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  const today = new Date(),
    date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate(),
    DD = today.getDate(),
    MM = monthNum[today.getMonth()],
    MMM = monthShort[today.getMonth()],
    MMMM = monthNames[today.getMonth()],
    YY = today.getFullYear(),
    HH = today.getHours(),
    mm = today.getMinutes(),
    ss = today.getSeconds(),
    now = YY + "-" + MM + "-" + DD + " " + HH + ":" + mm + ":" + ss;
  return { now, DD, MM, MMM, MMMM, YY, HH, mm, ss };
};

export default useDate;
