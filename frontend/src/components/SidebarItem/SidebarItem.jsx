import PropTypes from 'prop-types';

export default function SidebarItem({ selectedItem, itemTitle }) {
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
