import React from "react";
import Head from "next/head";
import { FaSearch, FaHome, FaHeart, FaUser, FaShoppingCart } from "react-icons/fa";

const Page = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontFamily: "'Varela Round', sans-serif",
    flexDirection: "column",
  };

  const boxStyle = {
    textAlign: "left",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "30px",
    backgroundColor: "rgb(234,235,239)",
    height: "100vh",
    width: "300px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const headingStyle = {
    fontWeight: "bold",
    fontSize: "24px",
    marginBottom: "5px",
    color: "black",
  };

  const searchBarContainerStyle = {
    position: "relative",
    width: "90%",
    marginBottom: "10px",
  };

  const searchBarStyle = {
    padding: "10px",
    fontSize: "16px",
    width: "100%",
    borderRadius: "10px",
    border: "1px solid rgb(255,255,255)",
  };

  const searchIconStyle = {
    position: "absolute",
    top: "50%",
    right: "10px",
    transform: "translateY(-50%)",
    fontSize: "18px",
    color: "black",
  };

  const scrollContainerStyle = {
    display: "flex",
    overflow: "hidden",
    whiteSpace: "nowrap",
    gap: "10px",
  };

  const imageStyle = {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    objectFit: "cover",
  };

  const largeBoxesContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "95%",
    padding: "8px",
    marginTop: "14px",
  };

  const largeBoxStyle = {
    width: "45%",
    height: "110px",
    borderRadius: "15px",
    overflow: "hidden",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const footerStyle = {
  position: "fixed",
  bottom: 0,
  left: "50%", // Center horizontally
  transform: "translateX(-50%)", // Offset by half width
  width: "345px", // Match container width
  height: "60px",
  backgroundColor: "white",
  borderRadius: "50px",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  padding: "10px 0",
  boxShadow: "0 -16px 10px rgba(0,0,0,0.1)",
  marginBottom: "0px", // Ensure it's flush with bottom
  zIndex: 1000 // Ensure footer stays on top
};

  const footerIconStyle = {
    fontSize: "28px",
    color: "rgb(122,123,125)",
    cursor: "pointer"
  };

  return (
    <>
      <Head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet" />
      </Head>

      <div style={containerStyle}>
        <div style={boxStyle}>
          <h1 style={headingStyle}>Premier Vehicle</h1>
          <div style={searchBarContainerStyle}>
            <input type="text" placeholder="Search" style={searchBarStyle} />
            <FaSearch style={searchIconStyle} />
          </div>
          
          <div style={scrollContainerStyle}>
            {[...Array(5)].map((_, index) => (
              <img
                key={index}
                src={
                  index === 1
                    ? "https://i.pinimg.com/736x/3b/10/42/3b1042d30785fea245a2086f5cff3641.jpg"
                    : index === 2
                    ? "https://i.pinimg.com/736x/db/49/88/db49889b32c562be9ffd9f0c730bf006.jpg"
                    : index === 3
                    ? "https://i.pinimg.com/736x/de/2c/f3/de2cf33616af7360afcff7c19e415183.jpg"
                    : index === 4
                    ? "https://i.pinimg.com/736x/cd/bd/02/cdbd02b51fb5306e916e07dcdd171054.jpg"
                    : "https://i.pinimg.com/736x/3f/23/58/3f23580c843ae5d3bfaf3671b620ccbb.jpg"
                }
                alt={`Vehicle ${index + 1}`}
                style={imageStyle}
              />
            ))}
          </div>
          
          <div style={largeBoxesContainerStyle}>
            {[...Array(4)].map((_, index) => (
              <div key={index} style={{ width: "45%", textAlign: "center" }}>
                <div
                  style={{
                    ...largeBoxStyle,
                    backgroundImage: `url(https://i.pinimg.com/736x/${index === 0 ? "58/d0/a5/58d0a56d3f66a244d5642b7ea13f0d1b" : 
                      index === 1 ? "da/f9/e8/daf9e8691fd61bf2244463e225b2d113" :
                      index === 2 ? "31/39/06/31390601c17410203ad97f0b8fdce288" :
                      "d1/c0/30/d1c030e0c8a026b6f2a7b1d4de94369e"}.jpg)`,
                    height: "130px",
                    width: "130px",
                  }}
                />
                <div style={{ paddingTop: "10px", fontWeight: "bold", color: "black", textAlign: "left", fontFamily: "'Varela Round', sans-serif" }}>
                 {index === 0 ? "Tesla Roadster" : 
         index === 1 ? "Cyber Truck" :
         index === 2 ? "Tesla Model S" : "Tesla Model X"}
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ paddingTop: "5px", fontWeight: "bold", color: "rgb(122,123,125)", textAlign: "left" }}>
                    $ 45,400
                  </div>
                  <div style={{
                    width: "20px",
                    height: "20px",
                    backgroundColor: "black",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: "23px",
                    fontFamily: "'Varela Round', sans-serif",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}>
                    +
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={footerStyle}>
            <FaHome style={footerIconStyle} />
            <FaHeart style={footerIconStyle} />
            <FaShoppingCart style={footerIconStyle} />
            <FaUser style={footerIconStyle} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;