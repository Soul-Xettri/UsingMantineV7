import {
  Container,
  Title,
  Text,
  Image,
  SimpleGrid,
  Select,
} from "@mantine/core";
import classes from "./Hero.module.css";
import bedroom from "../../assets/bedbreakfast.jpg";
import hotel from "../../assets/hotel.jpg"
export function Hero() {
  return (
    <div className={classes.root}>
      <Container
        size="lg"
        style={{
          maxWidth: "inherit",
          marginRight: "35px",
        }}
      >
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Book your stay &
              <br />
              enjoy a luxury experience
            </Title>

            <Text className={classes.description} mt={30}>
              Book your room now, starting from €59 per night
              <br />
              and enjoy a luxury experience.
            </Text>

            <div className={classes.searchWrap}>
              <div className={classes.searchLayer}>
                <div className={classes.searchFormOuter}>
                  <div className={classes.formInner}>
                    <SimpleGrid
                      cols={3}
                      h={"50px"}
                      display={"flex"}
                      style={{
                        justifyContent: "center",
                        alignContent: "center",
                        alignItems: "center",
                        flexWrap: "wrap",
                      }}
                    >
                      <div>
                        <Select
                          data={["React", "Angular", "Svelte", "Vue"]}
                          placeholder="Pick value"
                          style={{padding: "8px 18px"}}
                        />
                      </div>
                      <div>
                        {" "}
                        <Select
                          data={["React", "Angular", "Svelte", "Vue"]}
                          placeholder="Pick value"
                          style={{padding: "8px 18px"}}
                        />
                      </div>

                      <div>
                        <button className={classes.button}>
                          Check Availiability
                        </button>
                      </div>
                    </SimpleGrid>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.imageLayer}>
          <Image src={hotel} style={{height:"inherit"}}/>
        </div>
      </Container>
    </div>
  );
}
