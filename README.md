### In this Project I made a Dating App using NodeJS + Express + handlebarsJS

### See App live @ heruko

### Instructions

- Your survey should have 10 questions of your choosing. Each answer should be on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.

- Your `server.js` file should require the basic npm packages we've used in class: `express` and `path`.

* Your `apiRoutes.js` file should contain two routes:

  - A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
  - A POST routes `/survey`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

* I did not use a DB instead i stored User localy

* JavaScript function to get lowest diference in array values

```javascript
      function findFish(fish, ocean) {
        let results = [];
        for (let j = 0; j < ocean.length; j++) {
          let count = 0;
          let fish2 = ocean[j].score;
          for (let i = 0; i < fish2.length; i++) {
            let tmp = fish[i] - fish2[i];
            count += Math.abs(tmp);
            console.log("tmp :" + tmp + " score " + count);
          }
          results.push(count);
        }
        console.log(results);
        var a = Math.min(...results);
        return results.indexOf(a);
      }
```
