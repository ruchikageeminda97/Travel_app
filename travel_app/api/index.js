import axios from "axios";

export const getPlacesData = async (type) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
            bl_latitude: '11.847676',
            tr_latitude: '12.838442',
            bl_longitude: '109.095887',
            tr_longitude: '109.149359',
            restaurant_tagcategory_standalone: '10591',
            limit: '30',
            currency: 'USD',
            lunit: 'km',
            lang: 'en_US'
        },
        headers: {
          "X-RapidAPI-Key": "5c5d739548msh5c6ed5237cdcac9p1e4e0ejsn9858cafacffe",
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      }
    );

    return data;
  } catch (error) {
    return null;
  }
};