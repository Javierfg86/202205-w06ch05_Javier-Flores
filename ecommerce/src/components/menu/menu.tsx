export function Menu({ options }: { options: aMenuItems }) {
    return (
        <nav>
            <ul>
                {options.map((item) => (
                    <li key={item.label}>
                        <Link to={item.path}>
                            <img
                                className="menu__icon"
                                src={`./img/icon` + item.label + `.png`}
                                alt=""
                                title={item.title}
                            />
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
