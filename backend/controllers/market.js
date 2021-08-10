exports.getOverview = (req, res) => {
  const firstIndexValue = Math.random() * (17000 - 15500) + 15500;
  const firstPerChange = "0.13%";

  const secondIndexValue = Math.random() * (55000 - 48000) + 48000;
  const secondPerChange = "0.28%";

  const isMarketUp = true;

  return res.json([
    {
      index_name: "Nifty 50",
      index_value: firstIndexValue,
      change: firstPerChange,
      is_up_direction: isMarketUp,
    },
    {
      index_name: "Sensex",
      index_value: secondIndexValue,
      change: secondPerChange,
      is_up_direction: isMarketUp,
    },
  ]);
};
