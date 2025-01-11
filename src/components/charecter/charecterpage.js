
import React from "react";
import Movie from "./Movie";
import { movies } from "./moviesList";
import { useParams } from "react-router";
import { celebrities } from './celebritiesData';
import NameInfo from "./nameinfo";
import MediaSection from "./mediasection";
import './interface.css'
import Navbar from "../Homepage/facenavbar";
import Navbar2 from "./navbar";
import OverViewphtot from "./overview";
import './overviewcss.css';
import Bioo from "./Bioo";

const Charecterpage = () => {
  const { name } = useParams();

  const celebrity = celebrities.find((celeb) => celeb.name === name);
 
  if (!celebrity) {
    return <h2>Error: Celebrity not found</h2>;
  }

  return (
  
    <div>
     
     
      <div className="bradpro">
      <Navbar2/>
        <NameInfo name={celebrity.name} />
        <MediaSection
          imageSrc={celebrity.imageSrc}
          imageAlt={celebrity.imageAlt}
          videoPoster={celebrity.videoPoster}
          videoSrcMp4={celebrity.videoSrcMp4}
          videoSrcOgg={celebrity.videoSrcOgg}
          videoSrcWebm={celebrity.videoSrcWebm}
          videoDescription={celebrity.videoDescription}
        />
         
      </div>
      <div  className="page-info">
   <OverViewphtot 
       born={celebrity.born} 
      birthname={celebrity.birthname} 
    nickname={celebrity.nickname} 
    height={celebrity.height} 
    img1={celebrity.img1} 
    img2={celebrity.img2} 
    img3={celebrity.img3} 
    img4={celebrity.img4} 
    img5={celebrity.img5} 
    img6={celebrity.img6} 
    img7={celebrity.img7} 
    img8={celebrity.img8} 
    img9={celebrity.img9} 
    img10={celebrity.img10} 
  />

   


<Bioo
                
  birth={celebrity.birth}
  parents={celebrity.parents}
  school={celebrity.school}
  university={celebrity.university}
  address={celebrity.address}
  careerbefore={celebrity.careerbefore}
   firstcareer={celebrity.firstcareer}
 currentcareer={celebrity.currentcareer}
    marriages={celebrity.marriages}
   children={celebrity.children}
                />



  <section className="movies p-4">
        <h1 className="heading">Movies</h1>
        <div className="movies-container d-flex justify-content-center flex-wrap">
          {movies[name]?.map((movie, index) => (
            <Movie
              key={index}
              title={movie.title}
              rate={movie.rate}
              summary={movie.summary}
              picture={movie.picture}
              desc={movie.desc}
              link={movie.link}
            />
          ))}
        </div>
      </section>
      
      </div>
    </div>
  );
};

export default Charecterpage;



