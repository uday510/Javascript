const video = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(function (tag) {
      console.log(this, tag);
    }, this); // --> this now refers to video OBJ.
  },
};

video.showTags();