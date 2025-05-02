const { getTweets, addTweet } = require("../repository/tweets");
const Tweet = require("../models/tweets");
const Hashtag = require("../models/hashtags");
const mongoose = require("mongoose");

const searchTweets = async (req, res, next) => {
  try {
    const tweets = await getTweets();

    res.json(tweets);
  } catch (exception) {
    console.log(exception);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const submitTweet = async (req, res, next) => {
  try {
    console.log("adding tweet");
    console.log(req.body);
    const submittedTweet = await addTweet(req.body);
    res.json(submittedTweet);
    return submittedTweet;
  } catch (exception) {
    console.log(exception);
    res.status(500).json({ error: "internal Servor Error with db" });
  }
};

const generateMock = async (req, res, next) => {
  try {
    // Script pour générer des tweets pour votre base de données MongoDB

    // Récupérer les IDs des utilisateurs
    const userIds = [
      new mongoose.Types.ObjectId("6814c717ee4f3220114c488e"), // Alexandre
      new mongoose.Types.ObjectId("6814c72bee4f3220114c4891"), // Henri
      new mongoose.Types.ObjectId("6814c739ee4f3220114c4894"), // Etienne
    ];

    // Créer des hashtags
    const hashtagsData = [
      { name: "tech" },
      { name: "coding" },
      { name: "javascript" },
      { name: "mongodb" },
      { name: "webdev" },
      { name: "react" },
      { name: "nodejs" },
      { name: "paris" },
      { name: "france" },
      { name: "dev" },
    ];

    // Fonction pour générer une date aléatoire récente (dans les 7 derniers jours)
    const getRandomRecentDate = () => {
      const now = new Date();
      const daysAgo = Math.floor(Math.random() * 7);
      const hoursAgo = Math.floor(Math.random() * 24);
      const minutesAgo = Math.floor(Math.random() * 60);

      now.setDate(now.getDate() - daysAgo);
      now.setHours(now.getHours() - hoursAgo);
      now.setMinutes(now.getMinutes() - minutesAgo);

      return now;
    };

    // Générer 10 tweets avec des données aléatoires
    const tweetsData = [
      {
        author: userIds[0], // Alexandre
        content:
          "Je viens de lancer mon nouveau projet en React et Node.js ! Tellement excité de partager ça avec vous bientôt ! #webdev #react #nodejs",
        submittedAt: getRandomRecentDate(),
        likes: Math.floor(Math.random() * 15),
        userLikes: [],
        hashtags: hashtagsData[5]._id, // react
      },
      {
        author: userIds[1], // Henri
        content:
          "Les requêtes MongoDB commencent à faire sens. J'adore l'aggregation pipeline ! #mongodb #coding",
        submittedAt: getRandomRecentDate(),
        likes: Math.floor(Math.random() * 12),
        userLikes: [],
        hashtags: hashtagsData[3]._id, // mongodb
      },
      {
        author: userIds[2], // Etienne
        content:
          "Quel temps magnifique à Paris aujourd'hui ! Parfait pour coder en terrasse ☀️ #paris #dev",
        submittedAt: getRandomRecentDate(),
        likes: Math.floor(Math.random() * 20),
        userLikes: [],
        hashtags: hashtagsData[7]._id, // paris
      },
      {
        author: userIds[0], // Alexandre
        content:
          "Je galère avec les promesses en JavaScript... quelqu'un a un bon tuto à recommander ? #javascript #coding",
        submittedAt: getRandomRecentDate(),
        likes: Math.floor(Math.random() * 8),
        userLikes: [],
        hashtags: hashtagsData[2]._id, // javascript
      },
      {
        author: userIds[1], // Henri
        content:
          "Vient de finir mon premier projet full-stack ! MongoDB + Express + React + Node 🚀 #webdev #mern",
        submittedAt: getRandomRecentDate(),
        likes: Math.floor(Math.random() * 25),
        userLikes: [],
        hashtags: hashtagsData[4]._id, // webdev
      },
      {
        author: userIds[2], // Etienne
        content:
          "Les hooks React ont changé ma vie. useEffect, useState... c'est tellement plus simple ! #react #javascript",
        submittedAt: getRandomRecentDate(),
        likes: Math.floor(Math.random() * 17),
        userLikes: [],
        hashtags: hashtagsData[5]._id, // react
      },
      {
        author: userIds[0], // Alexandre
        content: "Journée debugging... on connaît tous ça 😅 #coding #dev",
        submittedAt: getRandomRecentDate(),
        likes: Math.floor(Math.random() * 22),
        userLikes: [],
        hashtags: hashtagsData[9]._id, // dev
      },
      {
        author: userIds[1], // Henri
        content:
          "Je suis tombé amoureux de Node.js. La programmation asynchrone, c'est la vie ! #nodejs #javascript",
        submittedAt: getRandomRecentDate(),
        likes: Math.floor(Math.random() * 14),
        userLikes: [],
        hashtags: hashtagsData[6]._id, // nodejs
      },
      {
        author: userIds[2], // Etienne
        content:
          "Rendez-vous demain au meetup tech à Paris ! Qui sera là ? #tech #paris #france",
        submittedAt: getRandomRecentDate(),
        likes: Math.floor(Math.random() * 18),
        userLikes: [],
        hashtags: hashtagsData[0]._id, // tech
      },
      {
        author: userIds[0], // Alexandre
        content:
          "Les aggregations MongoDB sont puissantes mais complexes. Je commence enfin à comprendre ! #mongodb #coding",
        submittedAt: getRandomRecentDate(),
        likes: Math.floor(Math.random() * 10),
        userLikes: [],
        hashtags: hashtagsData[3]._id, // mongodb
      },
    ];

    // Code à utiliser pour insérer les données en MongoDB
    // 1. D'abord insérer les hashtags

    const insertedHashtags = await Hashtag.insertMany(hashtagsData);

    // 2. Mettre à jour les références de hashtags dans les tweets
    tweetsData.forEach((tweet, index) => {
      // Utiliser l'ID du hashtag inséré correspondant
      tweet.hashtags = insertedHashtags[index % insertedHashtags.length]._id;
    });

    // 3. Insérer les tweets
    const insertedTweets = await Tweet.insertMany(tweetsData);
    console.log(`${insertedTweets.length} tweets insérés avec succès!`);

    /*
// Ou pour insérer dans une console MongoDB directement:
db.hashtags.insertMany(hashtagsData);
const insertedHashtags = db.hashtags.find().toArray();

// Mettre à jour les références de hashtags dans les tweets
tweetsData.forEach((tweet, index) => {
  tweet.hashtags = insertedHashtags[index % insertedHashtags.length]._id;
  db.tweets.insertMany(tweetsData);

});*/

    //res.json(tweets);
  } catch (exception) {
    console.log(exception);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { searchTweets, submitTweet, generateMock };
