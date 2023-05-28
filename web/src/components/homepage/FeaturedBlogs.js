import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { FeaturedBlogsStyles } from '../../styles/homePage/FeaturedBlogsStyles';
import ParagraphText from '../typography/ParagraphText';
import { SectionTitle } from '../typography/Title';
import BlogGrid from '../blog/BlogGrid';

function FeaturedBlogs() {
  const data = useStaticQuery(graphql`
    {
      allSanityFeatured(filter: { _id: { eq: "featuredItems" } }) {
        nodes {
          blogs {
            id
            title
            categories {
              title
              slug {
                current
              }
            }
            coverImage {
              alt
              asset {
                gatsbyImageData
              }
            }
            slug {
              current
            }
          }
        }
      }
    }
  `);

  console.log('this is the wrong query');
  console.log(data);
  console.log('this is the wrong query');
  const featuredBlogs = data.allSanityFeatured.nodes[0].blogs;
  return (
    <FeaturedBlogsStyles>
      <SectionTitle>FeaturedBlogs</SectionTitle>
      <ParagraphText className="featuredBlogs__text">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable
      </ParagraphText>
      <BlogGrid blogs={featuredBlogs} />
    </FeaturedBlogsStyles>
  );
}

export default FeaturedBlogs;
