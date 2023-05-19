import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { FeaturedBlogsStyles } from '../../styles/homePage/FeaturedBlogsStyles';
import { Title } from '../typography/Title';
import ParagraphText from '../typography/paragraphText';
import BlogGrid from '../blogs/BlogGrid';

function FeaturedBlogs() {
  const data = useStaticQuery(graphql`
    {
      allSanityFeatured(filter: { _id: { eq: "featuredItems" } }) {
        nodes {
          blogs {
            title
            id
            categories {
              title
              slug {
                current
              }
              coverImage {
                asset {
                  gatsbyImageData
                }
                alt
              }
              slug {
                current
              }
            }
          }
        }
      }
    }
  `);
  console.log(data);
  const featuredBlogs = data.allSanityFeatured.nodes[0].blogs;
  console.log(featuredBlogs);

  return (
    <div>
      <FeaturedBlogsStyles>
        <Title>FeaturedBlogs</Title>
        <ParagraphText>
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages
        </ParagraphText>
        <BlogGrid blogs={featuredBlogs} />
      </FeaturedBlogsStyles>
    </div>
  );
}

export default FeaturedBlogs;
