import Header from "./componenets/Header";
import Entry from "./componenets/Entry";
import "./App.css";
import data from "./componenets/data";

export default function App() {
    const entries = data.map(item => {
        return (
            <Entry
                key={item.id}
                {...item}
            />
        );
    });

    return (
        <>
            <Header />
            <main className="container">
                {entries}
            </main>
        </>
    );
}