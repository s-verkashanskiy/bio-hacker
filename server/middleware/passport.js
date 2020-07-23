import argon2 from 'argon2';
import User from '../models/user.js';
import d from 'debug';
import passport from 'passport';// Simple and elegant authentication library for node.js.
import GStrategy from 'passport-google-oauth';
import Yandex from 'passport-yandex';
import Instagram from 'passport-instagram';
import Facebook from 'passport-facebook';
import Twitter from 'passport-twitter';
import GitHub from 'passport-github';
import LinkedIn from 'passport-linkedin-oauth2';
const debug = d('app:passport');
const GoogleStrategy = GStrategy.OAuth2Strategy;
const YandexStrategy = Yandex.Strategy;
const InstagramStrategy = Instagram.Strategy;
const FacebookStrategy = Facebook.Strategy;
const TwitterStrategy = Twitter.Strategy;
const GitHubStrategy = GitHub.Strategy;
const LinkedInStrategy = LinkedIn.Strategy;


export default function (app) {

  // passport.js
  app.use(passport.initialize());
  app.use(passport.session());
  passport.serializeUser((user, done) => done(null, user));
  passport.deserializeUser((user, done) => done(null, user));
  // ---------------------------------------------------
  
  // Sign in with Google.
  passport.use(new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    async (req, accessToken, refreshToken, profile, done) => {
      let user = await User.findOne({ email: profile.emails[0].value });
      if (user === null) {
        user = await new User({
          google: profile.id,
          username: profile.displayName,
          email: profile.emails[0].value,
          password: await argon2.hash(''),
          gender: profile._json.gender,
          flag: 0,
        }).save();
      }
      done(null, user);
    },
  ));

  // Sign in with Yandex
  passport.use(new YandexStrategy(
    {
      clientID: process.env.YANDEX_CLIENT_ID,
      clientSecret: process.env.YANDEX_CLIENT_SECRET,
      callbackURL: "/auth/yandex/callback",
    },
    (accessToken, refreshToken, profile, done) => done(null, profile.displayName),
  ));
  

  // Sign in with Facebook.
  passport.use('facebook', new FacebookStrategy({
    clientID: process.env.FACEBOOK_ID,
    clientSecret: process.env.FACEBOOK_SECRET,
    callbackURL: '/auth/facebook/callback',
    profileFields: ['name', 'email', 'link', 'locale', 'timezone', 'gender'],
    passReqToCallback: true,
  }, (req, accessToken, refreshToken, profile, done) => done(null, profile.displayName)));


  // Sign in with Twitter.
  passport.use('twitter', new TwitterStrategy({
    consumerKey: process.env.TWITTER_KEY,
    consumerSecret: process.env.TWITTER_SECRET,
    callbackURL: '/auth/twitter/callback',
    // passReqToCallback: true
  }, (token, tokenSecret, profile, cb) => cb(null, profile.displayName)));


  // Sign in with Instagram.
  passport.use('instagram', new InstagramStrategy({
    clientID: process.env.INSTAGRAM_ID,
    clientSecret: process.env.INSTAGRAM_SECRET,
    callbackURL: '/auth/instagram/callback',
    passReqToCallback: true,
    scope: ['basic', 'public_content', 'comments', 'follower_list', 'likes', 'relationships']
  }, (req, accessToken, refreshToken, profile, done) => done(null, profile.displayName)));


  // Sign in with LinkedIn.
  passport.use('linkedin', new LinkedInStrategy({
    clientID: process.env.LINKEDIN_ID,
    clientSecret: process.env.LINKEDIN_SECRET,
    callbackURL: process.env.LINKEDIN_CALLBACK_URL,
    scope: ['r_basicprofile', 'r_emailaddress'],
    passReqToCallback: true
  }, (req, accessToken, refreshToken, profile, done) => done(null, profile.displayName)));


  // Sign in with GitHub.
  passport.use('github', new GitHubStrategy({
    clientID: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET,
    callbackURL: '/auth/github/callback',
    passReqToCallback: true,
  }, (req, accessToken, refreshToken, profile, done) => done(null, profile.displayName)));

}
