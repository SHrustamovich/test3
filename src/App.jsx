import { useMemo, useState } from "react";
import { useEffect } from "react";
import { productData } from "./data";

const App = () => {
    const [users, setUsers] = useState([]);
    const [price, setPrice] = useState([]);
    useEffect(() => {
        const fetchData = fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((result) => setUsers(result));
    }, []);

    const shortTitle = (str) => {
        return str.slice(0, 20) + "...";
    };

    const countBtn = (productMoney) => {
        setPrice([...price, productMoney]);
    };

    const allPrice = useMemo(() => {
        return price.reduce((acc, cur) => acc + cur, 0);
    }, [price]);
    return (
        <div>
            {productData.map((item) => (
                <div key={item.id}>
                    <div>
                        <button onClick={() => countBtn(item.price)}>
                            {shortTitle(item.title)}
                        </button>{" "}
                        === <span>{item.price}</span>
                    </div>
                </div>
            ))}
            Jami: <button>{allPrice}</button>
        </div>
    );
};

export default App;
