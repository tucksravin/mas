import React from "react"
import Layout from "../components/Layout"
import FullBox from "../components/FullBox/FullBox"
import TitleText from "../components/FullBox/TitleText/TitleText"
import SubTitleText from "../components/FullBox/SubTitleText/SubTitleText"
import PhoneNumber from "../components/FullBox/PhoneNumber/PhoneNumber"
import Row from "../components/Row/Row"
import HalfBox from "../components/Row/HalfBox/HalfBox"
import BestOfMarin from "../components/Row/HalfBox/BestOfMarin/BestOfMarin"
import Yelp from "../components/Row/HalfBox/Yelp/Yelp"
import IconSet from "../components/FullBox/IconSet/IconSet"
import Appliance from "../components/FullBox/IconSet/Appliance/Appliance"
import EmailAddress from "../components/FullBox/EmailAddress/EmailAddress"

export default () => (
  <Layout>
<FullBox>
  <TitleText>Over 30 Years Experience</TitleText>
  <TitleText>Delivering Prompt Professional Personalized Service</TitleText>
  <TitleText>Talk to Mike at</TitleText>
  <PhoneNumber />
</FullBox>
<Row>
  <HalfBox>
    <BestOfMarin />
  </HalfBox>
  <HalfBox>
    <Yelp />
  </HalfBox>
</Row>

<FullBox>
  <TitleText>Servicing All Major Domestic Appliances </TitleText>
  <IconSet>
    <Appliance whichApp="washer" />
    <Appliance whichApp="dryer" />
    <Appliance whichApp="fridge" />
  </IconSet>
  <IconSet>
    <Appliance whichApp="stove" />
    <Appliance whichApp="dishwasher" />
    <Appliance whichApp="freezer" />
  </IconSet>
</FullBox>

<FullBox>
  <TitleText>Covering Most of Marin County</TitleText>
  <SubTitleText>8am to 5pm</SubTitleText>
  <SubTitleText>Monday through Friday</SubTitleText>
</FullBox>

<FullBox>
  <TitleText> Prefer to Email? </TitleText>
  <SubTitleText>Please include the issue your are having with your machine, and the make and model.</SubTitleText>
  <EmailAddress />
</FullBox>

</ Layout>
)
