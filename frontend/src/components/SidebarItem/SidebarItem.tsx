import PropTypes from 'prop-types';
import { ReactElement } from 'react';

export default function SidebarItem({
  selectedItem,
  itemTitle
}: {
  selectedItem: boolean;
  itemTitle: string;
}): ReactElement {
  return (
    <div className="SidebarItem">
      {selectedItem ? <hr className="SidebarItem-hr" /> : ''}
      {itemTitle}
      {selectedItem ? <hr className="SidebarItem-hr" /> : ''}
    </div>
  );
}

SidebarItem.propTypes = {
  selectedItem: PropTypes.bool,
  itemTitle: PropTypes.string
};
