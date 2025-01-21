import axios from "axios";
import { useState, useEffect } from "react";

const Display = () => {
    const [mydata, setMydata] = useState([]);

    const loadData = async () => {
        let api = 'http://localhost:8000/multerexample/displaydata';

        try {
            const response = await axios.get(api);
            setMydata(response.data);
        } catch (error) {
            console.error("Error loading data:", error);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <>
            <h1>Display Student Detail</h1>
            <table border="1" width="600">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Roll No</th>
                        <th>Name</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {mydata.map((key) => (
                        <tr key={key.rollno}>
                            <td>
                                <img
                                    src={`http://localhost:8000/uploads/${key.imgname}`}
                                    alt={key.name}
                                    width="100"
                                    height="100"
                                />
                            </td>
                            <td>{key.rollno}</td>
                            <td>{key.name}</td>
                            <td>{key.city}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default Display;
