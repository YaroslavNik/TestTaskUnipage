import axios from 'axios'

const apiURL ='https://fish-text.ru';

const instance = axios.create({
    baseUrl: 'https://fish-text.ru',
    headers: {
      'Content-Type': 'application/json'
    },
});

export const appAPI = {
    getRandomText(sentenceCount) {
        return instance.get(apiURL + `/get?number=${sentenceCount}`)
    }
}
  