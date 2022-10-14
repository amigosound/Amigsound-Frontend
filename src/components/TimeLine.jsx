import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { BsFillCalendarCheckFill } from "react-bootstrap-icons";
function TimeLine() {
  return (
    <div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#ffffff", color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid  #861f36" }}
          date="2023"
          dateClassName="text-white"
          iconStyle={{ background: "#861f36", color: "#fff" }}
          //   icon={<BsFillCalendarCheckFill />}
        >
          <h3 className="vertical-timeline-element-title">Q1 2023</h3>
          {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
          <ol>
            <li> Airdrop to the community</li>
            <li> Public sale</li>
            <li> Dex listings</li>
            <li> New Strategic Partnerships</li>
            <li> Growth Hacking and Marketing Campaigns</li>
            <li> 1000-5000 Artists/Musicians Onboarding</li>
          </ol>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#ffffff", color: "#000" }}
          date="2023"
          dateClassName="text-white"
          contentArrowStyle={{ borderRight: "7px solid  #861f36" }}
          iconStyle={{ background: "#861f36", color: "#fff" }}
          //   icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Q3 2023</h3>
          {/* <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4> */}
          <ol>
            <li> Music Platform Streaming release Desktop and Mobile</li>
            <li> Second Public Sale</li>
            <li> AmigoSound app release for Google Play and Android</li>
            <li> 25.000-50.000 Artists/Musicians Onboarding </li>
            <li> New Strategic Partners</li>
            <li>
              50.000-100.000 monthly visits to our music streaming platform
            </li>
          </ol>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#ffffff", color: "#000" }}
          date="2023"
          dateClassName="text-white"
          contentArrowStyle={{ borderRight: "7px solid  #861f36" }}
          iconStyle={{ background: "#861f36", color: "#fff" }}
          //   icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Q4 2023</h3>
          {/* <h4 className="vertical-timeline-element-subtitle">
            Los Angeles, CA
          </h4> */}
          <ol>
            <li> AmigoSound music video platform released </li>
            <li> NFT Platform Launch </li>
            <li> Launching Promotion Programs for Artists </li>
            <li> Launching AmigoSound Online Magazine </li>
            <li> Launching AmigoSound NFT Ticket Selling </li>
            <li>
              {" "}
              Reaching over 100.000 artists/musicians onboarding on the
              platforms
            </li>
            <li> 250.000 monthly visits on our music streaming platform </li>
          </ol>
        </VerticalTimelineElement>
        {/* <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2006 - 2008"
          //   iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          //   icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="April 2013"
          //   iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          //   icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Content Marketing for Web, Mobile and Social Media
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
          <p>Strategy, Social Media</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="November 2012"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          //   icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Agile Development Scrum Master
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Certification</h4>
          <p>Creative Direction, User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2002 - 2006"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          //   icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Bachelor of Science in Interactive Digital Media Visual Imaging
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor Degree
          </h4>
          <p>Creative Direction, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          //   icon={<StarIcon />}
        /> */}
      </VerticalTimeline>
    </div>
  );
}

export default TimeLine;
