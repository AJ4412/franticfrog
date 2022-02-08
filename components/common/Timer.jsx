import React, { useEffect, useState } from "react";

const Timer = ({ date, sale }) => {
  const [time, setTime] = useState({});
  const [presaleLive, setPresaleLive] = useState(false);

  function dateDifference(date1, date2) {
    const difference = {};
    let tmp = date2 - date1;
    difference.days = Math.floor(tmp / 86400000);

    tmp -= difference.days * 86400000;
    difference.hours = Math.floor(tmp / 3600000);
    tmp -= difference.hours * 3600000;
    difference.minutes = Math.floor(tmp / 60000);
    tmp -= difference.minutes * 60000;
    difference.seconds = Math.floor(tmp / 1000);
    return difference;
  }

  // console.log(new Date(), "new Date");

  useEffect(() => {
    setInterval(() => {
      let timeTaken = dateDifference(
        new Date(Date.now()),
        new Date(`2022-02-${date}T02:00:00.000Z`)
      );

      setTime(timeTaken);

      // WE CHECK HERE IF HOUR ,MINUTE AND SECOND IS 0 THEN SETPRESALELIVE TO TRUE || AND ALSO CHECK IF DAYS IF NEGTIVE THEN SET PRESALE LIVE TO TRUE

      if (
        timeTaken.days < 0 ||
        (timeTaken.days < 1 &&
          timeTaken.hours < 1 &&
          timeTaken.minutes < 1 &&
          timeTaken.seconds < 1)
      ) {
        setPresaleLive(true);
      }
    }, 1000);
  }, []);

  return (
    <>
      {/* IF presaleLive IS TRUE THEN SHOW TEXT OTHER WISE SHOW TIMER   */}
      {presaleLive ? (
        <p className="montserrat-font-family sale-text mb-0 text-center">
          {sale} IS LIVE
        </p>
      ) : (
        <p className="montserrat-font-family sale-text mb-0 text-center">
          <span> {time && time.days}</span> Days{" "}
          <span> {time && time.hours}h </span>:
          <span> {time && time.minutes}m </span>:
          <span> {time && time.seconds}s</span>
        </p>
      )}
    </>
  );
};

export default Timer;
