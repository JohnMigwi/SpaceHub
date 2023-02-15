import { MdStar } from 'react-icons/md';
import S from '@sanity/desk-tool/structure-builder';

function Sidebar() {
  return S.list()
    .title('Space-Hub')
    .items([
      S.listItem()
        .title('Featured')
        .id('featuredItems')
        .icon(MdStar)
        .child(S.editor().schemaType('featured').documentId('featuredItems')),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() !== 'featured'
      ),
    ]);
}

export default Sidebar;
