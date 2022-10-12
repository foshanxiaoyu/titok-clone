class tkVideos {
  constructor(
    url,
    channel,
    song,
    likes,
    messages,
    description,
    shares,
    created,
    updateTime,
  ) {
    this.url = url;
    this.channel = channel;
    this.song = song;
    this.likes = likes;
    this.messages = messages;
    this.description = description;
    this.shares = shares;
    this.created = new Date();
    this.updateTime = new Date();
  }
}
module.exports = { tiktok: tkVideos };
