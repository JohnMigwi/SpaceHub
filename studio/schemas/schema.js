/* eslint-disable */
import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
/* eslint-enable */

// import custom document
import blog from './documents/blog';
import author from './documents/author';
import category from './documents/category';

// import custom objects
import customImage from './objectsadd/customimage';
import richText from './objectsadd/richText';
import customCode from './objectsadd/customCode';
import normalText from './objectsadd/normalText';
import featured from './documents/featured';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    // documents
    blog,
    author,
    category,
    featured,

    // objects
    customImage,
    richText,
    customCode,
    normalText,
  ]),
});
