import React from 'react'
import Styled from "styled-components"
import {useNavigate} from "react-router-dom"

function Footer() {
  const navigate = useNavigate();
  return (
    <Container>
    <Content>
    <a href="/">Back to Top</a>
    </Content>
    <Notes>
        <div>
          <ul>
             <li><d>Get to Know us</d></li>
             <li>Careers</li>
             <li>Blog</li>
             <li>About Amazon</li>
             <li>Investor Relations</li>
             <li>Amazon Devices</li>
             <li>Amazon Science</li>
          </ul>
        </div>
        <div>
          <ul>
            <li><d>Make Money with Us</d></li>
            <li>Sell Products on Amazon</li>
            <li>Sell on Amazon Business</li>
            <li>Sell Apps on Amazon</li>
            <li>Become an Affiliate</li>
            <li>Advertise Ur Product</li>
            <li>Self-Publish with Us</li>
            <li>Host an Amazon Hub</li>
            <li>See More Make Money with us</li>
          </ul>
        </div>
        <div>
          <ul>
            <li><d>Amazon Payment Products</d></li>
            <li>Amazon Business Card</li>
            <li>Shop with Points</li>
            <li>Reload Your Balance</li>
            <li>Amazon Currency Converter</li>
          </ul>
        </div>
        <div>
          <ul>
            <li><d>Let Us Help You</d></li>
            <li>Amazon and COVID-19</li>
            <li>Your Account</li>
            <li>Your Orders</li>
            <li>Shipping Rates & Policies</li>
            <li>Return & Replacement</li>
            <li>Manage Your Content and Devices</li>
            <li>Amazon Assistance</li>
            <li>Help</li>
          </ul>
        </div>
        </Notes>
        <SecondFooter>
           <div>
             <label>Amazon Music</label>
             <p>Streaming of Million songs</p>
             <label>Amazon Business</label>
             <p>Everything for Your Business</p>
             <label>Box Office Mozo</label>
             <p>Finf Movie box office Data</p>
             <label>Kindle Direct Publising</label>
             <p>Kindle Digital & Print publishing Made Easy</p>
           </div>

           <div>
            <label>Amazon Advertising</label>
            <p>Find,Attract and Engage Customers</p>
            <label>Amazon Global</label>
            <p>Ship Orders Internationally</p>
            <label>ComiXology</label>
            <p>Thousands of Digital Comics</p>
            <label>Prime Video Direct</label>
            <p>Video Distribution Made easy</p>
            <label>Blink</label>
            <p>Smart Security for Every Home</p>
           </div>

           <div>
             <label>Amazon Drive</label>
             <p>Cloud storage from Amazon</p>
             <label>Home Services</label>
             <p>Experienced Pros Happiness Guarantee</p>
             <label>DPReview</label>
             <p>Digital Photography</p>
             <label>Shopbop</label>
             <p>Designer Fashion Brands</p>
             <label>Neighbors App</label>
             <p>Real-Time Crime & Safety Alerts</p>
           </div>

           <div>
            <label>6pm</label>
            <p>Score deals on fashion brands</p>
            <label>	Amazon Ignite</label>
            <p>Sell your original Digital Educational Resources</p>
            <label>	Fabric</label>
            <p>Sewing, Quilting & Knitting</p>
            <label>	Woot!</label>
            <p>Deals and Shenanigans</p>
            <label>	Amazon Subscription Boxes</label>
            <p>Top subscription boxes-right to your door</p>
           </div> 

           <div>
            <label>	AbeBooks</label>
            <p>Books, art & collectibles</p>
            <label>Amazon Web Services</label>
            <p>Scalable Cloud Computing Services</p>
            <label>	Goodreads</label>
            <p>Book reviews & recommendations</p>
            <label>	Zappos</label>
            <p>Shoes & Clothing</p>
            <label>	PillPack</label>
            <p>Pharmacy Simplified</p>
           </div>

           <div>
            <label>	ACX</label>
            <p>Audiobook Publishing Made Easy</p>
            <label>	Audible</label>
            <p>Listen to Books & Original Audio Performances</p>
            <label>	IMDb</label>
            <p>Movies, TV & Celebrities</p>
            <label>Ring</label>
            <p>Smart Home Security Systems</p>
           </div>

           <div>
           <label>Sell on Amazon</label>
           <p>Start a Selling Account</p>
           <label>Book Depository</label>
           <p>Books With Free Delivery Worldwide</p>
           <label>IMDbPro</label>
           <p>Get Info Entertainment Professionals Need</p>
           <label>eero WiFi</label>
           <p>Stream 4K Video in Every Room</p>
           </div>
        </SecondFooter>
        <InfoText>
         <ul>
           <li>Conditions of use</li>
           <li>Privacy Notice</li>
           <li>Help</li>
         </ul>
         <s>© 1996-2022, Amazon.com, Inc. or its affiliates</s>
       </InfoText>
    </Container>
  )
}

const Content=Styled.div`
width: 100%;
height: 30px;
margin-top: 0;
background-color: #152238;
text-align: center;
padding-top: 10px;
font-size: 13px;
a{
    text-decoration: none;
    color: white;
}
`

const Notes=Styled.div`
display: flex;
width: 88%;
gap: 65px;
padding-left: 162px;
padding-top: 30px;
padding-bottom:30px;
background-color: #141418;
color: white;
border-bottom: 1px solid grey;
ul li d{
    font-weight: 700;
    font-size: 16px;
}
ul li{
    list-style: none;
    font-size: 13px;
    padding-top: 7px;
    font-weight: 400;
    &:hover{
        cursor:pointer;
        border-bottom: 1px solid white;
        width: fit-content;
    }
}

`
const Container=Styled.div``

const SecondFooter=Styled.div`
display: flex;
flex-direction:row;
padding-left: 14em;
padding-right: 8em;
gap: 30px;
padding-top: 40px;
line-height:9px;
background-color: #13131a;
color: white;
div{
    height: fit-content;
    width: 100px;
    padding:0
}
label{
    font-size:10px;
    font-weight: 600;
    padding-bottom:0;
}p{
    font-size:9px;
    font-weight: 500;
    padding-bottom: 20px;
    color: grey;
    &:hover{
        text-decoration:underline;
        cursor:pointer;
    }
}
`

const InfoText=Styled.div`
text-align:center;
color:white;
background-color: #13131a;
position:absolute;
width: 100%;
ul{
 display:flex;
 font-size: 11px;
 font-weight: 600;
 justify-content:center;
 gap: 25px;
 list-style:none;
 cursor: pointer;
 &:hover{
    text-decoration:underline;
 }
}s{
 font-size: 11px;
 padding-left: 45px;
 font-weight:500;
 text-decoration: none
}
`

export default Footer