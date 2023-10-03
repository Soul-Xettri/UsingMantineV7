import { Link } from "react-router-dom";
import Map from "../Components/Map/Map";
import { Text, Title } from "@mantine/core";

export default function ContactUsPage() {
  return (
    <>
     <div
        style={{
          marginTop: "0",
          background: "#f5f3f0",
          borderBottom: "1px solid #f2f1f0",
          borderTop: "1px solid #f2f1f0",
          paddingTop: "60px",
          paddingBottom: "60px",
        }}
      >
        <div
          style={{
            width: "100%",
            paddingLeft: "95px",
            paddingRight: "95px",
            marginRight: "auto",
            marginLeft: "auto",
          }}
        >
          <Title
            style={{
              color: "#474747",
              fontFamily: "sans-serif",
              fontWeight: 500,
            }}
          >
            Contact us
          </Title>
          <Text
            style={{ fontSize: "16px", lineHeight: "15px", color: "#606060" }}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              Home
            </Link>{" "}
            / Contact-us
          </Text>
        </div>
      </div>
      <div style={{width:"100%",height:"500px",display:"flex",padding:"0px 100px"}}>
      <Map />
      </div>
    </>
  );
}
