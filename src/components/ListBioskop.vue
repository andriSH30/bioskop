<template>
  <div>
    <div class="judul">
      <a>Bioskop</a>
    </div>
    <div class="movie_card" id="bright">
      <div class="info_section">
        <div class="movie_header">
          <img
            class="locandina"
            src="https://movieplayer.net-cdn.it/t/images/2017/12/20/bright_jpg_191x283_crop_q85.jpg"
          />
          <h1>Bright</h1>
          <h4>2017, David Ayer</h4>
          <span class="minutes">117 min</span>
          <p class="type">Action, Crime, Fantasy</p>
        </div>
        <div class="movie_desc">
          <p class="text">
            Set in a world where fantasy creatures live side by side with
            humans. A human cop is forced to work with an Orc to find a weapon
            everyone is prepared to kill for.
          </p>
        </div>
        <div class="movie_social"></div>
      </div>
      <div class="blur_back bright_back"></div>
    </div>

    <div class="movie_card" id="tomb">
      <div class="info_section">
        <div class="movie_header">
          <img
            class="locandina"
            src="https://cdn0-production-images-kly.akamaized.net/5xwtf0TfGw8ittH947N_VbMmfRY=/0x0:405x540/640x853/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2984776/original/008944300_1575347256-Habibie_Ainun_3.jpg"
          />
          <h1>Habibie & Ainun</h1>
          <h4>2019, Manoj Punjabi</h4>
          <span class="minutes">121 menit</span>
          <p class="type">Biography, Drama, Romance</p>
        </div>
        <div class="movie_desc">
          <p class="text">
            Habibie & Ainun 3 adalah film biografi percintaan Indonesia tahun
            2019 yang disutradarai Hanung Bramantyo dan ditulis Ifan Ismail.
            Film ini adalah kelanjutan dari Rudy Habibie (2016), prekuel dari
            Habibie & Ainun, sekaligus film ketiga dari seri Habibie & Ainun.
          </p>
        </div>
        <div class="movie_social">
          <ul>
            <li>
              <router-link to="/habibie" class="btn btn-link"
                >Detail</router-link
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="blur_back tomb_back"></div>
    </div>

    <div class="movie_card" id="ave">
      <div class="info_section">
        <div class="movie_header">
          <img
            class="locandina"
            src="https://mr.comingsoon.it/imgdb/locandine/235x336/53715.jpg"
          />
          <h1>Black Panther</h1>
          <h4>2018, Ryan Coogler</h4>
          <span class="minutes">134 min</span>
          <p class="type">Action, Adventure, Sci-Fi</p>
        </div>
        <div class="movie_desc">
          <p class="text">
            T'Challa, the King of Wakanda, rises to the throne in the isolated,
            technologically advanced African nation, but his claim is challenged
            by a vengeful outsider who was a childhood victim of T'Challa's
            father's mistake.
          </p>
        </div>
        <div class="movie_social">
          <ul>
            <li><i class="material-icons">share</i></li>
            <li><i class="material-icons"></i></li>
            <li><i class="material-icons">chat_bubble</i></li>
          </ul>
        </div>
      </div>
      <div class="blur_back ave_back"></div>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "Bioskop"
};
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat:300,400,700,800");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.judul {
  background: black;
  margin: 50px auto;
  height: 100px;
  font-size: 85px;
}
* {
  box-sizing: border-box;
  margin: 50;
}

html,
body {
  margin: 0;
  background: black;
  font-family: "Montserrat", helvetica, arial, sans-serif;
  font-size: 14px;
  font-weight: 00;
}

.link {
  display: block;
  text-align: center;
  color: #777;
  text-decoration: none;
  padding: 10px;
}

.movie_card {
  position: relative;
  display: block;
  width: 800px;
  height: 350px;
  margin: 80px auto;
  overflow: hidden;
  border-radius: 10px;
  transition: all 0.4s;
  box-shadow: 0px 0px 120px -25px rgba(0, 0, 0, 0.5);
}
:hover {
  transform: scale(1.02);
  box-shadow: 0px 0px 80px -25px rgba(0, 0, 0, 0.5);
  transition: all 0.4s;
}
.info_section {
  position: relative;
  width: 100%;
  height: 100%;
  background-blend-mode: multiply;
  z-index: 2;
  border-radius: 10px;
}
.movie_header {
  position: relative;
  padding: 25px;
  height: 40%;
}
h1 {
  color: black;
  font-weight: 400;
}
h4 {
  color: #555;
  font-weight: 400;
}
.minutes {
  display: inline-block;
  margin-top: 15px;
  color: #555;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.05);
}
.type {
  display: inline-block;
  color: #959595;
  margin-left: 10px;
}
.locandina {
  position: relative;
  float: left;
  margin-right: 20px;
  height: 120px;
  box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.5);
}

.movie_desc {
  padding: 25px;
  height: 50%;
}
.text {
  color: #545454;
}

.movie_social {
  height: 10%;
  padding-left: 15px;
  padding-bottom: 20px;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  display: inline-block;
  color: rgba(0, 0, 0, 0.3);
  transition: color 0.3s;
  transition-delay: 0.15s;
  margin: 0 10px;
}
:hover {
  transition: color 0.3s;
  color: rgba(0, 0, 0, 0.7);
}
i {
  font-size: 19px;
  cursor: pointer;
}
.blur_back {
  position: absolute;
  top: 0;
  z-index: 1;
  height: 100%;
  right: 0;
  background-size: cover;
  border-radius: 11px;
}

@media screen and (min-width: 768px) {
  .movie_header {
    width: 65%;
  }

  .movie_desc {
    width: 50%;
  }

  .info_section {
    background: linear-gradient(to right, #e5e6e6 50%, transparent 100%);
  }

  .blur_back {
    width: 80%;
    background-position: -100% 10% !important;
  }
}

@media screen and (max-width: 768px) {
  .movie_card {
    width: 95%;
    margin: 70px auto;
    min-height: 350px;
    height: auto;
  }

  .blur_back {
    width: 100%;
    background-position: 50% 50% !important;
  }

  .movie_header {
    width: 100%;
    margin-top: 85px;
  }

  .movie_desc {
    width: 100%;
  }

  .info_section {
    background: linear-gradient(to top, #e5e6e6 50%, transparent 100%);
    display: inline-grid;
  }
}

.bright_back {
  background: url("https://occ-0-2433-448.1.nflxso.net/art/cd5c9/3e192edf2027c536e25bb5d3b6ac93ced77cd5c9.jpg");
}

.tomb_back {
  background: url("https://m.media-amazon.com/images/M/MV5BZWFhNGJmMzUtOTg0MC00YzEzLWI2MDEtZmU2ZGEwOGU2MWRiXkEyXkFqcGdeQXVyMjU0ODQ5NTA@._V1_.jpg");
}

.ave_back {
  background: url("https://www.gannett-cdn.com/-mm-/c03fd140debe8ad4c05cf81a5cad7ad61a12ce52/c=0-1580-2985-3266&r=x803&c=1600x800/local/-/media/2017/06/09/USATODAY/USATODAY/636326272873599176-Black-Panther-Teaser.jpg");
}
</style>
