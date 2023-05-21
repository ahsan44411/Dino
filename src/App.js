import "./App.css";
import Home from "./page/Home";
import FOF from "./page/FOF";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {ThemeProvider} from "@mui/material/styles";
import theme from "./Theme";
import Explorer from "./page/Explorer";

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <Router>
                    <Routes>
                        <Route path="/" exact={true} element={<Home/>}/>
                        <Route path="/explorer/" element={<Explorer/>}/>
                        {/*<Route path="*" exact={true} element={<FOF/>}/>*/}
                    </Routes>
                </Router>
            </ThemeProvider>
        </div>
        // <Grid container >
        //   <Grid item md={6} >
        //     <Slider />
        //   </Grid>
        // </Grid>
    );
}

export default App;
