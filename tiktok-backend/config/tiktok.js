class tkVideos {
  constructor(url, channel, song, likes, messages, description, shares) {
    this.url = url;
    this.channel = channel;
    this.song = song;
    this.likes = likes;
    this.messages = messages;
    this.description = description;
    this.shares = shares;
  }
}
module.exports = { tkVideos: tkVideos };
