class SplashScreen {
  render() {
    //create a div
    const splashElement = document.createElement("div");
    //add it to the index.html
    document.body.appendChild(splashElement);

    splashElement.className = "splash-screen";
  }
  destroy() {}
}
