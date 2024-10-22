import { Component } from "react";
import { SiGmail, SiLinkedin, SiGithub } from "react-icons/si";
import {
  Github_Link,
  Email_Link,
  Linkedin_Link,
  Twitter_Link,
} from "../../public/Common/constants";
import { SlSocialTwitter } from "react-icons/sl";

class SocialProfileClass extends Component {
  constructor(props) {
    super(props);
    // console.log("SocialProfileClass child constructor");
  }

  async componentDidMount() {
    // console.log("SocialProfileClass child componentDidMount");
  }

  componentDidUpdate() {
    // console.log("SocialProfileClass child componentDidUpdate");
  }

  componentWillUnmount() {
    // console.log("SocialProfileClass child componentWillUnmount");
  }

  render() {
    // console.log("SocialProfileClass child render");
    return (
      <div className="social-media-container">
        <a
          href={Linkedin_Link}
          className="icon-button linkedin"
          target="_blank"
        >
          <i>
            <SiLinkedin />
          </i>
        </a>
        <a href={Twitter_Link} className="icon-button twitter" target="_blank">
          <i>
            <SlSocialTwitter />
          </i>
        </a>
        <a href={Github_Link} className="icon-button github" target="_blank">
          <i>
            <SiGithub />
          </i>
        </a>
        <a href={Email_Link} className="icon-button email">
          <i>
            <SiGmail />
          </i>
        </a>
      </div>
    );
  }
}

export default SocialProfileClass;
