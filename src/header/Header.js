import './Header.css';


function Header() {
    const header_name = "Header";
    const menu_items = ["Home", "About", "Contact"];
    return (
        <div className="header">
            <div className="content-left">{header_name}</div>
            <div className="content-right">{menu_items.map(item => <a href="./" className="menu-item">{item}</a>)}</div>
        </div>
    );
}

export default Header;
