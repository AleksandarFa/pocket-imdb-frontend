import React from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import { logout } from "../../store/auth/actions";

import Cssbaseline from "@material-ui/core/Cssbaseline";
import Button from "@material-ui/core/Button";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [t, i18n] = useTranslation("translation");
  return (
    <div>
      <Cssbaseline />
      <h2>{t("dashboard.title")}</h2>
      <Button onClick={() => dispatch(logout())} variant="outlined">
        {t("dashboard.logoutBtn")}
      </Button>
    </div>
  );
};

export default Dashboard;
