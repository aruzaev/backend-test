import { Spinner } from "react-bootstrap";
import axios from "axios";

const unsplashClientId = "wLbZLTACAvzZiBT2ZRSVAyX5yTOO-dc-kg15wcG1AQM";
let image = null;
let loading = true;

//Returns single image
const handleSearch = async (searchTerm, resolution, setImages) => {
  console.log(searchTerm);
  if (searchTerm.trim() !== "") {
    const url = `https://api.unsplash.com/search/photos?query=${searchTerm}&orientation=${resolution}&client_id=${unsplashClientId}`;
    console.log(url);
    try {
      const response = await axios.get(url);
      const randomIndex = Math.floor(
        Math.random() * response.data.results.length
      );
      image = [response.data.results[randomIndex]]; //gets a random image in the array
      console.log(response);
      console.log("All good :)");
      loading = false;

      // Get the statistics of the image
      const statsUrl = `https://api.unsplash.com/photos/${image[0].id}/statistics?client_id=${unsplashClientId}`;
      const statsResponse = await axios.get(statsUrl);
      image[0].statistics = statsResponse.data; // Add the statistics to the image object
    } catch (error) {
      console.error(`:( ${error}`);
      loading = false;
    }
  } else {
    console.log("Search term is blank, not making API call.");
    loading = false;
    image = [];
  }

  return (
    <div>
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading....</span>
        </Spinner>
      ) : (
        setImages(image)
      )}
    </div>
  );
};

export default handleSearch;
