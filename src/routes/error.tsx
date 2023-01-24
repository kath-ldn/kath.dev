// Libs
import { useRouteError, Link } from "react-router-dom";
// Styles
import "./Error.css"

export default function ErrorPage() {
    const error: any = useRouteError();
    //   console.error(error);
    const linkStyles = {
        textDecoration: "none",
        color: "inherit"
    }

    return (
        <>
            <div id="error-page" className="route-container flex-column align-center justify-space-evenly">
                <div className="flex-column">
                    <h1 className="font-size-1 fit-content">Oops!</h1>
                    <h2 className="font-size-3 fit-content">Error: {error.statusText || error.message}.</h2>
                    <h2 className="font-size-3 fit-content">Click <Link style={linkStyles} to={`/`}><span className="link">here</span></Link> to go home.</h2>
                </div>
            </div>
        </>
    );
}