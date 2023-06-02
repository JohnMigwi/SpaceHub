import React from 'react';
import { CategoryItemStyles } from '../../styles/category/CategoryItemStyles';
import Button from '../buttons/Button';
import { Title } from '../typography/Title';
import MyPortableText from '../MyPortableText';
import { buttonType } from '../../constants/buttonTypes';

function CategoryItem({ title, description, slug }) {
  return (
    <CategoryItemStyles>
      <Title className="title">{title}</Title>
      <div className="text">
        <MyPortableText value={description} />
      </div>
      <Button to={`/categories/${slug.current}`} variant={buttonType.outline}>
        Explore Category
      </Button>
    </CategoryItemStyles>
  );
}

export default CategoryItem;
