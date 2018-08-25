/* globals ga twttr */
/* eslint-disable no-extend-native */

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('Hi am a Promise')
    reject(Error('Err onboard'));
  }, 1000);
});

p.then((data) => {
  console.log(data);
}).catch((err) => {
  console.log(err);
});

//= ===================== Chaining Promises =========================== //

const posts = [
  { title: 'I love JavaScript', author: 'Wes Bos', id: 1 },
  { title: 'CSS!', author: 'Chris Coyier', id: 2 },
  { title: 'Dev tools tricks', author: 'Addy Osmani', id: 3 },
];
const authors = [
  { name: 'Wes Bos', twitter: '@wesbos', bio: 'Canadian Developer' },
  {
    name: 'Chris Coyier',
    twitter: '@chriscoyier',
    bio: 'CSS Tricks and CodePen',
  },
  { name: 'Addy Osmani', twitter: '@addyosmani', bio: 'Googler' },
];

function getPostId(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const post = posts.find(postItem => postItem.id === id);
      if (post) {
        resolve(post);
      } else {
        reject(Error('Post not found'));
      }
    }, 200);
  });
}

function hydrateAuthor(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const authorDetails = authors.find(person => person.name === post.author);
      if (authorDetails) {
        const postPassed = post;
        postPassed.author = authorDetails;
        resolve(postPassed);
      } else {
        reject(Error('author not found'));
      }
    }, 200);
  });
}

getPostId(2)
  .then((post) => {
    console.log(post);
    return hydrateAuthor(post);
  })
  .then((post) => {
    console.log(post);
  })
  .catch((err) => {
    console.log(err);
  });

//= ===================== Multiple Promises =========================== //

const postsPromise = fetch('https://wesbos.com/wp-json/wp/v2/posts');
const streetCarsPromise = fetch(
  'http://data.ratp.fr/api/datasets/1.0/search/?q=paris',
);

Promise.all([postsPromise, streetCarsPromise])
  .then(responses => Promise.all(responses.map(res => res.json())))
  .then((responses) => {
    console.log(responses);
  });

ga.track();
twttr.track();

/* eslint-disable */

if (!Array.prototype.includes) {
  Object.defineProperty(Array.prototype, 'includes', {
    value(searchElement, fromIndex) {
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      // 1. Let O be ? ToObject(this value).
      const o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      const len = o.length >>> 0;

      // 3. If len is 0, return false.
      if (len === 0) {
        return false;
      }

      // 4. Let n be ? ToInteger(fromIndex).
      //    (If fromIndex is undefined, this step produces the value 0.)
      const n = fromIndex | 0;

      // 5. If n ≥ 0, then
      //  a. Let k be n.
      // 6. Else n < 0,
      //  a. Let k be len + n.
      //  b. If k < 0, let k be 0.
      let k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

      function sameValueZero(x, y) {
        return x === y || (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y));
      }

      // 7. Repeat, while k < len
      while (k < len) {
        // a. Let elementK be the result of ? Get(O, ! ToString(k)).
        // b. If SameValueZero(searchElement, elementK) is true, return true.
        if (sameValueZero(o[k], searchElement)) {
          return true;
        }
        // c. Increase k by 1.
        k++;
      }

      // 8. Return false
      return false;
    },
  });
}
/* eslint-enable */
