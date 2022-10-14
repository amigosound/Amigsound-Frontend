import { useState, Suspense } from "react";
import "./App.css";
import { useEagerConnect, useInactiveListener } from "./hooks/useEagerConnect";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header, Footer, ScrollToTop } from "./components";
import {
  Home,
  Signup,
  CreatePassword,
  SignIn,
  Trending,
  Artist,
  ArtistInside,
  New,
  PlayList,
  PlayListInside,
  MyPlayList,
  Genres,
  GenresInside1,
  GenresInside2,
  GenresInside3,
  Charts,
  ChartsInside,
  CompleteTrack,
  AboutUs,
  AdvertiseAmigo,
  Ambassoder,
  AmigoAfiliate,
  AmigoArtist,
  AmigoFans,
  AmigoLabel,
  AmigoReferral,
  Blog,
  BlogInside,
  ContactUs,
  Faq,
  FaqSoon,
  Partners,
  Investors,
  PrivacyPolicy,
  RoadMap,
  Team,
  Terms,
  TokenSale,
  WhitePaper,
  ArtistProfile,
  AdminProfileOverview1,
  AdminProfileAnalytics,
  AdminProfileOverview2,
} from "./screens";

function App() {
  const [errorMessage, setErrorMessage] = useState();
  useEagerConnect(setErrorMessage);
  useInactiveListener();

  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header /> */}
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/create-password" element={<CreatePassword />} />
          <Route path="/Sign-in" element={<SignIn />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/artist" element={<Artist />} />
          <Route path="/artist-inside" element={<ArtistInside />} />
          <Route path="/new-artist" element={<New />} />
          <Route path="/playlist" element={<PlayList />} />
          <Route path="/playlist-inside" element={<PlayListInside />} />
          <Route path="/myplaylist" element={<MyPlayList />} />
          <Route path="/genres" element={<Genres />} />
          <Route path="/genres-inside-1" element={<GenresInside1 />} />
          <Route path="/genres-inside-2" element={<GenresInside2 />} />
          <Route path="/genres-inside-3" element={<GenresInside3 />} />
          <Route path="/charts" element={<Charts />} />
          <Route path="/charts-inside" element={<ChartsInside />} />
          <Route path="/artist-profile" element={<ArtistProfile />} />
          <Route path="/complete-track" element={<CompleteTrack />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/advertise-amigo" element={<AdvertiseAmigo />} />
          <Route path="/ambassoder" element={<Ambassoder />} />
          <Route path="/amigo-afiliate" element={<AmigoAfiliate />} />
          <Route path="/amigo-artist" element={<AmigoArtist />} />
          <Route path="/amigo-fans" element={<AmigoFans />} />
          <Route path="/amigo-label" element={<AmigoLabel />} />
          <Route path="/amigo-referral" element={<AmigoReferral />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-inside" element={<BlogInside />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/faq-soon" element={<FaqSoon />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/roadmap" element={<RoadMap />} />
          <Route path="/team" element={<Team />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/token-sale" element={<TokenSale />} />
          <Route path="/white-paper" element={<WhitePaper />} />
          <Route path="/admin-profile" element={<AdminProfileOverview1 />} />
          <Route
            path="/admin-profile-analytics"
            element={<AdminProfileAnalytics />}
          />
          <Route path="/admin-profile-2" element={<AdminProfileOverview2 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
// export default function WrappedApp() {
//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <App />
//     </Suspense>
//   );
// }
