import React from "react";
import imageUrl from "../../utils/ImageUrl";
import { Sidebar, Header } from "../../components";
import { Link } from "react-router-dom";
function PrivacyPolicy() {
  return (
    <>
      {/* <section id="banner"> */}
      {/* <div className="bg-image">
          <img src={imageUrl("home-bg-final.png")} alt="home-bg-final.png" />
        </div> */}
      {/* <Header />
        <Sidebar /> */}
      {/* <div className="main-heading">
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
        </div> */}
      {/* </section> */}
      <section className="text-home text-for-footer ">
        <Header />

        <div className="container">
          <div className="welcome-desc">
            {/* <h2 className="welcome-back footer-pages-heading">
              PRIVACY POLICY
            </h2> */}
            <h3 className="welcome-front text-center">PRIVACY POLICY</h3>
            <h3 className="welcome-front amigo">AMIGO SOUND!</h3>
            <p className="mt-3">
              Welcome to Amigo Sound respects the privacy of our users. This
              Privacy Policy describes how we collect, use, and share certain
              information about you (“you,” “your,” “user”) in connection with
              our websites located at https://amigosound.com/.
            </p>
            <p className="mt-3">
              It also explains your rights and choices with respect to such
              information and the steps you can take to protect your privacy.
              Please read this policy carefully. By visiting or using the
              Service, clicking “I agree” or any other button indicating your
              acceptance of this Privacy Policy, or otherwise providing
              information to AmigoSound, you are consenting to the collection,
              use, and sharing of your information as described in this Privacy
              Policy.
            </p>
          </div>
          <div className="mt-5">
            <h3 className="welcome-front amigo">AMIGO SOUND USERS</h3>
            <p className="mt-3">
              AmigoSound Service is available to different types of users,
              including Listeners, Creators, and Users who visit the AmigoSound
              website and Service (each individual or collectively a “user” or
              “you”). The information that the Service collects from and shares
              about you may depend on your user type, and you may interact with
              the Services in any or all of these user types.
            </p>
            <ul className="privacy-list mt-3">
              <li className="mt-3">
                {" "}
                A Listener is an individual who has registered for the Service
                to discover and listen to music by creators.
              </li>
              <li className="mt-3">
                A creator is an individual who has registered for the Service to
                share his or her music with other Listeners and Creators and who
                may also use the service as a Listener to discover music and
                Creators.
              </li>
              <li className="mt-3">
                A User is an individual that visits or uses the website and
                includes Listeners and Creators.
              </li>
            </ul>
          </div>
          <div className="mt-3">
            <h3 className="welcome-front amigo">INFORMATION THAT WE COLLECT</h3>
            <p className="mt-3">
              We and our third-party vendors collect a variety of information
              through the Service. We collect information from you directly when
              you provide it to us through the Service and when you engage in
              certain actions on the Service. We may also automatically collect
              certain information about you and your computer, smartphone, or
              another device when you use, access, or interact with our Service.
              This information includes, but is not limited to:
            </p>
            <ul className="privacy-list mt-3">
              <li>
                {" "}
                Account and profile information. In order to create an account
                for you on the AmigoSound streaming service as a Listener or
                Creator, we collect your name, email address, password, and user
                handle.
              </li>
              <li className="mt-3">
                Social media information. Listeners and Creators may choose to
                log in to the Service using a third-party social media service,
                such as Twitter or Instagram. If you do so, we collect
                information about you from the social media provider, including,
                for example, your name, username, email address, and available
                public profile information. We will ask for your consent prior
                to logging in to the Service using your social media account or
                connecting your social media account to the Service.
              </li>
              <li className="mt-3">
                Information about your transactions and interactions on the
                AmigoSound streaming service. We collect information about you
                as you interact and transact with our streaming service. For
                example, we collect information about the following types of
                actions taken by Listeners and Creators: uploading tracks;
                saving or removing a track from your library; creating,
                publishing, or deleting playlists; playlist names; playlist
                content such as the tracks and the order of the tracks; albums;
                actions to repost tracks, albums, or playlists; and following
                and unfollowing other Users on AmigoSound. For Creators who
                upload works to the Service, we collect the tracks uploaded, the
                title of the track and the Creator’s user ID, the track length,
                cover art for the track, information about the date of creation
                and release of the track, and any uploaded images.
              </li>
              <li className="mt-3">
                Comments on albums, playlists, or tracks. We may offer you the
                ability to publicly comment on Listener and Creator albums,
                playlists, and tracks. When you leave comments, they will be
                publicly available and will be associated with your name and
                user handle.
              </li>
              <li className="mt-3">
                Information you provide to us directly when you contact us. We
                collect User information when Users communicate with us through
                the Service, such as through any “Contact” or “Help” feature on
                the Service.
              </li>
              <li className="mt-3">
                Information collected automatically. When you use our Service,
                we or our third-party service providers may automatically
                receive and record certain information.
              </li>
            </ul>
          </div>
          <div className="mt-3">
            <h3 className="welcome-front amigo">
              CHANGES TO THIS PRIVACY POLICY
            </h3>
            <p className="mt-3">
              We may revise this Privacy Policy periodically in the future. If
              we make any material changes, we will post the revised Privacy
              Policy on our website with an effective date indicating when the
              revised Privacy Policy will take effect. Your continued use of our
              Service will serve as an acceptance of any changes to the Policy.
            </p>
          </div>
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

export default PrivacyPolicy;
