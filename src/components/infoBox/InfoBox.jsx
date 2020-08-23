import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./infoBox.css";

const InfoBox = ({
  title,
  cases,
  total,
  onClick,
  active,
  isBlue,
  isGreen,
  isRed,
}) => {
  return (
    <Card
      className={`infoBox ${active && "infoBox--selected"} ${
        isBlue && "infoBox--blue"
      } ${isRed && "infoBox--red"} ${isGreen && "infoBox--green"}`}
      onClick={onClick}
    >
      <CardContent>
        <Typography color="textSecondary">{title}</Typography>
        <h2
          className={`infoBox__cases ${isRed && "infoBox--red-content"} ${
            isBlue && "infoBox--blue-content"
          } ${isGreen && "infoBox--green-content"}`}
        >
          {cases}
        </h2>
        <Typography className="infoBox__total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InfoBox;
