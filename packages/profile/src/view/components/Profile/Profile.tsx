import React from "react";
import { Container, Grid, Button } from "@material-ui/core";
import GridItem from "../Grid/GridItem";
import GridContainer from "../Grid/GridContainer";
import Card from "../Card/Card";
import CardAvatar from "../Card/CardAvatar";
import CardBody from "../Card/CardBody";
import useStyles from "./styles";
import { ProfilePropsType } from "./types";
export default function Profile({ store }: ProfilePropsType) {
  const openGithub = () => window.open(store.link, "_blank");
  const classes = useStyles();
  React.useEffect(() => {
    store.dispatchPageTitle("Profile");
  }, []);
  return (
    <main className={classes.content}>
      <div />
      <Container maxWidth="lg" className={classes.container}>
        <Grid item xs={12}>
          <GridContainer>
            <GridItem>
              <Card className={""} profile>
                <CardAvatar profile className={""}>
                  <a href="#michail" onClick={openGithub}>
                    <img
                      src={store.img}
                      className={classes.avatarPic}
                      alt="..."
                    />
                  </a>
                </CardAvatar>
                <CardBody className={""} profile>
                  <h3>{store.displayName}</h3>
                  <p style={{ padding: "0 50px" }}>{store.description}</p>
                  <Button onClick={openGithub} color="primary">
                    Follow
                  </Button>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </Grid>
      </Container>
    </main>
  );
}
