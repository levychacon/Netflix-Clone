import React, { useContext, useState, useEffect } from "react";
import { Loading } from "../components/loading";
import { Header } from "../components/header";
import { Card } from "../components/card";
import { SelectProfileContainer } from "./profile";
import { FirebaseContext } from "../context/firebase";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";

export const BrowseContainer = ({ slides }) => {
  const [category, setCategory] = useState("series");
  const [searchTerm, setSearchTerm] = useState("");
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [slideRows, setSlideRows] = useState();
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  console.log(user.photoURL);

  useEffect(() => {
    console.log("profile", profile);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  useEffect(() => {
    setSlideRows(slides[category]);
  }, [slides, category]);

  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
      <Header src="joker1" dontShowOnSmallViewPort>
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
            <Header.TextLink active={category === "series" ? "true" : "false"} onClick={()=> setCategory('series')}>
              Series
            </Header.TextLink>
            <Header.TextLink active={category === "films" ? "true" : "false"} onClick={()=> setCategory('films')}>Films</Header.TextLink>
          </Header.Group>
          <Header.Group>
            <Header.Search
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
            <Header.Profile>
              <Header.Picture src={user.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={user.photoURL} />
                  <Header.TextLink>{user.displayName}</Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink onClick={() => firebase.auth().signout()}>
                    Sign out
                  </Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>
        <Header.Feature>
          <Header.FeatureCallOut> Watch Joker now </Header.FeatureCallOut>
          <Header.Text>
            Isolated, intimidated and disregarded by society, the unsuccessful
            comedian Arthur Fleck starts his way as a criminal mind after
            murdering three men in the middle of the subway. His action starts a
            popular movement against Gotham City's elite, of which Thomas Wayne
            is its main representative.
          </Header.Text>
          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>
      </Header>

      <Card.Group>
        {slideRows.map((slideItem)=>(
          <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
            <Card.Title>{slideItem.title}</Card.Title>
            <Card.Entities>
             { slideItem.data.map((item)=>(
               <Card.Item key={item.docId} item={item}>
                 <Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} />
                 <Card.Meta>
                   <Card.SubTitle>{item.title}</Card.SubTitle>
                   <Card.Text>{item.description}</Card.Text>
                 </Card.Meta>
               </Card.Item>
             ))}
            </Card.Entities>

            <Card.Feature category={category}>
              {/* <Player>
                <Player.Button></Player.Button>
                <Player.Video src="/videos/bunny.mp4"/>
              </Player> */}
              <p>hello</p>
            </Card.Feature>
          </Card>
        ))}
      </Card.Group>
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
};

export default BrowseContainer;
