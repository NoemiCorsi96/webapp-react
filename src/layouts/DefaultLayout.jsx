import { useContext } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GlobalContext from "../contexts/LoaderContextProvider";
import Loader from "../components/loader";
export default function DefaultLayout() {
    //questo può essere o true o false 
    const { loading } = useContext(GlobalContext);
    return (
        <>
            <Header />
            <main>
                {loading && <Loader />}
                <Outlet />

            </main>
            <Footer />

        </>
    )
}