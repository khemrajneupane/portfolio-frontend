import React from "react";
const CurriculumVitae = () => {
  const styles = {
    height: "100%",
    width: "100%",
    border: "5px solid lightgrey",
    marginBottom: "10px",
    backgroundColor: "#f0edeb"
  };
  return (
    <div className="container flex-a">
      <img style={styles} src={require("../assets/CV.jpg")} alt="cvimage" />
    </div>
  );
};
export default CurriculumVitae;
