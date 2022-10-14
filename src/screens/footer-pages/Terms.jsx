import React from "react";
import imageUrl from "../../utils/ImageUrl";
import { Sidebar, Header } from "../../components";
import { Link } from "react-router-dom";
function Terms() {
  return (
    <>
      {/* <section id="banner">
        <div className="bg-image">
          <img src={imageUrl("home-bg-final.png")} alt="home-bg-final.png" />
        </div>

        <Sidebar />
        <div className="main-heading">
          <div className="heading-inside">
            <h1>Amigo Sound</h1>
            <p>The Best Way to Find New Music</p>
            <div className="signup-btn mt-5">
              <a href="#">
                <img src={imageUrl("signup.png")} alt="home-bg-final.png" />{" "}
                Sign Up Now
              </a>
            </div>
          </div>
        </div>
      </section> */}
      <section className="text-home text-for-footer">
        <Header />
        <div className="container">
          <div className="welcome-desc">
            {/* <h2 className="welcome-back">TERMS OF SERVICES</h2> */}
            <h3 className="welcome-front text-center">TERMS OF SERVICES</h3>
          </div>
          <div className="welcome-desc">
            <h3 className="welcome-front amigo ">
              {" "}
              1. ACCEPTANCE OF TERMS; MODIFICATION OF TERMS
            </h3>
            <p className="mt-3">
              AmigoSound (“Company”, “we”, “us”, or “our”) owns, controls, and
              operates the platform known as “AmigoSound”, a web-based, content
              streaming and sharing service available at our website, By
              accessing and using the Platform and/or creating any type of User
              profile account on the Platform (an “Account”), in any manner,
              including, but not limited to, visiting or browsing the Platform,
              publishing or listening to Content (as defined herein) on or
              through the Platform, or providing backend development, serving,
              discovery or governance services for the Platform, you are deemed
              to have read, accepted, executed, and be bound by these Terms of
              Use.
            </p>{" "}
            <p className="mt-3">
              {" "}
              YOU MUST BE AT LEAST THIRTEEN (13) YEARS TO ACCESS AND USE THE
              PLATFORM; PROVIDED, IF YOU ARE BETWEEN THE AGES OF THIRTEEN (13)
              AND EIGHTEEN (18) YEARS OLD (OR ANY GREATER AGE REQUIRED TO BE
              DEEMED TO HAVE REACHED THE AGE OF MAJORITY UNDER THE APPLICABLE
              LAW OF THE STATE OR JURISDICTION OF YOUR PRIMARY RESIDENCE) YOU
              MAY ONLY ACCESS AND USE THE PLATFORM WITH THE PRIOR PERMISSION OF
              YOUR PARENT OR LEGAL GUARDIAN, AND YOU REPRESENT AND WARRANT TO US
              THAT YOU HAVE SUCH PERMISSION AND THAT YOUR PARENT OR LEGAL
              GUARDIAN HAS REVIEWED AND DISCUSSED THESE TERMS OF USE WITH YOU.
            </p>
            <p className="mt-3">
              SINCE CERTAIN CONTENT (i.e., SOUND RECORDINGS THAT MAY CONTAIN
              EXPLICIT LYRICS, ETC.) MADE AVAILABLE ON THE PLATFORM MAY NOT BE
              SUITABLE FOR MINORS, WE RECOMMEND THAT PARENTS OR LEGAL GUARDIANS
              WHO PERMIT THEIR CHILD TO ACCESS AND USE THE PLATFORM TO SUPERVISE
              SUCH CHILD’S ACTIVITY, INCLUDING, WITHOUT LIMITATION, ANY
              ENGAGEMENT WITH ANY OTHER USER THEREON.
            </p>{" "}
            <p className="mt-3">
              {" "}
              These Terms of Use apply to each of the following types of Users
              of the Platform, who in addition to being bound by these Terms of
              Use generally, are also bound by those specific terms and
              conditions contained herein and apply directly to such User types:
              (1) Users who publish or otherwise make Content available on or
              through the Platform that can be accessed, listened to or
              otherwise interacted with by Listeners (“Creators”); (2) Users who
              access, listen to and/or otherwise interact with Content published
              or otherwise made available on or through the Platform by Creators
              (“Listeners”); The company may change or amend these Terms of Use
              at any time at its sole and absolute discretion.
            </p>{" "}
            <p className="mt-3">
              We encourage you to review these Terms of Use carefully and to
              check these Terms of Use periodically for any updates or changes.
              If Company makes a material change or amendment to these Terms of
              Use it will provide notification of such changes or amendments on
              the Platform, which changes, or amendments will be effective
              automatically upon the posting of such notification.
            </p>{" "}
            <p className="mt-3">
              {" "}
              You agree that all agreements, notices, disclosures, and other
              communications we provide to you electronically satisfy any legal
              requirement that such communications be in writing.
              Notwithstanding the terms of this paragraph, no revisions to the
              Terms of Use will apply to any dispute between you and the Company
              that arose prior to the effective date of such revision.
            </p>
            <p className="mt-3">
              The company may, from time to time, release new versions of the
              Platform, or release/introduce new tools, products, services,
              functionalities, and/or features for the Platform, which will be
              subject to these Terms of Use, and any additional terms and
              conditions as may apply to such additional versions, tools,
              products, services, functionalities, or features. Additionally, as
              a fully decentralized protocol, Users of the Platform may from
              time to time develop and create new tools, products, services,
              functionalities, and/or features for the Platform, which will also
              be subject to these Terms of Use, and any additional terms and
              conditions that may be established in connection therewith.
            </p>{" "}
            <p className="mt-3">
              IF ANY PROVISION OF THESE TERMS OF USE OR ANY FUTURE CHANGES ARE
              UNACCEPTABLE TO YOU, DO NOT USE OR CONTINUE TO USE THE PLATFORM
              AND DO NOT CREATE OR CONTINUE TO MAINTAIN AN ACCOUNT. YOUR
              CONTINUED USE OF THE PLATFORM FOLLOWING THE POSTING OF ANY NOTICE
              OF ANY CHANGE TO THESE TERMS OF USE SHALL AUTOMATICALLY CONSTITUTE
              YOUR ACCEPTANCE AND AGREEMENT TO SUCH CHANGE.
            </p>
          </div>
          <div className="welcome-desc">
            <h3 className="welcome-front amigo "> 2. PLATFORM LICENSE</h3>
            <p className="mt-5">
              Company hereby grants you a limited, non-exclusive, revocable
              (solely with respect to the AmigoSound Service), royalty-free,
              non-transferable, non-assignable, non-sublicensable, right and
              license to access and make personal use of the Platform, the
              Platform Elements (as defined below), and the Content, solely as
              permitted by the tools, products, services, functionalities and/or
              features made available to Users of the Platform, subject in all
              respects to these Terms of Use, and not for redistribution of any
              kind (the “Platform License”).
            </p>
            <p className="mt-3">
              Violation of this Platform License may result in infringement of
              intellectual property and contractual rights of the Company, other
              Users of the Platform, or other third parties.
            </p>
          </div>
          <div className="welcome-desc">
            <h3 className="welcome-front amigo ">
              {" "}
              3. USER ACCOUNTS; REGISTRATION DATA
            </h3>
            <p className="mt-5">
              While you may browse the public-facing portions of the Platform
              without registering with us, in order to enjoy the full benefits
              of the Platform, or become a Creator, you must first register for
              and create an Account. You agree to create only one (1) unique
              Account and that you shall be the sole authorized user of your
              Account. As part of the registration process, Users will be asked
              to submit certain information such as their name, email address,
              profile name, and photo/image, and to create an Account login
              password (collectively, “Registration Data”). Registration Data
              also includes your location by city and state, which you have the
              option to remove from your Account profile at any time. You agree
              and represent that all Registration Data you provide to Company
              will be and remain at all times true, accurate, current, and
              complete. The company may from time to time modify or add to the
              Registration Data information fields required to create an
              Account, and you agree to promptly complete any such additional or
              modified information fields when and as requested by Company. In
              some cases, in order to utilize certain features and
              functionalities of the Platform, you will also need to update your
              Account and/or operating system settings to allow us to access
              your address book/contacts and camera/microphone functions
              provided this will be voluntary and subject to you opting in to
              allow us access to such functions on your device. You must make
              sure that your Account profile name complies with these Terms of
              Use. Your registration with us is subject to our confirmation and
              will become valid when we either confirm your registration or
              activate your Account.
            </p>
            <p className="mt-3">
              The company will have the right to use your Registration Data in
              connection with servicing and operating the Platform and in other
              manners as set forth in more detail in our Privacy Policy. You
              agree (i) to restrict access by any other person or entity to your
              password or other login information, (ii) to not knowingly use the
              name or email of any other person without authorization, (iii) to
              not use an email or profile name that is profane, offensive or
              otherwise inappropriate, (iv) to not allow any third party to use
              your login information, Registration Data or Account, and (v) to
              not re-create any new or additional Account in the event your
              original Account is suspended or terminated in accordance with the
              terms hereof. You agree that you will be liable for all activities
              that occur under your Account, even if such activities were not
              committed by you. The company is not responsible for any loss or
              damage as a result of someone else using your Account,
              Registration Data, or password with or without your knowledge.
            </p>
          </div>
          <div className="welcome-desc">
            <h3 className="welcome-front amigo "> 4. LISTENERS</h3>
            <p className="mt-5">
              If you are accessing and using the Platform in your capacity as a
              Listener, you hereby acknowledge and agree that you may only make
              personal and non-commercial use of the Content published to the
              Platform by Creators, and you may not sell, license, rent, or
              otherwise exploit any such Content for commercial purposes or in
              any way that violates these Terms of Use or the rights of any
              third-party. Each Listener further acknowledges and agrees that a
              Creator may restrict or limit the specific manner in which such
              Listener can access, listen to, or otherwise interact with Content
              that such Creator has published or otherwise made available on or
              through the Platform (e.g., by permitting a Listener to stream
              certain Content but not download or share such Content
              off-Platform), or impose a fee in the form of a stablecoin
              (defined herein) payment in order for such Listener to access,
              listen to, or otherwise interact with such Content.
            </p>
            <p className="mt-3">
              Each Listener hereby agrees to comply with any imposed stablecoin
              payment requirements and/or to use Content solely in accordance
              with the specific permissions granted and restrictions imposed by
              the applicable Creator thereof. Any use of Content outside of
              those permissions and/or restrictions set by the applicable
              Creator, therefore, requires the separate and express written
              permission of such Creator in each instance..
            </p>
          </div>
          <div className="welcome-desc">
            <h3 className="welcome-front amigo "> 5. CREATORS</h3>
            <p className="mt-5">
              As used in these Terms of Use, “Content” shall mean all sound
              recordings, musical compositions, metadata, information, text,
              artwork, copyrights, trademarks, logos, designs, insignia, data,
              information, and other content, materials, original works of
              authorship, and/or intellectual property that is published or
              otherwise made available on or through the Platform by a Creator
              for a Listener to access, listen to or otherwise interact with via
              the Platform. Each Creator acknowledges and agrees that its
              Content will be made publicly available to other Users on the
              Platform via the distribution functionalities described in, and in
              accordance with, these Terms of Use.
            </p>
            <p className="mt-3">
              Each Creator further acknowledges and agrees that its Account
              profile name or login identifier will be linked to, or appear
              alongside, all such publicly available Content.
            </p>
          </div>
          <div className="welcome-desc">
            <h3 className="welcome-front amigo ">
              {" "}
              6. LIMITATIONS ON PLATFORM USE
            </h3>
            <p className="mt-3">
              The Platform and any Content belonging to another User may not be
              used, modified, reproduced, duplicated, copied, published,
              distributed, downloaded (unless permitted by a Creator for such
              Creator’s Content), sold, resold, transformed, redesigned,
              reconfigured, retransmitted, or otherwise exploited by you for any
              purpose except as facilitated by the tools, products, services,
              functionalities and/or features made available to Users of the
              Platform, subject to these Terms of Use, or without the express
              prior written consent of Company, the applicable User, and/or the
              applicable third party owner thereof, in each instance.
            </p>
            <p className="mt-3">
              Without limiting the foregoing, while using the Platform, you may
              not conduct any of the following activities:
            </p>
            <ul className="privacy-list">
              <li className="mt-3">
                {" "}
                Defame, abuse, harass, stalk, threaten, bully, or otherwise
                violate the legal rights (such as but not limited to, rights of
                privacy and publicity) of Company or other Users, or use
                information learned from the Platform to otherwise defame,
                abuse, harass, stalk, threaten, bully, intimidate or mislead, or
                otherwise violate the legal rights of Company or any other User
                outside of the Platform.
              </li>
              <li className="mt-3">
                Upload Content to the Platform, or otherwise interact with other
                Users to communicate or distribute information, that is
                defamatory, profane, infringing, obscene, pornographic, unlawful
                (e.g., drug use or other criminal activity), offensive, and/or
                harmful, including, but not limited to, content that advocates,
                endorses, condones or promotes racism, bigotry, hatred or
                physical harm of any kind against any individual or group of
                individuals.
              </li>
              <li className="mt-3">
                Upload Content to the Platform for which you are not the owner,
                or for which you have not obtained all rights, clearances,
                licenses, and other consents required to do so and to grant
                Company the Content License in and to such Content set forth
                herein.
              </li>
              <li className="mt-3">
                Solicit or induce, or attempt to solicit or induce, other Users
                on the Platform to take any actions that could be harmful to
                such Users or any other person or property, or that otherwise
                would violate any applicable laws.
              </li>
              <li className="mt-3">
                Upload Content or other material or software that violates the
                intellectual property rights (or rights of privacy or publicity)
                of any third party or for which you have not obtained the
                necessary rights or permissions to use accordingly.
              </li>
              <li className="mt-3">
                Upload Content or other material or software that features any
                person that has not given you express permission to include a
                such person in such Content and who has not granted you all
                rights necessary or required for you to grant Company the
                Content License in and to such Content, including, without
                limitation, such person’s name, image, voice, likeness,
                biographical material, and any other right of publicity/privacy
                held by such person in connection with such Content.
              </li>
              <li className="mt-3">
                Conduct or forward surveys, contests, pyramid schemes, or chain
                letters.
              </li>
              <li className="mt-3">
                Advertise or offer to sell any goods or services (other than as
                expressly permitted pursuant to the functionalities and service
                offerings via the Platform) for any commercial purpose through
                the Platform, or otherwise post commercial advertisements,
                affiliate links, and other forms of solicitation, without
                Company’s prior written consent in each instance.
              </li>
              <li className="mt-3">
                Impersonate another person or User or knowingly allow any other
                person or entity to use your identification or account to post
                or view comments on, or otherwise utilize, the Platform.
              </li>
              <li className="mt-3">
                Restrict or inhibit any other User from using and enjoying the
                Platform.
              </li>
              <li className="mt-3">
                Imply or state that any statements you make are endorsed by
                Company or any other User, without the prior written consent of
                the Company or such User.
              </li>
              <li className="mt-3">
                Use a robot, spider, manual and/or automatic processes, or
                devices to data-mine, data-crawl, scrape or index the Platform
                in any manner (excluding SEO-related scraping (e.g., Google
                indexing)).
              </li>
              <li className="mt-3">
                Hack or interfere with the Platform, its servers or any
                connected networks.
              </li>
              <li className="mt-3">
                Adapt, alter, license, sublicense or translate the Platform for
                your own personal or commercial use, except as otherwise
                expressly permitted in these Terms of Use.
              </li>
              <li className="mt-3">
                Remove or alter, visually or otherwise, any copyrights,
                trademarks or proprietary marks and rights owned by Company or
                any other User.
              </li>
              <li className="mt-3">
                Upload Content that provides materials or access to materials
                that exploit people under the age of eighteen (18) in an
                abusive, violent or sexual manner.
              </li>
              <li className="mt-3">
                Use the Platform to collect Registration Data by electronic or
                other means.
              </li>
              <li className="mt-3">
                Use the Platform in a manner that is false or misleading
                (directly or by omission or failure to update information) or
                for the purpose of accessing or otherwise obtaining the
                Company’s trade secret information for public disclosure or
                other purposes.
              </li>
              <li className="mt-3">
                Direct message any User who has asked you not to do so.
              </li>
              <li className="mt-3">
                Use, transfer, distribute or dispose of Platform IP or other
                Users’ Content in any manner except as expressly authorized in
                these Terms of Use.
              </li>
              <li className="mt-3">
                Cause or induce any third party to engage in the restricted
                activities above.
              </li>
            </ul>
            <p className="mt-3">
              The company will take appropriate investigative and legal action
              for any illegal or unauthorized use of the Platform. You
              acknowledge that violation of any of the above restrictions may
              subject you to third-party claims and none of the rights granted
              to you in these Terms of Use may be raised as a defense against
              any third-party claims arising from any such violation.
            </p>
          </div>
          <h3 className="welcome-front amigo ">
            {" "}
            7. PLATFORM ACCESS REQUIREMENTS
          </h3>
          <p className="mt-3">
            Access to and use of the Platform requires a compatible mobile
            device/web browser and internet connection. It also requires that we
            have access to your device identifier and location information.
            Although we are working to ensure that the Platform is compatible
            across various devices, we cannot guarantee that the Platform will
            work with all devices.
          </p>
          <p className="mt-3">
            It is your responsibility to ensure that your computer or mobile
            device complies with the requirements for accessibility. Your use of
            the Platform may vary in functionality, availability, and quality
            depending on the type of the device and the operating system that
            you use and Company accepts no responsibility for any lack of
            functionality that is due to your equipment (including your device,
            internet connection, operating system or settings and software).{" "}
          </p>{" "}
          <p className="mt-3">
            It is your responsibility to pay for all costs and expenses that you
            may incur while using the Platform (including, but not limited to,
            all telephone call or line charges or Internet data service access
            charges).
          </p>
          <p className="mt-3">
            Your access to the Platform may be interfered with by numerous
            factors outside of Company’s control including, but not limited to,
            telecommunications and/or wireless network service disruptions,
            computer or mobile device viruses and bugs, tampering, unauthorized
            intervention, fraud, technical failures, and server, equipment or
            software defects.
          </p>
          <p className="mt-3">
            The company may in the future update the Platform for repair or
            maintenance purposes or to change any tools, products, services,
            functionalities, or features thereof (an “Update”). The company
            shall not be liable to any User in any way as a result of any
            temporary or permanent suspension of the Platform or any tools,
            products, services, functionalities, or features thereof arising
            from or in connection with an Update. Furthermore, Company is under
            no obligation to undergo an Update of the Platform to the extent any
            Platform Elements, Content, and/or another tool, product, service,
            functionality, or feature thereof is out of date.
          </p>
        </div>
      </section>

      {/* <section className="footer-image">
        <div className="footer-image-inside">
          <img src={imageUrl("footer-sound.png")} alt="footer-sound.png" />
        </div>
      </section> */}
    </>
  );
}

export default Terms;
