import FeaturedPosts from "../components/Home/FeaturedPosts/FeaturedPosts";
import Hero from "../components/Home/Hero/Hero";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Hero
        title="Azzey Blogs"
        desc="I blog about software development, web development and random games"
      />
      <FeaturedPosts />
    </Fragment>
  );
}
