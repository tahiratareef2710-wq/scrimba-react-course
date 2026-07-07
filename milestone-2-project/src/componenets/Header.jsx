import hehe from "../hehe.png";

export default function Header() {
    return (
        <header>
            <img src={hehe} alt="logo" />
            <h1>My Travel Journal</h1>
        </header>
    );
}