import clubs from "./clubs.js";

class DataSource {
  contructor(onSuccess, onFailed) {
    this.onSuccess = onSuccess;
    this.onFailed = onFailed;
  }

  static searchClub(keyword) {
    return new Promise((resolve, reject) => {
      const filteredClubs = clubs.filter((club) => {
        return club.name.toUpperCase().includes(keyword.toUpperCase());
      });

      if (filteredClubs.length) {
        resolve(filteredClubs);
      } else {
        reject(`${keyword} ' is not found`);
      }
    });
  }
}

export default DataSource;
