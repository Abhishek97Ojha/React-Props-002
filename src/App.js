import "./App.css";
import Cards from "./components/Cards";
function App() {
  return (
    <div className="App">
      <Cards
        background="https://images.indianexpress.com/2023/01/Pathaan-4.jpg"
        poster="https://m.media-amazon.com/images/M/MV5BZGI3NzQ5NTctZWQ4Ni00ZGJkLTg5N2UtYTBjNzcyN2EyOTM0XkEyXkFqcGdeQXVyOTI3MzI4MzA@._V1_.jpg"
        name="Pathaan"
        year="2023"
        director="Siddharth Anand"
        length="146 min"
        genre="Action, Thriller"
        story="An Indian spy battles against the leader of a gang of mercenaries who have a heinous plot for his homeland."
      />
      <Cards
        background="https://occ-0-1348-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABWP4uW4ukd_scCAE52-6920Q5coSiCnskZ82RyzQUHMHDG8s2TKtPF-uJuPXp2f7uaicOYOJz0cfvmVYFUks-p9lZxMU5YzLXy-lnw84famw5B3JyHmWRoIW.jpg?r=fd1"
        poster="https://upload.wikimedia.org/wikipedia/en/5/5c/Don%27t_Look_Up_2021_film.jpg"
        name="Don't Look Up"
        year="2021"
        director="Adam McKay"
        length="145 min"
        genre="Comedy, Disaster"
        story="Two low-level astronomers must go on a giant media tour to warn mankind of an approaching comet that will destroy planet Earth."
      />
      <Cards
        background="https://fsmedia.imgix.net/cd/c9/5e/ba/4817/4d9a/93f0/c776ec32ecbc/lara-crofts-neck-looks-unnatural-in-the-new-poster-for-tomb-raider.png"
        poster="https://mr.comingsoon.it/imgdb/locandine/235x336/53750.jpg"
        name="Tomb Raider"
        year="2018"
        director="Roar Uthaug"
        length="125 min"
        genre="Action, Fantasy"
        story="Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared."
      />
      <Cards
        background="https://i0.wp.com/thinkmonsters.com/speakinghuman/media/wp-content/uploads/John-Wick-Posters-Rule.jpg?fit=1280%2C640&ssl=1"
        poster="https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_.jpg"
        name="John Wick"
        year="2014"
        director="Chad Stahelski"
        length="101 min"
        genre="Action, Thriller"
        story="John Wick, a retired hitman, is forced to return to his old ways after a group of Russian gangsters steal his car and kill a puppy gifted to him by his late wife."
      />
      <Cards
        background="https://occ-0-2433-448.1.nflxso.net/art/cd5c9/3e192edf2027c536e25bb5d3b6ac93ced77cd5c9.jpg"
        poster="https://upload.wikimedia.org/wikipedia/en/a/a7/BrightPoster.jpeg"
        name="Bright"
        year="2017"
        director="David Ayer"
        length="117 min"
        genre="Action, Crime, Fantasy"
        story="Set in a world where fantasy creatures live side by side with humans. A human cop is forced to work with an Orc to find a weapon everyone is prepared to kill for."
      />
    </div>
  );
}

export default App;
