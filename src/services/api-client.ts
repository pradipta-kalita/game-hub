import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "9dff3223278d4ebc9443b9352440d090",
  },
});
