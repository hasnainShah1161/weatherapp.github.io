class Weather {
  async getWeather(city, state) {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${state}&APPID=f466d21f45c81f59b422c912019a33c2

        `);

    const weatherResponse = await response.json();

    return weatherResponse;
  }
}
