import React from "react";
const CurriculumVitae = () => {
  const styles = {
    height: "100%",
    width: "100%"
  };
  return <div className="container"><img style={styles} src={require("../assets/CV.png")} alt="cvimage" /></div>;
};
export default CurriculumVitae;
