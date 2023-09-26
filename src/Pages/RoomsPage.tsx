import { Container, Grid, SimpleGrid, Text, Title } from "@mantine/core";
import { Link } from "react-router-dom";
import honeymoonsuite from "../assets/honeymoonsuite.jpg";
import { IconMicrowave } from "@tabler/icons-react";
import {
  FaBath,
  FaChevronRight,
  FaCoffee,
  FaDesktop,
  FaEyeSlash,
  FaParking,
  FaPersonBooth,
  FaSnowflake,
  FaWifi,
  FaWind,
  FaWineGlassAlt,
} from "react-icons/fa";
export default function RoomsPage() {
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
            Rooms
          </Title>
          <Text
            style={{ fontSize: "16px", lineHeight: "15px", color: "#606060" }}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              Home
            </Link>{" "}
            / Rooms
          </Text>
        </div>
      </div>
      <div style={{ width: "100%", padding: "100px 0", overflow: "hidden" }}>
        <Container style={{ maxWidth: "90%" }}>
          <div
            style={{
              borderRadius: "8px",
              marginBottom: "40px",
              border: "1px solid #efefef",
              position: "relative",
              background: "#fff",
              overflow: "hidden",
            }}
          >
            <Grid>
              <Grid.Col
                span={4.5}
                style={{
                  overflow: "hidden",
                  position: "relative",
                  width: "100%",
                  padding: "0",
                  backgroundImage: `url(${honeymoonsuite})`,
                  backgroundSize: "cover",
                }}
              >
                <div
                  style={{
                    display: "block",
                    content: "",
                    position: "absolute",
                    top: "15px",
                    right: 0,
                    bottom: "15px",
                    left: "15px",
                    border: "5px double rgba(255,255,255,.5)",
                    zIndex: 1,
                    borderRight: "none",
                    borderRadius: "8px 0 0 8px",
                  }}
                />
                {/* <Image src={honeymoonsuite} /> */}
              </Grid.Col>
              <Grid.Col
                span={5}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "50px 20px 50px 20px",
                }}
              >
                <h2
                  style={{
                    margin: "0",
                    lineHeight: "30px",
                    fontSize: "22px",
                    color: "#32353c",
                    letterSpacing: "0.5px",
                    fontWeight: 600,
                  }}
                >
                  Honeymoon Suite
                </h2>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: "25px",
                    margin: "20px 0 10px 0",
                    color: "#6d7991",
                  }}
                >
                  The Honeymoon Suite is the best choice for a fresh married
                  couple to have a comfortable and luxurious honeymoon vacation.
                </p>
                <div
                  style={{
                    marginTop: "40px",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <SimpleGrid
                    cols={9}
                    spacing={"5px"}
                    verticalSpacing={"5px"}
                    style={{
                      cursor: "grab",
                      boxSizing: "content-box",
                    }}
                  >
                    <div
                      style={{
                        border: "1px solid #efefef",
                        borderRadius: "8px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexShrink: 0,
                        width: "35px",
                        height: "35px",
                        lineHeight: "35px",
                        cursor: "pointer",
                        verticalAlign: "middle",
                      }}
                    >
                      <FaParking
                        style={{ fontSize: "15px", color: "#6d7991" }}
                      />
                    </div>
                    <div
                      style={{
                        border: "1px solid #efefef",
                        borderRadius: "8px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexShrink: 0,
                        width: "35px",
                        height: "35px",
                        lineHeight: "35px",
                        cursor: "pointer",
                        verticalAlign: "middle",
                      }}
                    >
                      <FaEyeSlash
                        style={{ fontSize: "15px", color: "#6d7991" }}
                      />
                    </div>
                    <div
                      style={{
                        border: "1px solid #efefef",
                        borderRadius: "8px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexShrink: 0,
                        width: "35px",
                        height: "35px",
                        lineHeight: "35px",
                        cursor: "pointer",
                        verticalAlign: "middle",
                      }}
                    >
                      <FaSnowflake
                        style={{ fontSize: "15px", color: "#6d7991" }}
                      />
                    </div>
                    <div
                      style={{
                        border: "1px solid #efefef",
                        borderRadius: "8px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexShrink: 0,
                        width: "35px",
                        height: "35px",
                        lineHeight: "35px",
                        cursor: "pointer",
                        verticalAlign: "middle",
                      }}
                    >
                      <FaDesktop
                        style={{ fontSize: "15px", color: "#6d7991" }}
                      />
                    </div>
                    <div
                      style={{
                        border: "1px solid #efefef",
                        borderRadius: "8px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexShrink: 0,
                        width: "35px",
                        height: "35px",
                        lineHeight: "35px",
                        cursor: "pointer",
                        verticalAlign: "middle",
                      }}
                    >
                      <FaBath style={{ fontSize: "15px", color: "#6d7991" }} />
                    </div>
                    <div
                      style={{
                        border: "1px solid #efefef",
                        borderRadius: "8px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexShrink: 0,
                        width: "35px",
                        height: "35px",
                        lineHeight: "35px",
                        cursor: "pointer",
                        verticalAlign: "middle",
                      }}
                    >
                      <FaWineGlassAlt
                        style={{ fontSize: "15px", color: "#6d7991" }}
                      />
                    </div>
                    <div
                      style={{
                        border: "1px solid #efefef",
                        borderRadius: "8px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexShrink: 0,
                        width: "35px",
                        height: "35px",
                        lineHeight: "35px",
                        cursor: "pointer",
                        verticalAlign: "middle",
                      }}
                    >
                      <IconMicrowave
                        style={{ height: "15px", color: "#6d7991" }}
                      />
                    </div>
                    <div
                      style={{
                        border: "1px solid #efefef",
                        borderRadius: "8px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexShrink: 0,
                        width: "35px",
                        height: "35px",
                        lineHeight: "35px",
                        cursor: "pointer",
                        verticalAlign: "middle",
                      }}
                    >
                      <FaPersonBooth
                        style={{ fontSize: "15px", color: "#6d7991" }}
                      />
                    </div>
                    <div
                      style={{
                        border: "1px solid #efefef",
                        borderRadius: "8px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexShrink: 0,
                        width: "35px",
                        height: "35px",
                        lineHeight: "35px",
                        cursor: "pointer",
                        verticalAlign: "middle",
                      }}
                    >
                      <FaWind style={{ fontSize: "15px", color: "#6d7991" }} />
                    </div>
                    <div
                      style={{
                        border: "1px solid #efefef",
                        borderRadius: "8px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexShrink: 0,
                        width: "35px",
                        height: "35px",
                        lineHeight: "35px",
                        cursor: "pointer",
                        verticalAlign: "middle",
                      }}
                    >
                      <FaCoffee
                        style={{ fontSize: "15px", color: "#6d7991" }}
                      />
                    </div>
                    <div
                      style={{
                        border: "1px solid #efefef",
                        borderRadius: "8px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexShrink: 0,
                        width: "35px",
                        height: "35px",
                        lineHeight: "35px",
                        cursor: "pointer",
                        verticalAlign: "middle",
                      }}
                    >
                      <FaWifi style={{ fontSize: "15px", color: "#6d7991" }} />
                    </div>
                  </SimpleGrid>
                </div>
              </Grid.Col>
              <Grid.Col
                span={2.5}
                style={{
                  borderLeft: "1px solid #ebebeb",
                  padding: "62px 20px",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <div>
                  <span
                    style={{
                      fontSize: "20px",
                      color: "#606060",
                      fontWeight: 600,
                    }}
                  >
                    <strong>
                      <span>$</span>
                      <span style={{ fontSize: "24px" }}>350,00</span>
                    </strong>
                  </span>
                  <span
                    style={{
                      display: "block",
                      textTransform: "uppercase",
                      marginBottom: "25px",
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#6d7991",
                    }}
                  >
                    per night
                  </span>
                </div>
                <Link to="#" style={{ textDecoration: "none" }}>
                  <button
                    style={{
                      border: "1px solid #efefef",
                      color: "#deb666",
                      padding: "8px 16px",
                      lineHeight: "21px",
                      width: "auto",
                      margin: "0 auto",
                      background: "#fff",
                      borderRadius: "50px",
                      fontSize: "14px",
                      fontWeight: 600,
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                  >
                    More Details{" "}
                    <span
                      style={{
                        backgroundColor: "#deb666",
                        borderRadius: "50%",
                        lineHeight: "20px",
                        marginLeft: "8px",
                        marginRight: "0px",
                        height: "20px",
                        width: "20px",
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "8px",
                      }}
                    >
                      <FaChevronRight />
                    </span>
                  </button>
                </Link>
              </Grid.Col>
            </Grid>
          </div>
          <div
            style={{
              borderRadius: "8px",
              marginBottom: "40px",
              border: "1px solid #efefef",
              position: "relative",
              background: "#fff",
              overflow: "hidden",
            }}
          >
            <Grid>
              <Grid.Col
                span={4.5}
                style={{
                  overflow: "hidden",
                  position: "relative",
                  width: "100%",
                  padding: "0",
                  backgroundImage: `url(${honeymoonsuite})`,
                  backgroundSize: "cover",
                }}
              >
                <div
                  style={{
                    display: "block",
                    content: "",
                    position: "absolute",
                    top: "15px",
                    right: 0,
                    bottom: "15px",
                    left: "15px",
                    border: "5px double rgba(255,255,255,.5)",
                    zIndex: 1,
                    borderRight: "none",
                    borderRadius: "8px 0 0 8px",
                  }}
                />
                {/* <Image src={honeymoonsuite} /> */}
              </Grid.Col>
              <Grid.Col
                span={5}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "50px 20px 50px 20px",
                }}
              >
                <h2
                  style={{
                    margin: "0",
                    lineHeight: "30px",
                    fontSize: "22px",
                    color: "#32353c",
                    letterSpacing: "0.5px",
                    fontWeight: 600,
                  }}
                >
                  Honeymoon Suite
                </h2>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: "25px",
                    margin: "20px 0p 10px 0",
                    color: "#6d7991",
                  }}
                >
                  The Honeymoon Suite is the best choice for a fresh married
                  couple to have a comfortable and luxurious honeymoon vacation.
                </p>
                <div
                  style={{
                    marginTop: "40px",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <SimpleGrid
                    cols={9}
                    spacing={"5px"}
                    verticalSpacing={"5px"}
                    style={{
                      cursor: "grab",
                      boxSizing: "content-box",
                    }}
                  >
                    <div
                      style={{
                        border: "1px solid #efefef",
                        borderRadius: "8px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexShrink: 0,
                        width: "35px",
                        height: "35px",
                        lineHeight: "35px",
                        cursor: "pointer",
                        verticalAlign: "middle",
                      }}
                    >
                      <FaParking
                        style={{ fontSize: "15px", color: "#6d7991" }}
                      />
                    </div>
                    <div
                      style={{
                        border: "1px solid #efefef",
                        borderRadius: "8px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexShrink: 0,
                        width: "35px",
                        height: "35px",
                        lineHeight: "35px",
                        cursor: "pointer",
                        verticalAlign: "middle",
                      }}
                    >
                      <FaEyeSlash
                        style={{ fontSize: "15px", color: "#6d7991" }}
                      />
                    </div>
                    <div
                      style={{
                        border: "1px solid #efefef",
                        borderRadius: "8px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexShrink: 0,
                        width: "35px",
                        height: "35px",
                        lineHeight: "35px",
                        cursor: "pointer",
                        verticalAlign: "middle",
                      }}
                    >
                      <FaSnowflake
                        style={{ fontSize: "15px", color: "#6d7991" }}
                      />
                    </div>
                    <div
                      style={{
                        border: "1px solid #efefef",
                        borderRadius: "8px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexShrink: 0,
                        width: "35px",
                        height: "35px",
                        lineHeight: "35px",
                        cursor: "pointer",
                        verticalAlign: "middle",
                      }}
                    >
                      <FaDesktop
                        style={{ fontSize: "15px", color: "#6d7991" }}
                      />
                    </div>
                    <div
                      style={{
                        border: "1px solid #efefef",
                        borderRadius: "8px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexShrink: 0,
                        width: "35px",
                        height: "35px",
                        lineHeight: "35px",
                        cursor: "pointer",
                        verticalAlign: "middle",
                      }}
                    >
                      <FaBath style={{ fontSize: "15px", color: "#6d7991" }} />
                    </div>
                    <div
                      style={{
                        border: "1px solid #efefef",
                        borderRadius: "8px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexShrink: 0,
                        width: "35px",
                        height: "35px",
                        lineHeight: "35px",
                        cursor: "pointer",
                        verticalAlign: "middle",
                      }}
                    >
                      <FaWineGlassAlt
                        style={{ fontSize: "15px", color: "#6d7991" }}
                      />
                    </div>
                    <div
                      style={{
                        border: "1px solid #efefef",
                        borderRadius: "8px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexShrink: 0,
                        width: "35px",
                        height: "35px",
                        lineHeight: "35px",
                        cursor: "pointer",
                        verticalAlign: "middle",
                      }}
                    >
                      <IconMicrowave
                        style={{ height: "15px", color: "#6d7991" }}
                      />
                    </div>
                    <div
                      style={{
                        border: "1px solid #efefef",
                        borderRadius: "8px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexShrink: 0,
                        width: "35px",
                        height: "35px",
                        lineHeight: "35px",
                        cursor: "pointer",
                        verticalAlign: "middle",
                      }}
                    >
                      <FaPersonBooth
                        style={{ fontSize: "15px", color: "#6d7991" }}
                      />
                    </div>
                    <div
                      style={{
                        border: "1px solid #efefef",
                        borderRadius: "8px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexShrink: 0,
                        width: "35px",
                        height: "35px",
                        lineHeight: "35px",
                        cursor: "pointer",
                        verticalAlign: "middle",
                      }}
                    >
                      <FaWind style={{ fontSize: "15px", color: "#6d7991" }} />
                    </div>
                    <div
                      style={{
                        border: "1px solid #efefef",
                        borderRadius: "8px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexShrink: 0,
                        width: "35px",
                        height: "35px",
                        lineHeight: "35px",
                        cursor: "pointer",
                        verticalAlign: "middle",
                      }}
                    >
                      <FaCoffee
                        style={{ fontSize: "15px", color: "#6d7991" }}
                      />
                    </div>
                    <div
                      style={{
                        border: "1px solid #efefef",
                        borderRadius: "8px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexShrink: 0,
                        width: "35px",
                        height: "35px",
                        lineHeight: "35px",
                        cursor: "pointer",
                        verticalAlign: "middle",
                      }}
                    >
                      <FaWifi style={{ fontSize: "15px", color: "#6d7991" }} />
                    </div>
                  </SimpleGrid>
                </div>
              </Grid.Col>
              <Grid.Col
                span={2.5}
                style={{
                  borderLeft: "1px solid #ebebeb",
                  padding: "62px 20px",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <div>
                  <span
                    style={{
                      fontSize: "20px",
                      color: "#606060",
                      fontWeight: 600,
                    }}
                  >
                    <strong>
                      <span>$</span>
                      <span style={{ fontSize: "24px" }}>350,00</span>
                    </strong>
                  </span>
                  <span
                    style={{
                      display: "block",
                      textTransform: "uppercase",
                      marginBottom: "25px",
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#6d7991",
                    }}
                  >
                    per night
                  </span>
                </div>
                <Link to="#" style={{ textDecoration: "none" }}>
                  <button
                    style={{
                      border: "1px solid #efefef",
                      color: "#deb666",
                      padding: "8px 16px",
                      lineHeight: "21px",
                      width: "auto",
                      margin: "0 auto",
                      background: "#fff",
                      borderRadius: "50px",
                      fontSize: "14px",
                      fontWeight: 600,
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                  >
                    More Details{" "}
                    <span
                      style={{
                        backgroundColor: "#deb666",
                        borderRadius: "50%",
                        lineHeight: "20px",
                        marginLeft: "8px",
                        marginRight: "0px",
                        height: "20px",
                        width: "20px",
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "8px",
                      }}
                    >
                      <FaChevronRight />
                    </span>
                  </button>
                </Link>
              </Grid.Col>
            </Grid>
          </div>
          <div
            style={{
              borderRadius: "8px",
              marginBottom: "40px",
              border: "1px solid #efefef",
              position: "relative",
              background: "#fff",
              overflow: "hidden",
            }}
          >
            <Grid>
              <Grid.Col
                span={4.5}
                style={{
                  overflow: "hidden",
                  position: "relative",
                  width: "100%",
                  padding: "0",
                  backgroundImage: `url(${honeymoonsuite})`,
                  backgroundSize: "cover",
                }}
              >
                <div
                  style={{
                    display: "block",
                    content: "",
                    position: "absolute",
                    top: "15px",
                    right: 0,
                    bottom: "15px",
                    left: "15px",
                    border: "5px double rgba(255,255,255,.5)",
                    zIndex: 1,
                    borderRight: "none",
                    borderRadius: "8px 0 0 8px",
                  }}
                />
                {/* <Image src={honeymoonsuite} /> */}
              </Grid.Col>
              <Grid.Col
                span={5}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "50px 20px 50px 20px",
                }}
              >
                <h2
                  style={{
                    margin: "0",
                    lineHeight: "30px",
                    fontSize: "22px",
                    color: "#32353c",
                    letterSpacing: "0.5px",
                    fontWeight: 600,
                  }}
                >
                  Honeymoon Suite
                </h2>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: "25px",
                    margin: "20px 0p 10px 0",
                    color: "#6d7991",
                  }}
                >
                  The Honeymoon Suite is the best choice for a fresh married
                  couple to have a comfortable and luxurious honeymoon vacation.
                </p>
                <div
                  style={{
                    marginTop: "40px",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <SimpleGrid
                    cols={9}
                    spacing={"5px"}
                    verticalSpacing={"5px"}
                    style={{
                      cursor: "grab",
                      boxSizing: "content-box",
                    }}
                  >
                    <div
                      style={{
                        border: "1px solid #efefef",
                        borderRadius: "8px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexShrink: 0,
                        width: "35px",
                        height: "35px",
                        lineHeight: "35px",
                        cursor: "pointer",
                        verticalAlign: "middle",
                      }}
                    >
                      <FaParking
                        style={{ fontSize: "15px", color: "#6d7991" }}
                      />
                    </div>
                    <div
                      style={{
                        border: "1px solid #efefef",
                        borderRadius: "8px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexShrink: 0,
                        width: "35px",
                        height: "35px",
                        lineHeight: "35px",
                        cursor: "pointer",
                        verticalAlign: "middle",
                      }}
                    >
                      <FaEyeSlash
                        style={{ fontSize: "15px", color: "#6d7991" }}
                      />
                    </div>
                    <div
                      style={{
                        border: "1px solid #efefef",
                        borderRadius: "8px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexShrink: 0,
                        width: "35px",
                        height: "35px",
                        lineHeight: "35px",
                        cursor: "pointer",
                        verticalAlign: "middle",
                      }}
                    >
                      <FaSnowflake
                        style={{ fontSize: "15px", color: "#6d7991" }}
                      />
                    </div>
                    <div
                      style={{
                        border: "1px solid #efefef",
                        borderRadius: "8px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexShrink: 0,
                        width: "35px",
                        height: "35px",
                        lineHeight: "35px",
                        cursor: "pointer",
                        verticalAlign: "middle",
                      }}
                    >
                      <FaDesktop
                        style={{ fontSize: "15px", color: "#6d7991" }}
                      />
                    </div>
                    <div
                      style={{
                        border: "1px solid #efefef",
                        borderRadius: "8px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexShrink: 0,
                        width: "35px",
                        height: "35px",
                        lineHeight: "35px",
                        cursor: "pointer",
                        verticalAlign: "middle",
                      }}
                    >
                      <FaBath style={{ fontSize: "15px", color: "#6d7991" }} />
                    </div>
                    <div
                      style={{
                        border: "1px solid #efefef",
                        borderRadius: "8px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexShrink: 0,
                        width: "35px",
                        height: "35px",
                        lineHeight: "35px",
                        cursor: "pointer",
                        verticalAlign: "middle",
                      }}
                    >
                      <FaWineGlassAlt
                        style={{ fontSize: "15px", color: "#6d7991" }}
                      />
                    </div>
                    <div
                      style={{
                        border: "1px solid #efefef",
                        borderRadius: "8px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexShrink: 0,
                        width: "35px",
                        height: "35px",
                        lineHeight: "35px",
                        cursor: "pointer",
                        verticalAlign: "middle",
                      }}
                    >
                      <IconMicrowave
                        style={{ height: "15px", color: "#6d7991" }}
                      />
                    </div>
                    <div
                      style={{
                        border: "1px solid #efefef",
                        borderRadius: "8px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexShrink: 0,
                        width: "35px",
                        height: "35px",
                        lineHeight: "35px",
                        cursor: "pointer",
                        verticalAlign: "middle",
                      }}
                    >
                      <FaPersonBooth
                        style={{ fontSize: "15px", color: "#6d7991" }}
                      />
                    </div>
                    <div
                      style={{
                        border: "1px solid #efefef",
                        borderRadius: "8px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexShrink: 0,
                        width: "35px",
                        height: "35px",
                        lineHeight: "35px",
                        cursor: "pointer",
                        verticalAlign: "middle",
                      }}
                    >
                      <FaWind style={{ fontSize: "15px", color: "#6d7991" }} />
                    </div>
                    <div
                      style={{
                        border: "1px solid #efefef",
                        borderRadius: "8px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexShrink: 0,
                        width: "35px",
                        height: "35px",
                        lineHeight: "35px",
                        cursor: "pointer",
                        verticalAlign: "middle",
                      }}
                    >
                      <FaCoffee
                        style={{ fontSize: "15px", color: "#6d7991" }}
                      />
                    </div>
                    <div
                      style={{
                        border: "1px solid #efefef",
                        borderRadius: "8px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexShrink: 0,
                        width: "35px",
                        height: "35px",
                        lineHeight: "35px",
                        cursor: "pointer",
                        verticalAlign: "middle",
                      }}
                    >
                      <FaWifi style={{ fontSize: "15px", color: "#6d7991" }} />
                    </div>
                  </SimpleGrid>
                </div>
              </Grid.Col>
              <Grid.Col
                span={2.5}
                style={{
                  borderLeft: "1px solid #ebebeb",
                  padding: "62px 20px",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <div>
                  <span
                    style={{
                      fontSize: "20px",
                      color: "#606060",
                      fontWeight: 600,
                    }}
                  >
                    <strong>
                      <span>$</span>
                      <span style={{ fontSize: "24px" }}>350,00</span>
                    </strong>
                  </span>
                  <span
                    style={{
                      display: "block",
                      textTransform: "uppercase",
                      marginBottom: "25px",
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#6d7991",
                    }}
                  >
                    per night
                  </span>
                </div>
                <Link to="#" style={{ textDecoration: "none" }}>
                  <button
                    style={{
                      border: "1px solid #efefef",
                      color: "#deb666",
                      padding: "8px 16px",
                      lineHeight: "21px",
                      width: "auto",
                      margin: "0 auto",
                      background: "#fff",
                      borderRadius: "50px",
                      fontSize: "14px",
                      fontWeight: 600,
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                  >
                    More Details{" "}
                    <span
                      style={{
                        backgroundColor: "#deb666",
                        borderRadius: "50%",
                        lineHeight: "20px",
                        marginLeft: "8px",
                        marginRight: "0px",
                        height: "20px",
                        width: "20px",
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "8px",
                      }}
                    >
                      <FaChevronRight />
                    </span>
                  </button>
                </Link>
              </Grid.Col>
            </Grid>
          </div>
          <div
            style={{
              borderRadius: "8px",
              marginBottom: "40px",
              border: "1px solid #efefef",
              position: "relative",
              background: "#fff",
              overflow: "hidden",
            }}
          >
            <Grid>
              <Grid.Col
                span={4.5}
                style={{
                  overflow: "hidden",
                  position: "relative",
                  width: "100%",
                  padding: "0",
                  backgroundImage: `url(${honeymoonsuite})`,
                  backgroundSize: "cover",
                }}
              >
                <div
                  style={{
                    display: "block",
                    content: "",
                    position: "absolute",
                    top: "15px",
                    right: 0,
                    bottom: "15px",
                    left: "15px",
                    border: "5px double rgba(255,255,255,.5)",
                    zIndex: 1,
                    borderRight: "none",
                    borderRadius: "8px 0 0 8px",
                  }}
                />
                {/* <Image src={honeymoonsuite} /> */}
              </Grid.Col>
              <Grid.Col
                span={5}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "50px 20px 50px 20px",
                }}
              >
                <h2
                  style={{
                    margin: "0",
                    lineHeight: "30px",
                    fontSize: "22px",
                    color: "#32353c",
                    letterSpacing: "0.5px",
                    fontWeight: 600,
                  }}
                >
                  Honeymoon Suite
                </h2>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: "25px",
                    margin: "20px 0p 10px 0",
                    color: "#6d7991",
                  }}
                >
                  The Honeymoon Suite is the best choice for a fresh married
                  couple to have a comfortable and luxurious honeymoon vacation.
                </p>
                <div
                  style={{
                    marginTop: "40px",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <SimpleGrid
                    cols={9}
                    spacing={"5px"}
                    verticalSpacing={"5px"}
                    style={{
                      cursor: "grab",
                      boxSizing: "content-box",
                    }}
                  >
                    <div
                      style={{
                        border: "1px solid #efefef",
                        borderRadius: "8px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexShrink: 0,
                        width: "35px",
                        height: "35px",
                        lineHeight: "35px",
                        cursor: "pointer",
                        verticalAlign: "middle",
                      }}
                    >
                      <FaParking
                        style={{ fontSize: "15px", color: "#6d7991" }}
                      />
                    </div>
                    <div
                      style={{
                        border: "1px solid #efefef",
                        borderRadius: "8px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexShrink: 0,
                        width: "35px",
                        height: "35px",
                        lineHeight: "35px",
                        cursor: "pointer",
                        verticalAlign: "middle",
                      }}
                    >
                      <FaEyeSlash
                        style={{ fontSize: "15px", color: "#6d7991" }}
                      />
                    </div>
                    <div
                      style={{
                        border: "1px solid #efefef",
                        borderRadius: "8px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexShrink: 0,
                        width: "35px",
                        height: "35px",
                        lineHeight: "35px",
                        cursor: "pointer",
                        verticalAlign: "middle",
                      }}
                    >
                      <FaSnowflake
                        style={{ fontSize: "15px", color: "#6d7991" }}
                      />
                    </div>
                    <div
                      style={{
                        border: "1px solid #efefef",
                        borderRadius: "8px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexShrink: 0,
                        width: "35px",
                        height: "35px",
                        lineHeight: "35px",
                        cursor: "pointer",
                        verticalAlign: "middle",
                      }}
                    >
                      <FaDesktop
                        style={{ fontSize: "15px", color: "#6d7991" }}
                      />
                    </div>
                    <div
                      style={{
                        border: "1px solid #efefef",
                        borderRadius: "8px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexShrink: 0,
                        width: "35px",
                        height: "35px",
                        lineHeight: "35px",
                        cursor: "pointer",
                        verticalAlign: "middle",
                      }}
                    >
                      <FaBath style={{ fontSize: "15px", color: "#6d7991" }} />
                    </div>
                    <div
                      style={{
                        border: "1px solid #efefef",
                        borderRadius: "8px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexShrink: 0,
                        width: "35px",
                        height: "35px",
                        lineHeight: "35px",
                        cursor: "pointer",
                        verticalAlign: "middle",
                      }}
                    >
                      <FaWineGlassAlt
                        style={{ fontSize: "15px", color: "#6d7991" }}
                      />
                    </div>
                    <div
                      style={{
                        border: "1px solid #efefef",
                        borderRadius: "8px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexShrink: 0,
                        width: "35px",
                        height: "35px",
                        lineHeight: "35px",
                        cursor: "pointer",
                        verticalAlign: "middle",
                      }}
                    >
                      <IconMicrowave
                        style={{ height: "15px", color: "#6d7991" }}
                      />
                    </div>
                    <div
                      style={{
                        border: "1px solid #efefef",
                        borderRadius: "8px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexShrink: 0,
                        width: "35px",
                        height: "35px",
                        lineHeight: "35px",
                        cursor: "pointer",
                        verticalAlign: "middle",
                      }}
                    >
                      <FaPersonBooth
                        style={{ fontSize: "15px", color: "#6d7991" }}
                      />
                    </div>
                    <div
                      style={{
                        border: "1px solid #efefef",
                        borderRadius: "8px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexShrink: 0,
                        width: "35px",
                        height: "35px",
                        lineHeight: "35px",
                        cursor: "pointer",
                        verticalAlign: "middle",
                      }}
                    >
                      <FaWind style={{ fontSize: "15px", color: "#6d7991" }} />
                    </div>
                    <div
                      style={{
                        border: "1px solid #efefef",
                        borderRadius: "8px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexShrink: 0,
                        width: "35px",
                        height: "35px",
                        lineHeight: "35px",
                        cursor: "pointer",
                        verticalAlign: "middle",
                      }}
                    >
                      <FaCoffee
                        style={{ fontSize: "15px", color: "#6d7991" }}
                      />
                    </div>
                    <div
                      style={{
                        border: "1px solid #efefef",
                        borderRadius: "8px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexShrink: 0,
                        width: "35px",
                        height: "35px",
                        lineHeight: "35px",
                        cursor: "pointer",
                        verticalAlign: "middle",
                      }}
                    >
                      <FaWifi style={{ fontSize: "15px", color: "#6d7991" }} />
                    </div>
                  </SimpleGrid>
                </div>
              </Grid.Col>
              <Grid.Col
                span={2.5}
                style={{
                  borderLeft: "1px solid #ebebeb",
                  padding: "62px 20px",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <div>
                  <span
                    style={{
                      fontSize: "20px",
                      color: "#606060",
                      fontWeight: 600,
                    }}
                  >
                    <strong>
                      <span>$</span>
                      <span style={{ fontSize: "24px" }}>350,00</span>
                    </strong>
                  </span>
                  <span
                    style={{
                      display: "block",
                      textTransform: "uppercase",
                      marginBottom: "25px",
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#6d7991",
                    }}
                  >
                    per night
                  </span>
                </div>
                <Link to="#" style={{ textDecoration: "none" }}>
                  <button
                    style={{
                      border: "1px solid #efefef",
                      color: "#deb666",
                      padding: "8px 16px",
                      lineHeight: "21px",
                      width: "auto",
                      margin: "0 auto",
                      background: "#fff",
                      borderRadius: "50px",
                      fontSize: "14px",
                      fontWeight: 600,
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                  >
                    More Details{" "}
                    <span
                      style={{
                        backgroundColor: "#deb666",
                        borderRadius: "50%",
                        lineHeight: "20px",
                        marginLeft: "8px",
                        marginRight: "0px",
                        height: "20px",
                        width: "20px",
                        color: "#fff",
                        display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "8px",
                        }}
                      >
                        <FaChevronRight />
                      </span>
                    </button>
                  </Link>
                </Grid.Col>
              </Grid>
            </div>
          </Container>
        </div>
      </>
    );
  }
