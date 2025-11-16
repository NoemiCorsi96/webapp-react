import { Link } from "react-router-dom";
import { use, useEffect } from "react";
import axios from "axios";
//const API_URL = import.meta.env.VITE_API_URL;
const API_URL = "http://localhost:3000/api/movies";
export default function Homepage() {
    useEffect(() => {
        axios.get(API_URL)
            .then(res => {
                console.log(res);

            })
            .catch(err => {
                console.log(err.message);
            })
    }, [])



    return (
        <>
            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">Benvenuti nella nostra Film Reviws App</h1>
                    <p className="col-md-8 fs-4">
                        La nostra applicazione offre una grande selezioni di film di tutti i generi, qui puoi vederli tutti!
                    </p>

                </div>
            </div>

        </>
    )
}