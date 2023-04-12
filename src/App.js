import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
        <Nav/>
        <Banner/>
        <Row 
        title="Trending Now" 
        fetchUrl ={requests.fetchTrending}
        isLargeRow 
        />
        <Row title="Top Rated" fetchUrl ={requests.fetchTopRated}/>
        <Row title="Action Movies" fetchUrl ={requests.fetchAction}/>
        <Row title="Comedy Movies" fetchUrl ={requests.fetchComedy}/>
        <Row title="Horror Movies" fetchUrl ={requests.fetchHorror}/>
        <Row title="Romance Movies" fetchUrl ={requests.fetchRomance}/>
        <Row title="Documentaries" fetchUrl ={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;

// 0e07d95d7fc17f1e729e71806f20c2c3

// https://api.themoviedb.org/3/movie/550?api_key=0e07d95d7fc17f1e729e71806f20c2c3
