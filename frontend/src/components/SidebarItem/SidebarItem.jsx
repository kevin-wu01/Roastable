

export default function SidebarItem({ selectedItem, itemTitle }) {
    console.log(selectedItem);
    console.log(itemTitle);

    return(
        <div className="SidebarItem">
            {selectedItem ? <hr className="SidebarItem-hr"/> : ''}
                {itemTitle}
            {selectedItem ? <hr className="SidebarItem-hr"/>: ''}
        </div>
    );
}