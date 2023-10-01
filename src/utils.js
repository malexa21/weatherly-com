export const processRawData = (rawData) => {
  const { time, temperature_2m, relativehumidity_2m } = rawData;

  return time.map((time, index) => ({
    name: time,
    temp: temperature_2m?.[index] ?? 0,
    hum: relativehumidity_2m?.[index] ?? 0,
  }));
};
