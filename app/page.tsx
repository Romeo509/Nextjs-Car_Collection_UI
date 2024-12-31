import React from "react";

const Page = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontFamily: "'Poppins', Arial, sans-serif",
  };

  const boxStyle = {
    padding: "0",
    border: "1px solid #ccc",
    borderRadius: "20px",
    backgroundColor: "#f9f9f9",
    height: "98vh",
    width: "25%", // Reduced width
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  };

  const upDivStyle = {
    height: "70%",
    backgroundImage: "url('/images/1.jpg')", // Path to the image in the public folder
    backgroundSize: "cover", // Ensures the image covers the div
    backgroundPosition: "center", // Centers the image
    position: "relative", // Allows absolute positioning inside this div
    display: "flex",
    justifyContent: "flex-start", // Align content to the left
    alignItems: "flex-start", // Align content to the top
    padding: "20px",
  };

  const premiumTextStyle = {
    color: "white",
    fontSize: "36px", // Large font size for "Premium"
    fontWeight: "bold",
    lineHeight: "1.2",
    margin: "0",
    display: "block", // Makes "Premium" a block-level element
  };

  const carCollectionTextStyle = {
    color: "white",
    fontSize: "24px", // Smaller font size for "Car Collection"
    fontWeight: "bold",
    marginTop: "5px", // Adds a small gap between "Premium" and "Car Collection"
    margin: "0",
    display: "block", // Makes "Car Collection" a block-level element
  };

  const downDivStyle = {
    height: "30%",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center", // Center content vertically
    alignItems: "center", // Center content horizontally
    padding: "20px",
  };

  const textStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "20px",
    textAlign: "center",
    color: "rgb(0,0,0)", // Set text color to the specified value
  };

  const buttonStyle = {
    padding: "10px 20px",
    fontSize: "16px",
	fontWeight: "bold",
    backgroundColor: "rgb(0,0,0)",
    color: "white",
    border: "none",
    borderRadius: "20px",
    cursor: "pointer",
    width: "200px", // Set width of the button
    height: "50px", // Set height of the button
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <div style={upDivStyle}>
          <div style={premiumTextStyle}>Premium</div>
          <div style={carCollectionTextStyle}>Car Collection</div>
        </div>
        <div style={downDivStyle}>
          <div style={textStyle}>Discover the best car collection shop ever.</div>
          <button style={buttonStyle}>Get started</button>
        </div>
      </div>
    </div>
  );
};

export default Page;
