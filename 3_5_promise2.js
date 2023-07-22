const timerPromise = (timerInterval = 2000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, timerInterval);
  });
};

const locationPromise = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (data) => {
        resolve();
      },
      (error) => {
        reject();
      },
      { enableHighAccuracy: true }
    );
  });
};

const apiPromise = () => {
  return new Promise((resolve, reject) => {
    const xmlHttpRequest = new XMLHttpRequest();

    xmlHttpRequest.open("GET", "https://jsonplaceholder.typicode.com/todos/1");

    xmlHttpRequest.onload = () => {
      resolve();
    };

    xmlHttpRequest.onerror = () => {
      reject();
    };

    xmlHttpRequest.onabort = () => {
      reject();
    };

    xmlHttpRequest.send();
  });
};
