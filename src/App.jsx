import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import "preline/preline";
import Footer from './components/Footer';


function App() {

  // const location = useLocation();

  // useEffect(() => {
  //   window.HSStaticMethods.autoInit();
  // }, [location.pathname]);

  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
