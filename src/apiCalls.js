const getStories = async (keyword) => {
  const options = {
    method: 'GET',
    headers: {
      'X-Api-Key': 'Pz5s/PcmYDE3PqSzPpfvNA==Ome2rxMJlOQOmk81',
    },
  };
  const response = await fetch(
    `https://api.api-ninjas.com/v1/historicalevents?text=${keyword}`,
    options
  );
  return await response.json();
};

export default getStories