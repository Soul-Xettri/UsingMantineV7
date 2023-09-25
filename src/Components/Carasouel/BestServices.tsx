import { Image, SimpleGrid, Text, Title } from "@mantine/core";
import manHall from "../../assets/mainHall.jpg";
import classes from "./BestServices.module.css";
import pool from "../../assets/pool.png";
import treamwork from "../../assets/teamwork.png";
import massage from "../../assets/massage.png";
import restaurant from "../../assets/restaurant.png";
import spa from "../../assets/spa.jpg";
import swimming from "../../assets/swimming.jpg";
import meeting from "../../assets/meeting.jpg";
import { useEffect, useState } from "react";
export default function BestServices() {
  const [activeService, setActiveService] = useState(0);
  const services = [
    { name: "Swimming Pool", image: pool },
    { name: "Meeting Room", image: treamwork },
    { name: "Restaurants", image: restaurant },
    { name: "Spa", image: massage },
  ];
  const images = [
    swimming, 
    meeting, 
    manHall, 
    spa, 
  ];
  const handleIconClick = (index:any) => {
    setActiveService(index);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prevActiveService) =>
        prevActiveService === services.length - 1 ? 0 : prevActiveService + 1
      ),1000;
    }, 6000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div
      style={{
        padding: "50px 50px 50px 50px",
        paddingRight: "30px",
        backgroundColor: "#F5F3F0",
      }}
    >
      <Title className={classes.title}>The best places to stay</Title>
      <Text className={classes.text}>
        Plenty of services to assure your relaxation and comfortability .
      </Text>
      <div style={{ position: "relative" }}>
        <SimpleGrid
          style={{ position: "absolute", top: "20%", zIndex: 1 }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                position: "relative",
                cursor: "pointer",
                transition: "ease",
              }}
              onClick={() => handleIconClick(index)}
            >
              <div className={classes.inner}>
                <Image src={service.image} className={classes.icon} />
              </div>
              <div
                className={classes.inner2}
                style={{ display: index === activeService ? "block" : "none" }}
              >
                <div>
                  <div style={{ display: "flex" }}>
                    <Image src={service.image} className={classes.icon} />
                    <div className={classes.detail}>
                      <Title className={classes.innerText}>
                        {service.name}
                      </Title>
                      <Text className={classes.innerParagraph}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </SimpleGrid>
        <div
          style={{
            display: "flex",
            paddingLeft: "30px",
            width: "100%",
            paddingTop: "10px",
          }}
        >
          <div
            style={{
              width: "75%",
              display: "flex",
              position: "relative",
              margin: "20px",
            }}
          >
            <Image
             src={images[activeService]}
              style={{ width: "100%", borderRadius: "10px" }}
            />
            <div className={classes.overlay}>
              <h4 className={classes.figCaption}>{services[activeService].name}</h4>
            </div>
          </div>
          <SimpleGrid p={"20px 0px 20px 20px"} w={"25%"}>
            <div className={classes.swimmingPool}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "20px",
                }}
              >
                <Text className={classes.count}>50</Text>
                <Text className={classes.word}>Swimming Pools</Text>
              </div>
            </div>
            <div className={classes.meetingRooms}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "20px",
                }}
              >
                <Text className={classes.count}>3</Text>
                <Text className={classes.word}>Meeting Rooms</Text>
              </div>
            </div>
            <div className={classes.spa}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "20px",
                }}
              >
                <Text className={classes.count}>18</Text>
                <Text className={classes.word}>Spa</Text>
              </div>
            </div>
            <div className={classes.restaurants}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "20px",
                }}
              >
                <Text className={classes.count}>2</Text>
                <Text className={classes.word}>Restaurants</Text>
              </div>
            </div>
          </SimpleGrid>
        </div>
      </div>
    </div>
  );
}
