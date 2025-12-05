/** @format */

// lib/spotify.ts

// What permissions we need from Spotify
export const scopes = [
  'user-read-playback-state', // See what's playing
  'user-modify-playback-state', // Control playback (play/pause)
  'user-read-currently-playing', // Get current song info
  'playlist-read-private', // Read user's playlists
  'playlist-modify-public', // Create playlists
  'user-library-read', // Access saved songs
  'user-library-modify', // Save songs
].join(' ');

// Spotify API endpoints
export const SPOTIFY_API_BASE = 'https://api.spotify.com/v1';
export const SPOTIFY_ACCOUNTS_BASE = 'https://accounts.spotify.com';
