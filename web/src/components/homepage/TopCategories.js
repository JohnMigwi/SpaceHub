import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { TopCategoriesStyles } from '../../styles/homePage/TopCategoriesStyles';
import ParagraphText from '../typography/ParagraphText';
import { SectionTitle } from '../typography/Title';
import CategoryGrid from '../category/CategoryGrid';

function TopCategories() {
  const data2 = useStaticQuery(graphql`
    {
      allSanityFeatured(filter: { _id: { eq: "featuredItems" } }) {
        nodes {
          categories {
            id
            title
            slug {
              current
            }
            _rawDescription
          }
        }
      }
    }
  `);

  const category = data2.allSanityFeatured.nodes[0].categories;
  return (
    <TopCategoriesStyles>
      <SectionTitle>Top Categories</SectionTitle>
      <ParagraphText className="info">All about Top categories</ParagraphText>
      <CategoryGrid category={category} />
    </TopCategoriesStyles>
  );
}

export default TopCategories;
