/* eslint-disable */
import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
/* eslint-enable */

// import custom schema
import blog from './documents/blog';
import author from './documents/author';

// import custom objects
import customImage from './objectsadd/customimage';
import bodyText from './objectsadd/bodyText';
import customCode from './objectsadd/customCode';
import excerptText from './objectsadd/excerptText';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    blog,
    author,
    customImage,
    bodyText,
    customCode,
    excerptText,
  ]),
});
