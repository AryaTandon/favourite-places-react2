import './App.css';
import Header from "./components/Header";
import Place from "./components/Place";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <body className="App-layout">
       <Header 
       />
       <Place
        name="Golden Temple"
        country="Amritsar, India"
        image="https://www.saga.co.uk/contentlibrary/saga/publishing/verticals/travel/destinations/asia/golden-temple-amritsar.jpg"
        mapLocation="https://www.google.com/maps/@31.6204404,74.8759976,3a,75y,122h,90t/data=!3m7!1e1!3m5!1s-W8ILPDjDpkAAAQWtFSWXg!2e0!3e2!7i13312!8i6656"
        explanation="Stunning, serene, awe-inspiring. A must-visit."
       />
       <Place
        name="Guangzhou"
        country="China"
        image="https://www.tripsavvy.com/thmb/3IKC7SCaRhdLo14KW9BfqTi_zIE=/1887x1415/smart/filters:no_upscale()/night-view-of-guangzhou-956095614-02914cb9e8324c49be6421560ba5ffed.jpg"
        mapLocation="https://www.google.com/maps/d/viewer?hl=en&ie=utf8&oe=utf8&msa=0&mid=1RRc62At8dpaLxQlSPklUGLzHpQ4&ll=23.321361746215175%2C112.79048550000002&z=9"
        explanation="A major port city in China with wonderful local culture."
       />
       <Place
        name="Tobermory"
        country="Scotland"
        image="https://mull.co/img/home-slide/tobermory-self-catering-6.jpg"
        mapLocation="https://www.google.com/maps/d/viewer?msa=0&hl=en&ie=UTF8&t=h&ll=56.65094200000002%2C-6.181182999999999&spn=0.264233%2C0.583649&z=10&iwloc=0004ede8acbd5d8f8196e&source=embed&mid=1DJE2JiVQfNfTQYd5OlWc3dhnBvk"
        explanation="A beautiful village on the rural Isle of Mull. Fun fact: where the children's programme 'Balamory' was filmed!"
       />
       <Place
        name="Lisbon"
        country="Portugal"
        image="https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/04/29/12/istock-1137863101.jpg"
        mapLocation="https://www.google.com/maps/d/viewer?hl=en&ie=UTF8&msa=0&ll=38.74016000000003%2C-9.113846000000002&spn=0.152907%2C0.417137&z=12&mid=1b7JWTnTdoofxj7pNtyHBVi92oF8"
        explanation="The coastal capital city of Portugal. Picturesque, hilly, packed with great culture & food."
       />
       <Footer
       />
      </body>
    </div>
  );
}

export default App;
