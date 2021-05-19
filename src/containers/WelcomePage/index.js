import React from "react";
import { useTranslation } from "react-i18next";
import Nav from "../Nav";
import links from "../Nav/constants";

import Cssbaseline from "@material-ui/core/Cssbaseline";

const WelcomePage = () => {
  const [t, i18n] = useTranslation("translation");
  return (
    <div>
      <Cssbaseline />
      <h1>{t("welcome.title")}</h1>
      <Nav links={links} />
    </div>
  );
};

export default WelcomePage;
