import express from 'express';
import passport from 'passport';

const router = express.Router();


// Google authentication
router.get('/google', passport.authenticate('google', {scope: 'profile email'}));
router.get('/google/callback', passport.authenticate('google'), (req, res) => {
  if (req.user) req.session.user = req.user;
  if(req.session.user.flag === 0) {
    res.redirect('http://localhost:3000/stepper');
  } else if(req.session.user.flag === 1) {
    res.redirect('http://localhost:3000/stepper');
  } else if(req.session.user.flag === 2) {
    res.redirect('http://localhost:3000/user');
  }
});

router.get('/yandex', passport.authenticate('yandex', { scope: ['profile'] }));
router.get('/yandex/callback', passport.authenticate('yandex'),
(req, res) => res.redirect('http://localhost:3000'));

router.get('/facebook', passport.authenticate('facebook', {scope: ['email', 'public_profile']}));
router.get('/facebook/callback', passport.authenticate('facebook', {failureRedirect: '/login'}),
(req, res) => res.redirect('http://localhost:3000'));

router.get('/twitter', passport.authenticate('twitter'));
router.get('/twitter/callback', passport.authenticate('twitter', {failureRedirect: '/login'}),
(req, res) => res.redirect('http://localhost:3000'));

router.get('/instagram', passport.authenticate('instagram'));
router.get('/instagram/callback', passport.authenticate('instagram', { failureRedirect: '/login' }),
(req, res) => res.redirect('http://localhost:3000'));

router.get('/linkedin', passport.authenticate('linkedin', { state: 'SOME STATE' }));
router.get('/linkedin/callback', passport.authenticate('linkedin', { failureRedirect: '/login' }),
(req, res) => res.redirect('http://localhost:3000'));

router.get('/github', passport.authenticate('github'));
router.get('/github/callback', passport.authenticate('github', { failureRedirect: '/login' }),
(req, res) => res.redirect('http://localhost:3000'));

export default router;
