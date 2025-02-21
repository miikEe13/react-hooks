import { useContext } from "react"
import { UserContext } from "./context/UserContext";
import { ThemeContext } from './context/ThemeContext';

export const HomePage = () => {

  const { user } = useContext( UserContext );
  const { theme } = useContext(ThemeContext);

    return (
      <>
          <h1>HomePage <small>{ user?.name }</small> </h1>
          <hr />
          <h2>the current theme is: <b>{ theme }</b></h2>
          <pre>
            { JSON.stringify( user, null, 3 ) }
          </pre>
      </>
    )
  }