---
slug: 'spotify-playlist'
date: '2020-01-09'
title: 'Spotify Playlist Editor'
category: 'Front-end Development'
featuredImage: 'images/SpotifyPlaylist.jpg'
featuredImageWidth: 600px

draft: false
---

import SetHeaderColor from '../../src/components/SetHeaderColor/SetHeaderColor';
import SectionHeader from '../../src/components/SectionHeader/SectionHeader';

<SetHeaderColor color="#1db954" />

<SectionHeader>Project Information</SectionHeader>

**Technologies Used**: React, Javascript, HTML, CSS, Axios, Styled Components<br />
**Demo:** [Spotify Playlist Editor Demo](https://examples.adamwebster.me/spotifyplaylist)<br />
**GitHub Repo:** [Spotify Playlist Editor Repo](https://github.com/adamwebster/react-tests/tree/master/src/pages/SpotifyPlaylist)

<SectionHeader> Description </SectionHeader>

I created this project to learn how to work with the **Spotify API**, specifically the playlist part of the API.

<SectionHeader>How it Works</SectionHeader>

When a user would first come to the page it would require them to login in using **Spotify** which will redirect them to a Spotify page to login.  

After they login using Spotify they are redirected back to the page where they are prompted to choose one of their playlists to view/edit.  

Once they choose a playlist they can add or remove songs. If they try to add the same song twice then a message will show that they are not allowed to add the same song twice.

All of the information for the playlist is stored using **Context**.
<SectionHeader>Images</SectionHeader>

<figure>

![Image of login to spotify](/images/SpotifyPlaylist-Login.jpg)

<figcaption>Login to Spotify</figcaption>

</figure>

<figure>

![Image of select a playlist](/images/SpotifyPlaylist-Select-a-Playlist.jpg)

<figcaption>Select a Spotify playlist</figcaption>

</figure>

<figure>

![Image of RSS Reader article page](/images/SpotifyPlaylist-Search.jpg)

<figcaption>Searching Spotify's database of songs</figcaption>
</figure>

<figure>

![Image of RSS Reader error](/images/SpotifyPlaylist-Error.jpg)

<figcaption>Message that shows when a song that already is on the list is added again</figcaption>
</figure>


