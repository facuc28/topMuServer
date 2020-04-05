class ServiceCaller {
  constructor(url) {
    this.url = url;
  }

  callService() {
    fetch(this.url)
      .then(res => res.json())
      .then(data => {
        console.log("response" + data);
        return data;
      })
      .catch(console.log);
  }
}

export default ServiceCaller;
